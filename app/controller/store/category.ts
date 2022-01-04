import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
/**
* @Controller 商品分类
*/
bp.prefix('/store/category', 'categoryController')
export default class categoryController extends Controller {
    /** 分页列表 */
    @bp.get('/')
    public async index() {
        const { ctx } = this;
        let list = await ctx.service.shop.category.list(ctx.query)
        ctx.success(list)
    }
    /** 不分页列表 */
    
    
    @bp.get('/list')
    public async list() {
        const { ctx } = this;
        let list = await ctx.service.shop.category.select(ctx.query)
        ctx.success(list)
    }
    /** 不分页列表,树形，用于类型选择框 */
    /**
     * @api {get} /api/store/category/tree 获取商品分类列表
     * @apiName category
     * @apiGroup 商品管理
     *
     * @apiParam {Number} merchantId 商城Id（必传）
     * @apiParamExample {json} 请求示例:
     * {
     *      "merchantId":"1"
     * }
     *  @apiSuccessExample 成功返回:
     *  {
        "status": 200,
        "result": [
            {
                "id": 4,
                "name": "手机数码",
                "description": "",
                "parentId": null,
                "merchantId": 1,
                "image": null,
                "children": [
                    {
                        "id": 8,
                        "name": "手机通讯",
                        "description": "",
                        "parentId": 4,
                        "merchantId": 1,
                        "image": null,
                        "children": [
                            {
                                "id": 18,
                                "name": "全面屏手机",
                                "description": null,
                                "parentId": 8,
                                "merchantId": 1,
                                "image": {
                                    "id": 49,
                                    "url": "/public/uploads/2020/12/13/1607849841448769.5168552010039.jpg"
                                }
                            },
                            {
                                "id": 19,
                                "name": "游戏手机",
                                "description": "",
                                "parentId": 8,
                                "merchantId": 1,
                                "image": {
                                    "id": 50,
                                    "url": "/public/uploads/2020/12/13/1607850096439700.148397123594.jpg"
                                }
                            },
                            {
                                "id": 20,
                                "name": "老人机",
                                "description": "",
                                "parentId": 8,
                                "merchantId": 1,
                                "image": {
                                    "id": 51,
                                    "url": "/public/uploads/2020/12/13/1607850114481328.5455870651011.jpg"
                                }
                            },
                            {
                                "id": 21,
                                "name": "拍照手机",
                                "description": "",
                                "parentId": 8,
                                "merchantId": 1,
                                "image": {
                                    "id": 52,
                                    "url": "/public/uploads/2020/12/13/160785014201975.71720530766002.jpg"
                                }
                            },
                            {
                                "id": 22,
                                "name": "女性手机",
                                "description": "",
                                "parentId": 8,
                                "merchantId": 1,
                                "image": {
                                    "id": 53,
                                    "url": "/public/uploads/2020/12/13/1607850154300472.14451416214166.jpg"
                                }
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "name": "运营商",
                        "description": "",
                        "parentId": 4,
                        "merchantId": 1,
                        "image": null,
                        "children": [
                            {
                                "id": 23,
                                "name": "合约机",
                                "description": "",
                                "parentId": 9,
                                "merchantId": 1,
                                "image": {
                                    "id": 54,
                                    "url": "/public/uploads/2020/12/13/1607850178665562.4676813632846.jpg"
                                }
                            },
                            {
                                "id": 24,
                                "name": "选好卡",
                                "description": "",
                                "parentId": 9,
                                "merchantId": 1,
                                "image": {
                                    "id": 55,
                                    "url": "/public/uploads/2020/12/13/1607850195584665.740414198998.jpg"
                                }
                            },
                            {
                                "id": 25,
                                "name": "办套餐",
                                "description": "",
                                "parentId": 9,
                                "merchantId": 1,
                                "image": {
                                    "id": 56,
                                    "url": "/public/uploads/2020/12/13/160785021844525.9792968692083.jpg"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
     * 
     */
    @bp.get('/tree')
    public async tree() {
        const { ctx } = this;
        let list = await ctx.service.shop.category.select(ctx.query);
        var getChildren = (parentId)=>{
            var results = list.filter(a=>a.parentId==parentId);
            for(let i=0;i<results.length;i++){
                var cur = results[i];
                var children = getChildren(cur.id)
                children.length?cur.setDataValue("children", children):false
            }
            return results
        }
        var tree = getChildren(null);
        
        ctx.success(tree)
    }

    

}