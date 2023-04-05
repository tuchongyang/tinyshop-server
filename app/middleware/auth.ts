import { Context } from 'egg';

const auth = function(permissionId?: string, action?: string) {
  return async function auth(ctx: Context) {
    if (!ctx.user?.id) {
      ctx.fail('未登录', 401);
      return false;
    }
    if (permissionId && action) {
    //   const user = ctx.getUser() // await ctx.service.cache.redis.get('user-' + ctx.user);
    //   if (!user) {
    //     ctx.fail('登录已过期', 401);
    //     return false;
    //   }
    //   const permission =  user.permissions.find(item => item.permissionId === permissionId && item.actions.indexOf(action) > -1);
    //   if (!permission) {
    //     ctx.fail(`功能${permissionId}未授权${action}操作`, 403);
    //     return false;
    //   }
    }
    return true;
  };
};
module.exports = auth;
export default auth;
