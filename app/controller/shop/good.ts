import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
const auth = require('../../middleware/auth')
/**
* @Controller 角色
*/
bp.prefix('/shop/good', 'GoodController')
export default class GoodController extends Controller {
    
    @bp.get('/', auth('shop-good', 'list'))
    public async index() {
        const { ctx } = this;
        let list = await ctx.service.shop.good.list(ctx.query)
        ctx.success(list)
    }
    /** 不分页列表 */
    @bp.get('/list', auth('shop-good', 'list'))
    public async list() {
        const { ctx } = this;
        let list = await ctx.service.shop.good.select()
        ctx.success(list)
    }


    @bp.post('/save', auth('shop-good', 'add'))
    public async save(){
        const { ctx } = this;
        let params = ctx.request.body;
        let ret = await ctx.service.shop.good.save(params);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    @bp.del('/:id', auth('shop-good', 'delete'))
    public async remove(){
        const { ctx } = this;
        let ret = await ctx.service.shop.good.remove(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    
    @bp.get('/:id', auth('shop-good', 'detail'))
    public async detail(){
        const { ctx } = this;
        const data = await ctx.service.shop.good.detail(ctx.params.id)
        
        ctx.success(data)
       
    }
    

}