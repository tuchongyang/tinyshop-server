import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
const auth = require('../../middleware/auth')
/**
* @Controller 用户
*/
bp.prefix('/system/user', 'UserController');
export default class UserController extends Controller {
  /** 分页列表 */
  /**
   * @api {get} /api/system/user 用户分页列表
   * @apiName GetUser
   * @apiGroup 用户管理
   *
   * @apiSuccess {String} firstname Firstname of the User.
   * @apiSuccess {String} lastname  Lastname of the User.
   *
   * @apiSuccessExample 成功返回:
   *  HTTP/1.1 200 OK
   *  {
          "status": 200,
          "result": {
              "count": 2,
              "rows": [
                  {
                      "id": 1,
                      "username": "admin",
                      "email": null,
                      "password": "e10adc3949ba59abbe56e057f20f883e",
                      "name": "管理员1",
                      "sex": 2,
                      "avatarId": 34,
                      "type": 1,
                      "phone": null,
                      "roleId": 1,
                      "status": 1,
                      "lastLoginTime": null,
                      "unionid": null,
                      "openid": null,
                      "createdAt": "2020-08-23 08:10:20",
                      "updatedAt": "2020-12-12 14:30:08",
                      "role": {
                          "id": 1,
                          "name": "管理员",
                          "describe": null,
                          "status": 1,
                          "createdAt": "2020-08-23 13:55:19",
                          "updatedAt": "2020-11-23 11:14:54"
                      }
                  },
              ]
          }
      }
    *
    */
  @bp.get('/', auth('system-user', 'list'))
  public async index() {
    const { ctx } = this;
    const list = await ctx.service.system.user.list(ctx.query);
    ctx.success(list);
  }
  /**
   * @api {post} /api/system/user/login 登录
   * @apiName login
   * @apiGroup 用户管理
   * @apiParam {name} 用户名、邮箱、手机
   * @apiParam {password} 密码
   *
   * @apiParamExample {json} 请求示例:
   * {
   *    "name":"admin",
   *    "password":"123456"
   * }
   */
  @bp.post('/login')
  public async login() {
    const { ctx } = this;
    const { name, password } = ctx.request.body;
    const { code, message, token } = await ctx.service.system.user.login({ name, password });
    if (code === 0) {
      ctx.success(token);
    } else {
      ctx.fail(message);
    }
  }
  /**
   * @api {get} /api/system/user/logout 退出登录
   * @apiName logout
   * @apiGroup 用户管理
   *
   */
  @bp.get('/logout', auth())
  public async logout() {
    const { ctx } = this;
    ctx.session = null;
    ctx.success();
  }

  @bp.post('/save', auth('system-user', 'add'))
  public async save() {
    const { ctx } = this;
    const params = ctx.request.body;
    const ret = await ctx.service.system.user.save(params);
    if (ret.code === 0) {
      ctx.success();
    } else {
      ctx.fail(ret.message, ret.code);
    }
  }
  /**
   * @api {post} /api/system/user/update 修改用户信息
   * @apiName userUpdate
   * @apiGroup 用户管理
   * @apiParamExample {json} 请求示例
   * {
   *  "name": "Eve"
   * }
   *
   */
  @bp.post('/update', auth())
  public async update() {
    const { ctx } = this;
    const params = ctx.request.body;
    params.id = ctx.user;
    const ret = await ctx.service.system.user.update(params);
    if (ret.code === 0) {
      ctx.success();
    } else {
      ctx.fail(ret.message, ret.code);
    }
  }
  @bp.post('/modify/:id', auth('system-user', 'update'))
  public async modify() {
    const { ctx } = this;
    const params = ctx.request.body;
    const ret = await ctx.service.system.user.update({id: ctx.params.id, ...params });
    if (ret.code === 0) {
      ctx.success();
    } else {
      ctx.fail(ret.message, ret.code);
    }
  }
  @bp.del('/:id', auth('system-user', 'delete'))
  public async remove() {
    const { ctx } = this;
    const ret = await ctx.service.system.user.remove(ctx.params.id);
    if (ret.code === 0) {
      ctx.success();
    } else {
      ctx.fail(ret.message, ret.code);
    }
  }
  /**
   * @api {get} /api/system/user/info 获取用户信息
   * @apiName userInfo
   * @apiGroup 用户管理
   * @apiSuccessExample 成功返回:
   * {
      "status": 200,
      "result": {
          "id": 1,
          "username": "admin",
          "email": null,
          "password": "e10adc3949ba59abbe56e057f20f883e",
          "name": "管理员1",
          "sex": 2,
          "avatarId": 34,
          "type": 1,
          "phone": null,
          "roleId": 1,
          "status": 1,
          "lastLoginTime": null,
          "unionid": null,
          "openid": null,
          "createdAt": "2020-08-23 08:10:20",
          "updatedAt": "2020-12-12 14:30:08",
          "role": {
              "id": 1,
              "name": "管理员",
              "describe": null,
              "status": 1,
              "createdAt": "2020-08-23 13:55:19",
              "updatedAt": "2020-11-23 11:14:54"
          },
          "avatar": {
              "id": 34,
              "format": "image/png",
              "url": "/public/uploads/2020/12/12/1607754606300671.2143153498937.png",
              "path": "app\\public\\uploads\\2020\\12\\12\\1607754606300671.2143153498937.png",
              "size": 113592,
              "name": "1607754606300671.2143153498937.png",
              "type": "image",
              "creator": null,
              "createdAt": "2020-12-12 14:30:06",
              "updatedAt": "2020-12-12 14:30:06"
          },
          "permissions": [
              {
                  "id": 1,
                  "roleId": 1,
                  "permissionId": "user",
                  "actions": "query,add",
                  "createdAt": "2020-08-27 10:27:31",
                  "updatedAt": "2020-08-27 10:27:31"
              }
          ]
      }
  }
    *
    */
  @bp.get('/info', auth())
  public async info() {
    const { ctx } = this;
    const userInfo = await ctx.service.system.user.getUserInfo({ id: ctx.user });
    return ctx.success(userInfo);
  }
  @bp.get('/detail/:id', auth('system-user', 'detail'))
  public async detail() {
    const { ctx } = this;
    const userInfo = await ctx.service.system.user.detail(ctx.params.id);
    return ctx.success(userInfo);
  }
  @bp.get('/menu', auth())
  public async menu() {
    const { ctx } = this;
    const useObj = await ctx.service.system.user.detail(ctx.user);
    const list = await ctx.service.system.user.getMenuTree(useObj.roleId);
    ctx.success(list);
  }
}
