import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
const auth = require('../../middleware/auth')
/**
* @Controller 商品分类
*/
bp.prefix('/shop/category', 'categoryController')
export default class categoryController extends Controller {
    /** 分页列表 */
    @bp.get('/', auth('goodCategory', 'list'))
    public async index() {
        const { ctx } = this;
        let list = await ctx.service.shop.category.list(ctx.query)
        ctx.success(list)
    }
    /** 不分页列表 */
    @bp.get('/list', auth('goodCategory', 'list'))
    public async list() {
        const { ctx } = this;
        let list = await ctx.service.shop.category.select(ctx.query)
        ctx.success(list)
    }

    @bp.post('/save', auth('goodCategory', 'add'))
    public async save(){
        const { ctx } = this;
        let params = ctx.request.body;
        let ret = await ctx.service.shop.category.save(params);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    @bp.del('/:id', auth('goodCategory', 'delete'))
    public async remove(){
        const { ctx } = this;
        let ret = await ctx.service.shop.category.remove(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    
    @bp.get('/:id', auth('goodCategory', 'detail'))
    public async detail(){
        const { ctx } = this;
        const data = await ctx.service.shop.category.detail(ctx.params.id)
        ctx.success(data)
       
    }
    

}