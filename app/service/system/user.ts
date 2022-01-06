import { Service } from 'egg';
const crypto = require('crypto');


/**
 * User Service
 */
export default class UserService extends Service {

  /**
   * 列表
   * @param options - 列表查询参数
   */
  public async list(options) {
    const { pageIndex = 1, pageSize = this.config.pageSize, status } = options;
    const { Op } = this.app.Sequelize;
    const where = {} as any;
    [ 'name', 'username', 'email', 'phone' ].forEach(a => {
      if (options[a]) {
        where[a] = {
          [Op.substring]: '%' + options[a],
        };
      }
    });
    if (typeof status !== 'undefined' && status !== '') {
      where.status = status;
    }
    const list = await this.app.model.SystemUser.findAndCountAll({
      limit: +pageSize,
      offset: pageSize * (pageIndex - 1),
      where,
      include: [
        {
          model: this.app.model.SystemRole,
          as: 'role', // 这里的 as需要与之前定义的as名字相同
        },
      ],
      attributes: { exclude: [ 'password' ] },
    });
    return list;
  }
  /**
   * 保存
   * @param options - 列表查询参数
   */
  public async save(options: any) {
    const { ctx } = this;
    const { password } = options;
    let results = { code: 400, message: '失败' };
    const result = await ctx.model.SystemUser.findOne({
      where: { username: options.username }, // 查询条件
    });
    if (!result) {
      const hash = crypto.createHash('md5');
      options.password = hash.update(password).digest('hex');
      await ctx.model.SystemUser.create(options);
      results = { code: 0, message: '添加成功' };
    } else {
      results = { code: 400, message: '该账号已存在' };
    }

    return results;
  }
  /** 更新 */
  public async update(options: any) {
    const { ctx } = this;
    const { id, ...opts } = options;
    let results = { code: 500, message: '失败' };
    await ctx.model.SystemUser.update(opts, {
      where: { id },
    });
    results = { code: 0, message: '更新成功' };
    return results;
  }
  /**
   * 登录
   * @param options - 参数
   */
  public async login(options: any) {
    const { ctx } = this;
    const { or } = this.app.Sequelize.Op;
    const { name, password } = options;
    let results = { code: 400, message: '失败', token: '' };
    const result = await ctx.model.SystemUser.findOne({
      where: {
        [or]: [{ username: name || '' }, { email: name || '' }, { phone: name || '' }],
      },
    });
    if (result) {
      const hash = crypto.createHash('md5');
      const HashPassword = hash.update(password).digest('hex');
      const data = await ctx.model.SystemUser.findOne({
        where: {
          [or]: [{ username: name || '' }, { email: name || '' }, { phone: name || '' }],
          password: HashPassword,
        },
        attributes: { exclude: [ 'password' ] },
      });
      if (!data) {
        return (results = { code: 400, message: '帐号或密码错误', token: '' });
      }
      const userInfo = await this.getUserInfo({ id: data.id });
      ctx.service.cache.redis.set('user-' + data.id, userInfo);
      /*
      * sign({根据什么生成token})
      * app.config.jwt.secret 配置的密钥
      * {expiresIn:'24h'} 过期时间
      */
      const token = this.app.jwt.sign({ user: data.id }, this.config.jwt.secret, { expiresIn: '24h' });
      results = { code: 0, message: '登录成功', token };
    } else {
      results = { code: 400, message: '账号不存在', token: '' };
    }
    return results;
  }

  public async detail(id) {
    const data = await this.app.model.SystemUser.findOne({
      where: { id },
      attributes: {
        exclude: [ 'password' ],
      },
    });
    return data;
  }
  // 删除
  public async remove(id) {
    let results;
    await this.ctx.model.SystemUser.destroy({ where: { id } }).then(() => {
      results = { code: 0, message: '删除成功' };
    }).catch(error => {
      results = { code: 400, message: error };
    });
    return results;
  }
  // 登录查询个人信息
  async getUserInfo(options) {
    const { ctx } = this;
    let userInfo: any = {};
    await ctx.model.SystemUser.findOne({
      where: options,
      include: [
        { model: this.app.model.SystemRole, as: 'role' },
        { model: this.app.model.SystemFile, as: 'avatar', attributes: [] },
      ],
      attributes: {
        exclude: [ 'password' ],
        include: [
          [ this.app.Sequelize.col('avatar.url'), 'avatarUrl' ],
        ],
      },
    }).then(async res => {
      const permissions = res.dataValues.role && await ctx.model.SystemRolePermission.findAll({ where: { roleId: res.dataValues.role.dataValues.id } }) || [];
      res.dataValues.permissions = permissions || [];
      userInfo = res;
    });
    const merchantModel = await ctx.model.Merchant.findOne({
      where: { userId: userInfo.id },
      include: [
        { model: this.app.model.SystemFile, as: 'logo', attributes: [ ] },
      ],
      attributes: {
        include: [
          [ this.app.Sequelize.col('logo.url'), 'logoUrl' ],
        ],
      },
    });
    if (merchantModel) { // 如果查到店铺信息，则将商家信息一并查询
      userInfo.setDataValue('merchant', merchantModel);
    }
    return userInfo;
  }
  // 获取菜单
  async getMenuTree(roleId: number) {
    const { ctx } = this;
    let list = await ctx.model.SystemRoleMenu.findAll({
      where: { roleId },
      include: [
        { model: this.app.model.SystemMenu, as: 'menu' },
      ],
      attributes: {
        exclude: [ 'createdAt', 'updateAt', 'status' ],
      },
    });
    list = list.map(item => item.menu);
    const result: Array<any> = [];
    const find = (menus, parentId) => {
      list.filter(item => item.parentId === parentId).forEach(item => {
        item.dataValues.children = [];
        find(item.dataValues.children, item.id);
        menus.push(item);
      });
    };
    find(result, null);
    return result;
  }
}
