import { Service } from 'egg';
/**
 * role Service
 */
export default class RoleService extends Service {

  /**
  * 列表
  * @param options - 列表查询参数
  */
  public async list(options) {
    const { pageIndex = 1, pageSize = this.config.pageSize } = options;
    const list = await this.app.model.SystemRole.findAndCountAll({
      limit: +pageSize,
      offset: pageSize * (pageIndex - 1),
    });
    return list;
  }
  /**
  * 列表
  */
  public async select() {
    const list = await this.app.model.SystemRole.findAll();
    return list;
  }
  /**
   * 保存
   * @param options - 参数
   */
  public async save(options: any) {
    const { ctx } = this;
    let results = { code: 400, message: '失败' };
    await ctx.model.SystemRole.upsert(options).then(() => {
      results = { code: 0, message: '添加成功' };
    }).catch(err => {
      results = { code: 400, message: err };
    });
    return results;
  }

  public async detail(id) {
    const data = await this.app.model.SystemRole.findOne({ where: { id } });
    return data;
  }
  // 删除
  public async remove(id) {
    let results;
    await this.ctx.model.SystemRole.destroy({ where: { id } }).then(() => {
      results = { code: 0, message: '删除成功' };
    }).catch(error => {
      results = { code: 400, message: error };
    });
    return results;
  }
  // 获取角色菜单
  async getMenuTree(roleId: number) {
    const { ctx } = this;
    let list = await ctx.model.SystemRoleMenu.findAll({
      where: { roleId },
      include: [
        { model: this.app.model.SystemMenu, as: 'menu' },
      ],
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
  // 获取角色菜单
  async getMenus(roleId: number) {
    const { ctx } = this;
    let list = await ctx.model.SystemRoleMenu.findAll({
      where: { roleId },
      include: [
        { model: this.app.model.SystemMenu, as: 'menu' },
      ],
    });
    list = list.map(item => item.menu);
    return list;
  }
  async saveMenuTree(roleId: number, menus: object) {
    /** 先将树形菜单checked为true的菜单取出来 */
    const checkedIds: number[] = [];
    const checked = menus => {
      for (let i = 0; i < menus.length; i++) {
        if (menus[i].checked) {
          checkedIds.push(menus[i].id);
        }
        if (menus[i].children && menus[i].children.length) {
          checked(menus[i].children);
        }
      }
    };
    checked(menus);
    const roleMenus = checkedIds.map(a => ({ roleId, menuId: a }));
    /** 删除原来角色对应菜单，再重新保存一份新的 */
    await this.ctx.model.SystemRoleMenu.destroy({
      where: { roleId },
    });
    console.log('保存的rolemenu', roleMenus);
    return await this.ctx.model.SystemRoleMenu.bulkCreate(roleMenus);
  }
  // 获取角色菜单
  async getPermission(roleId: number) {
    const { ctx } = this;
    const list = await ctx.model.SystemRolePermission.findAll({
      where: { roleId },
      include: [
        { model: this.app.model.SystemPermission, as: 'permission' },
      ],
    });
    const listAll = await ctx.model.SystemPermission.findAll();
    return listAll.map(item => {
      const current = list.find(a => a.permissionId === item.id);
      item.dataValues.checked = !!current;
      item.dataValues.actions = item.actions.split(',').map(a => ({
        action: a,
        name: ctx.helper.getActionName(a),
        checked: current && current.actions.indexOf(a) > -1 || false,
      }));
      return item;
    });
    // 查询所有
    // return list.map(item=>{
    //     item.actions = item.permission && item.permission.actions.split(',').map(a=>({action:a,checked: item.actions.indexOf(a)>-1})) ||[];
    //     delete item.dataValues.permission;
    //     return item;
    // })
  }
  async savePermission(roleId: number, menus: any) {
    /** 先将树形菜单checked为true的菜单取出来 */
    const checkeds: any[] = menus.filter(a => a.checked).map(item => {
      return {
        roleId,
        permissionId: item.id,
        actions: item.actions.filter(a => a.checked).map(a => a.action).join(','),
      };
    });
    /** 删除原来角色对应菜单，再重新保存一份新的 */
    await this.ctx.model.SystemRolePermission.destroy({
      where: { roleId },
    });
    return await this.ctx.model.SystemRolePermission.bulkCreate(checkeds);

  }

}
