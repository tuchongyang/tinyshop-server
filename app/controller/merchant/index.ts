import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
const auth = require('../../middleware/auth')
/**
* @Controller 角色
*/
bp.prefix('/merchant', 'MerchantController')
export default class MerchantController extends Controller {
    /** 分页列表 */
    @bp.get('/', auth('merchant', 'list'))
    public async index() {
        const { ctx } = this;
        let list = await ctx.service.merchant.index.list(ctx.query)
        ctx.success(list)
    }
    /** 不分页列表 */
    @bp.get('/list', auth('merchant', 'list'))
    public async list() {
        const { ctx } = this;
        let list = await ctx.service.merchant.index.select()
        ctx.success(list)
    }


    @bp.post('/save', auth('merchant', 'add'))
    public async save(){
        const { ctx } = this;
        let params = ctx.request.body;
        let ret = await ctx.service.merchant.index.save(params);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    //用户修改商家信息
    @bp.post('/update', auth('merchant', 'update'))
    public async update(){
        const { ctx } = this;
        let params = ctx.request.body;
        let ret = await ctx.service.merchant.index.update(params);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    @bp.del('/:id', auth('merchant', 'delete'))
    public async remove(){
        const { ctx } = this;
        let ret = await ctx.service.merchant.index.remove(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    
    @bp.get('/:id', auth('merchant', 'detail'))
    public async detail(){
        const { ctx } = this;
        const data = await ctx.service.merchant.index.detail(ctx.params.id)
        
        ctx.success(data)
       
    }
    

}