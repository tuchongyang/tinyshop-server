import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
const auth = require('../../middleware/auth')
/**
* @Controller 订单
*/
bp.prefix('/api/order', 'OrderController')
export default class OrderController extends Controller {
    /** 分页列表 */
    @bp.get('/',auth())
    public async index() {
        const { ctx } = this;
        let list = await ctx.service.good.order.list(ctx.query)
        ctx.success(list)
    }
    /** 不分页列表 */
    @bp.get('/list',auth())
    public async list() {
        const { ctx } = this;
        let list = await ctx.service.good.order.select()
        ctx.success(list)
    }
    @bp.post('/save',auth())
    public async save(){
        const { ctx } = this;
        let params = ctx.request.body;
        let ret = await ctx.service.good.order.save(params);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.code, ret.message)
        }
    }
    @bp.del('/:id',auth())
    public async remove(){
        const { ctx } = this;
        let ret = await ctx.service.good.order.remove(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.code, ret.message)
        }
    }
    @bp.post('/cancel/:id',auth())
    public async cancel(){
        const { ctx } = this;
        let ret = await ctx.service.good.order.cancel(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.code, ret.message)
        }
    }
    
    @bp.get('/:id',auth())
    public async detail(){
        const { ctx } = this;
        const data = await ctx.service.good.order.detail(ctx.params.id)
        
        ctx.success(data)
       
    }
    

}