import { Controller } from 'egg';
import { bp } from 'egg-blueprint';

const crypto = require('crypto');
const auth = require('../middleware/auth');

export default class HomeController extends Controller {
  @bp.get('/')
  public async index() {
    const { ctx } = this;
    ctx.body = '欢迎访问';
  }
  @bp.get('/test', auth())
  public async test() {
    const { ctx } = this;
    ctx.success({
      user: ctx.user,
    });
  }
  @bp.get('/init')
  public async init() {
    const { ctx } = this;
    // 角色
    const roles = [
      { name: '管理员', id: 1 },
      { name: '商家', id: 2 },
      { name: '用户', id: 3 },
    ];
    // 菜单
    const menus = [
      { id: 1, name: '系统管理', url: '/system' },
      { id: 2, name: '菜单管理', url: '/system/menu', parentId: 1 },
      { id: 3, name: '用户管理', url: '/system/user', parentId: 1 },
      { id: 4, name: '角色管理', url: '/system/role', parentId: 1 },
      { id: 5, name: '文件管理', url: '/system/file', parentId: 1 },
      { id: 6, name: '日志管理', url: '/system/log', parentId: 1 },
      { id: 7, name: '商家管理', url: '/merchant' },
      { id: 8, name: '商家列表', url: '/merchant/merchant', parentId: 7 },
      { id: 9, name: '商品管理', url: '/good' },
      { id: 10, name: '商品列表', url: '/good/list', parentId: 9 },
      { id: 11, name: '商品分类', url: '/good/category', parentId: 9 },
      { id: 12, name: '设置', url: '/setting' },
      { id: 13, name: '个人资料', url: '/setting/person', parentId: 12 },
      { id: 14, name: '店铺资料', url: '/setting/shop', parentId: 12 },
      { id: 15, name: '订单', url: '/order' },
      { id: 16, name: '订单列表', url: '/order/list', parentId: 15 },
    ];
    // 权限
    const permissions = [
      { id: 'system-user', name: '用户管理', actions: 'list,add,delete,detail' },
      { id: 'system-menu', name: '菜单管理', actions: 'list,add,delete,detail,tree' },
      { id: 'system-role', name: '角色管理', actions: 'list,add,delete,detail,menuSave,permissionSave' },
      { id: 'system-file', name: '文件管理', actions: 'list,add,delete,detail' },
      { id: 'system-log', name: '日志管理', actions: 'list' },
      { id: 'merchant', name: '商家管理', actions: 'list,add,delete,detail,update' },
      { id: 'good', name: '商品管理', actions: 'list,add,delete,detail' },
      { id: 'goodCategory', name: '商品分类管理', actions: 'list,add,delete,detail' },
      { id: 'order', name: '订单', actions: 'list,add,delete,detail' },
      { id: 'banner', name: '轮播图', actions: 'list,add,delete,detail' },
    ];
    // 角色菜单
    const roleMenus = [
      { roleId: 1, menuId: 1 },
      { roleId: 1, menuId: 2 },
      { roleId: 1, menuId: 3 },
      { roleId: 1, menuId: 4 },
      { roleId: 1, menuId: 5 },
      { roleId: 1, menuId: 6 },
      { roleId: 1, menuId: 7 },
      { roleId: 1, menuId: 8 },
      { roleId: 1, menuId: 12 },
      { roleId: 1, menuId: 13 },
      { roleId: 2, menuId: 9 },
      { roleId: 2, menuId: 10 },
      { roleId: 2, menuId: 11 },
      { roleId: 2, menuId: 12 },
      { roleId: 2, menuId: 13 },
      { roleId: 2, menuId: 14 },
      { roleId: 2, menuId: 15 },
      { roleId: 2, menuId: 16 },
    ];
    // 角色权限
    const rolePermissions = [
      { roleId: 1, permissionId: 'system-user', actions: 'list,add,delete,detail' },
      { roleId: 1, permissionId: 'system-menu', actions: 'list,add,delete,detail' },
      { roleId: 1, permissionId: 'system-role', actions: 'list,add,delete,detail,menuSave,permissionSave' },
      { roleId: 1, permissionId: 'system-file', actions: 'list,add,delete,detail' },
      { roleId: 1, permissionId: 'system-log', actions: 'list' },
      { roleId: 1, permissionId: 'merchant', actions: 'list,add,delete,detail,update' },
      { roleId: 2, permissionId: 'good', actions: 'list,add,delete,detail' },
      { roleId: 2, permissionId: 'goodCategory', actions: 'list,add,delete,detail' },
      { roleId: 1, permissionId: 'merchant', actions: 'detail,update' },
      { roleId: 2, permissionId: 'order', actions: 'list,add,delete,detail' },
      { roleId: 2, permissionId: 'banner', actions: 'list,add,delete,detail' },
    ];
    const users = [{
      name: '超级管理员',
      username: 'admin',
      password: '123456',
      type: 1,
      roleId: 1,
    },{
      name: '商家',
      username: 'tcy',
      password: '123456',
      type: 2,
      roleId: 2,
    }].map(a=>{
      a.password = crypto.createHash('md5').update(a.password).digest('hex');
      return a
    });

    // 用户
    await this.app.model.SystemUser.truncate({ where: {} });
    await this.app.model.SystemUser.bulkCreate(users);

    // 菜单
    await this.app.model.SystemMenu.truncate({ where: {} });
    await this.app.model.SystemMenu.bulkCreate(menus);

    // 角色
    await this.app.model.SystemRole.truncate({ where: {} });
    await this.app.model.SystemRole.bulkCreate(roles);

    // 权限
    await this.app.model.SystemPermission.truncate({ where: {} });
    await this.app.model.SystemPermission.bulkCreate(permissions);

    // 角色菜单
    await this.app.model.SystemRoleMenu.truncate({ where: {} });
    await this.app.model.SystemRoleMenu.bulkCreate(roleMenus);
    // 角色权限
    await this.app.model.SystemRolePermission.truncate({ where: {} });
    await this.app.model.SystemRolePermission.bulkCreate(rolePermissions);

    ctx.success({
      msg: '初始化完成',
    });
  }
}
