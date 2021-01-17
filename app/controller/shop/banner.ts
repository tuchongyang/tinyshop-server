import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
const auth = require('../../middleware/auth')
/**
* @Controller 角色
*/
bp.prefix('/api/shop/banner', 'BannerController')
export default class BannerController extends Controller {
    /** 分页列表 */
    
    @bp.get('/')
    public async index() {
        const { ctx } = this;
        let list = await ctx.service.shop.banner.list(ctx.query)
        ctx.success(list)
    }
    /** 不分页列表 */
    /**
     * @api {get} /api/shop/banner/list 首页广告图列表
     * @apiName shopBanner
     * @apiGroup 店铺-广告图
     * @apiParam {Number} merchantId 店铺ID
     * @apiSuccessExample 成功返回:
     * {
        "status": 200,
        "result": [
            {
                "id": 4,
                "url": "",
                "sort": 8,
                "merchantId": 1,
                "status": 1,
                "image": {
                    "id": 84,
                    "url": "/public/uploads/2021/01/16/1610804243994930.8798108642115.jpg"
                }
            },
            {
                "id": 3,
                "url": "",
                "sort": 5,
                "merchantId": 1,
                "status": 1,
                "image": {
                    "id": 83,
                    "url": "/public/uploads/2021/01/16/1610804233531567.5261065878891.jpg"
                }
            }
        ]
    }
     * 
     */
    @bp.get('/list')
    public async list() {
        const { ctx } = this;
        let list = await ctx.service.shop.banner.select(ctx.query)
        ctx.success(list)
    }


    @bp.post('/save')
    public async save(){
        const { ctx } = this;
        let params = ctx.request.body;
        let ret = await ctx.service.shop.banner.save(params);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.code, ret.message)
        }
    }
    //用户用户修改商家信息
    @bp.post('/update',auth())
    public async update(){
        const { ctx } = this;
        let params = ctx.request.body;
        let ret = await ctx.service.shop.banner.update(params);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.code, ret.message)
        }
    }
    @bp.del('/:id')
    public async remove(){
        const { ctx } = this;
        let ret = await ctx.service.shop.banner.remove(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.code, ret.message)
        }
    }
    
    @bp.get('/:id')
    public async detail(){
        const { ctx } = this;
        const data = await ctx.service.shop.banner.detail(ctx.params.id)
        
        ctx.success(data)
       
    }
    

}