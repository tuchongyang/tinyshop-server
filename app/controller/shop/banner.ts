import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
const auth = require('../../middleware/auth')
/**
* @Controller 角色
*/
bp.prefix('/shop/banner', 'BannerController')
export default class BannerController extends Controller {
    /** 分页列表 */
    @bp.get('/', auth('shop-banner', 'list'))
    public async index() {
        const { ctx } = this;
        let list = await ctx.service.shop.banner.list(ctx.query)
        ctx.success(list)
    }
    /** 不分页列表 */
    
    @bp.get('/list', auth('shop-banner', 'list'))
    public async list() {
        const { ctx } = this;
        let list = await ctx.service.shop.banner.select(ctx.query)
        ctx.success(list)
    }


    @bp.post('/save', auth('shop-banner', 'add'))
    public async save(){
        const { ctx } = this;
        let params = ctx.request.body;
        const user = ctx.getUser() // await ctx.service.cache.redis.get('user-' + ctx.user);
        let ret = await ctx.service.shop.banner.save({...params,merchantId: user.merchant?.id});
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    @bp.post('/update', auth('shop-banner', 'update'))
    public async update(){
        const { ctx } = this;
        let params = ctx.request.body;
        let ret = await ctx.service.shop.banner.update(params);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    @bp.del('/:id', auth('shop-banner', 'delete'))
    public async remove(){
        const { ctx } = this;
        let ret = await ctx.service.shop.banner.remove(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail( ret.message,ret.code)
        }
    }
    
    @bp.get('/:id', auth('shop-banner', 'detail'))
    public async detail(){
        const { ctx } = this;
        const data = await ctx.service.shop.banner.detail(ctx.params.id)
        ctx.success(data)
       
    }
    

}