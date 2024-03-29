import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
/**
* @Controller 权限
*/
bp.prefix('/system/permission', 'PermissionController')
export default class PermissionController extends Controller {
    /** 分页列表 */
    @bp.get('/')
    public async index() {
        const { ctx } = this;
        let list = await ctx.service.system.permission.list(ctx.query)
        ctx.success(list)
    }
    /** 不分页列表 */
    @bp.get('/list')
    public async list() {
        const { ctx } = this;
        let list = await ctx.service.system.permission.select()
        ctx.success(list)
    }

    @bp.post('/save')
    public async save(){
        const { ctx } = this;
        let params = ctx.request.body;
        let ret = await ctx.service.system.permission.save(params);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    @bp.del('/:id')
    public async remove(){
        const { ctx } = this;
        let ret = await ctx.service.system.permission.remove(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    
    @bp.get('/:id')
    public async detail(){
        const { ctx } = this;
        const data = await ctx.service.system.permission.detail(ctx.params.id)
        
        ctx.success(data)
       
    }

    

}