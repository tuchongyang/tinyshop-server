import { Service } from 'egg';


/**
 * role Service
 */
export default class MenuService extends Service {

  /**
   * 列表
   * @param options - 列表查询参数
   */
  public async list(options) {
    const { pageIndex = 1, pageSize = this.config.pageSize} = options;
    const list = await this.app.model.SystemMenu.findAndCountAll({
      limit: +pageSize,
      offset: pageSize * (pageIndex - 1),
    });
    return list;
  }
  /**
   * 不分页列表
   */
  public async select() {
    const list = await this.app.model.SystemMenu.findAll();
    return list;
  }
  /**
   * 树形列表
   */
  public async tree() {
    // let {pageIndex = 1, pageSize = this.config.pageSize} = options
    const list = await this.app.model.SystemMenu.findAll({
      orderby: 'sort ASC',
      attributes: {
        exclude: [ 'createdAt', 'updatedAt', 'status' ],
      },
    });
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
  /**
   * 保存
   * @param options - 参数
   */
  public async save(options: any) {
    const { ctx } = this;
    let results = { code: 400, message: '失败' };
    await ctx.model.SystemMenu.upsert(options).then(() => {
      results = { code: 0, message: '添加成功' };
    }).catch(err => {
      results = { code: 400, message: err };
    });
    return results;
  }

  public async detail(id) {
    const data = await this.app.model.SystemMenu.findOne({ where: { id } });
    return data;
  }
  // 删除
  public async remove(id) {
    let results;
    await this.ctx.model.SystemMenu.destroy({ where: { id } }).then(() => {
      results = { code: 0, message: '删除成功' };
    }).catch(error => {
      results = { code: 400, message: error };
    });
    return results;
  }
  // 登录查询个人信息
  async getUserInfo(options) {
    const { ctx } = this;
    let userInfo = '';
    await ctx.model.SystemMenu.findOne({
      where: options,
    }).then(async res => {
      userInfo = res;
    });
    return userInfo;
  }
}
