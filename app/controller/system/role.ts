import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
const auth = require('../../middleware/auth')
/**
* @Controller 角色
*/
bp.prefix('/system/role', 'RoleController')
export default class RoleController extends Controller {
    /** 分页列表 */
    @bp.get('/', auth('system-role','list'))
    public async index() {
        const { ctx } = this;
        let list = await ctx.service.system.role.list(ctx.query)
        ctx.success({list,user:ctx.user})
    }
    /** 不分页列表 */
    @bp.get('/list', auth('system-role','list'))
    public async list() {
        const { ctx } = this;
        let list = await ctx.service.system.role.select()
        ctx.success(list)
    }

    @bp.post('/save', auth('system-role','add'))
    public async save(){
        const { ctx } = this;
        let params = ctx.request.body;
        let ret = await ctx.service.system.role.save(params);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    @bp.del('/:id', auth('system-role','delete'))
    public async remove(){
        const { ctx } = this;
        let ret = await ctx.service.system.role.remove(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    
    @bp.get('/:id', auth('system-role','detail'))
    public async detail(){
        const { ctx } = this;
        const data = await ctx.service.system.role.detail(ctx.params.id)
        ctx.success(data)
       
    }
    /** 获取角色菜单 */
    @bp.get('/:id/menu', auth('system-role','list'))
    public async menu(){
        const { ctx } = this;
        const data = await ctx.service.system.role.getMenus(ctx.params.id)
        ctx.success(data)
    }
    /** 新增、保存角色菜单 */
    @bp.post('/:id/menu', auth('system-role','menuSave'))
    public async menuSave(){
        const { ctx } = this;
        await ctx.service.system.role.saveMenuTree(ctx.params.id,ctx.request.body).then(()=>{
            ctx.success()
        }).catch(err=>{
            ctx.fail(err.message)
        })
    }
    /**获取角色权限 */
    @bp.get('/:id/permission', auth('system-role','list'))
    public async permission(){
        const { ctx } = this;
        const data = await ctx.service.system.role.getPermission(ctx.params.id)
        ctx.success(data)
    }
    /**新增、保存角色权限 */
    @bp.post('/:id/permission', auth('system-role','permissionSave'))
    public async permissionSave(){
        const { ctx } = this;
        await ctx.service.system.role.savePermission(ctx.params.id,ctx.request.body).then(()=>{
            ctx.success()
        }).catch(err=>{
            ctx.fail(err.message)
        })
    }

    

}