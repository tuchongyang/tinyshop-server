import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
const auth = require('../../middleware/auth')
/**
* @Controller 用户地址
*/
bp.prefix('/member/fav', 'FavController')
export default class FavController extends Controller {
    /**
     * @api {get} /api/member/fav 我的收藏列表
     * @apiName userFav
     * @apiGroup 个人中心-我的收藏
     * @apiParam {Number} page 页码
     * @apiParam {Number} pageSize 每页数量
     * @apiSuccessExample {json} 成功示例:
     * {
        "status": 200,
        "result": {
            "count": 1,
            "rows": [
                {
                    "id": 1,
                    "goodId": 1,
                    "userId": 1,
                    "createdAt": "2021-01-16 14:45:07",
                    "updatedAt": "2021-01-16 14:45:07",
                    "good": {
                        "id": 1,
                        "name": "OPPO RENO4全面屏手机",
                        "description": null,
                        "content": "这里是描述",
                        "thumbnail": null,
                        "categoryId": 18,
                        "merchantId": 1,
                        "salePrice": null,
                        "marketPrice": null,
                        "sales": 0,
                        "status": 1,
                        "createdAt": null,
                        "updatedAt": null,
                        "thumbnailImage": null
                    }
                }
            ]
        }
    }
     */
    /** 分页列表 */
    @bp.get('/',auth())
    public async index() {
        const { ctx } = this;
        let list = await ctx.service.member.fav.list(ctx.query)
        ctx.success(list)
    }
    /** 不分页列表 */
    @bp.get('/list',auth())
    public async list() {
        const { ctx } = this;
        let list = await ctx.service.member.fav.select()
        ctx.success(list)
    }

    
    /**
     * @api {post} /api/member/fav/save 添加收藏
     * @apiName userFavSave
     * @apiGroup 个人中心-我的收藏
     * @apiParam {Number} goodId 商品ID
     * @apiParamExample {json} 请求示例:
     * {
     *      "goodId": "1"
     *  }
     */
    @bp.post('/save',auth())
    public async save(){
        const { ctx } = this;
        let params = ctx.request.body;
        let ret = await ctx.service.member.fav.save(params);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    /**
     * @api {post} /api/member/fav/cancel 取消收藏
     * @apiName userFavCancel
     * @apiGroup 个人中心-我的收藏
     * @apiParam {Number} goodId 商品ID
     * @apiParamExample {json} 请求示例:
     * {
     *      "goodId": "1"
     * }
     * 
     */
    @bp.post('/cancel',auth())
    public async cancel(){
        const { ctx } = this;
        let ret = await ctx.service.member.fav.cancel(ctx.request.body);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    
    @bp.get('/:id',auth())
    public async detail(){
        const { ctx } = this;
        const data = await ctx.service.member.fav.detail(ctx.params.id)
        
        ctx.success(data)
       
    }
    

}