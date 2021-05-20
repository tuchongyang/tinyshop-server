import { Context } from 'egg';
module.exports = function(permissionId?:string, action?:string){
    return async function auth(ctx: Context) {
        if(!ctx.user){
            ctx.fail('未登录',401)
            return false;
        }
        if(permissionId && action){
            var permission = ctx.user.permissions.find(item=>item.permissionId==permissionId && item.actions.indexOf(action)>-1)
            if(!permission){
                ctx.fail(`功能${permissionId}未授权${action}`,403)
                return false;
            }
        }

        return true

    }
};

  