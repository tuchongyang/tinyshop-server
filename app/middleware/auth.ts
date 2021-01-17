import { Context } from 'egg';
module.exports = function(permissionId?:string, action?:string){
    return async function auth(ctx: Context) {
        if(!ctx.user){
            ctx.fail(401,'未登录')
            return false;
        }
        if(permissionId && action){
            var permission = ctx.user.permissions.find(item=>item.permissionId==permissionId && item.actions.indexOf(action)>-1)
            if(!permission){
                ctx.fail(403,'未授权')
                return false;
            }
        }

        return true

    }
};

  