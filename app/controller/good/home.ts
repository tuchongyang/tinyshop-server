import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
const requireLogin = require('../../middleware/requireLogin')
/**
* @Controller 角色
*/
bp.prefix('/api/good', 'GoodController')
export default class GoodController extends Controller {
    /** 分页列表 */
    /**
     * @api {get} /api/good 商品分页列表
     * @apiName goodList
     * @apiGroup 商品管理
     *
     * @apiParam {Number} page 页码
     * @apiParam {Number} pageSize 分页数量
     * @apiParam {Number} merchantId 商铺Id(必传)
     * @apiParam {Number} categoryId 分类Id
     * @apiParam {Number} status 状态（1:上架，2:下架）
     * @apiParam {Number} priceOrder 按价格排序，1为升序，2为降序
     * @apiParam {Number} salesOrder 按销量排序，1为降序，2为升序序
     * @apiParamExample {json} 请求示例:
     * {
     *      "page": 1,
     *      "pageSize": 20,
     *      "merchantId": 1,
     *      "categoryId": 1,
     *      "priceOrder": 1，
     *      "status": 1
     * }
     * @apiSuccessExample 成功返回:
     * {
        "status": 200,
        "result": {
            "count": 17,
            "rows": [
                {
                    "id": 16,
                    "name": "童装套装",//商品名称
                    "description": "",//商品简介
                    "content": "",//商品详情，富文本
                    "thumbnail": 75,
                    "categoryId": 39,
                    "mechantId": 1,
                    "salePrice": "150.00",//售价
                    "marketPrice": "89.00",//原价
                    "sales": 0,//销量
                    "status": 1,//状态：1：上架，2：下架
                    "createdAt": "2020-12-15 20:46:41",
                    "updatedAt": "2020-12-15 20:46:41",
                    "thumbnailImage": {//主图
                        "id": 75,
                        "format": "image/png",
                        "url": "/public/uploads/2020/12/15/1608036369981975.2750883626092.png",
                        "path": "app\\public\\uploads\\2020\\12\\15\\1608036369981975.2750883626092.png",
                        "size": 113592,
                        "name": "1608036369981975.2750883626092.png",
                        "type": "image",
                        "creator": null,
                        "createdAt": "2020-12-15 20:46:09",
                        "updatedAt": "2020-12-15 20:46:09"
                    },
                    "apecs": [
                        {
                            "id": 6,
                            "name": "黑色",//规格名称
                            "description": null,
                            "pic": null,
                            "salePrice": "150.00",//规格售价
                            "marketPrice": "89.00",//规格原价
                            "stock": 999,//库存
                            "sales": 0,//销量
                            "goodId": 16,
                            "mechantId": 1,
                            "createdAt": "2020-12-15 20:46:41",
                            "updatedAt": "2020-12-15 20:46:41"
                        },
                        {
                            "id": 7,
                            "name": "白色",
                            "description": null,
                            "pic": null,
                            "salePrice": "160.00",
                            "marketPrice": "99.00",
                            "stock": 800,
                            "sales": 0,
                            "goodId": 16,
                            "mechantId": 1,
                            "createdAt": "2020-12-15 20:46:41",
                            "updatedAt": "2020-12-15 20:46:41"
                        }
                    ]
                }
            ]
        }
    }
     * 
     */
    @bp.get('/')
    public async index() {
        const { ctx } = this;
        let list = await ctx.service.good.home.list(ctx.query)
        ctx.success(list)
    }
    /** 不分页列表 */
    @bp.get('/list')
    public async list() {
        const { ctx } = this;
        let list = await ctx.service.good.home.select()
        ctx.success(list)
    }


    @bp.post('/save')
    public async save(){
        const { ctx } = this;
        let params = ctx.request.body;
        let ret = await ctx.service.good.home.save(params);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.code, ret.message)
        }
    }
    @bp.del('/:id')
    public async remove(){
        const { ctx } = this;
        let ret = await ctx.service.good.home.remove(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.code, ret.message)
        }
    }
    
    @bp.get('/:id',requireLogin(false))
    public async detail(){
        const { ctx } = this;
        const data = await ctx.service.good.home.detail(ctx.params.id)
        
        ctx.success(data)
       
    }
    

}