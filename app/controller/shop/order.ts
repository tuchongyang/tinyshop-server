import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
const auth = require('../../middleware/auth')
/**
* @Controller 订单
*/
bp.prefix('/shop/order', 'OrderController')
export default class OrderController extends Controller {
    /** 分页列表 */
    @bp.get('/', auth('shop-order', 'list'))
    public async index() {
        const { ctx } = this;
        let list = await ctx.service.shop.order.list(ctx.query)
        ctx.success(list)
    }
    /** 不分页列表 */
    @bp.get('/list', auth('shop-order', 'list'))
    public async list() {
        const { ctx } = this;
        let list = await ctx.service.shop.order.select()
        ctx.success(list)
    }
    @bp.post('/save',auth())
    public async save(){
        const { ctx } = this;
        let params = ctx.request.body;
        let ret = await ctx.service.shop.order.save(params);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    @bp.del('/:id', auth('shop-order', 'delete'))
    public async remove(){
        const { ctx } = this;
        let ret = await ctx.service.shop.order.remove(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    @bp.post('/cancel/:id',auth())
    public async cancel(){
        const { ctx } = this;
        let ret = await ctx.service.shop.order.cancel(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    
    @bp.get('/:id',auth())
    public async detail(){
        const { ctx } = this;
        const data = await ctx.service.shop.order.detail(ctx.params.id)
        
        ctx.success(data)
       
    }
    

}