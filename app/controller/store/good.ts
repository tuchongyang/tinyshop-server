import { Controller } from 'egg';
import { bp } from 'egg-blueprint';
/**
* @Controller 角色
*/
bp.prefix('/store/good', 'GoodController');
export default class GoodController extends Controller {
  /** 分页列表 */
  /**
   * @api {get} /api/store/good 商品分页列表
   * @apiName goodList
   * @apiGroup 商品管理
   *
   * @apiParam {Number} page 页码
   * @apiParam {Number} pageSize 分页数量
   * @apiParam {Number} merchantId 商铺Id(必传)
   * @apiParam {Number} categoryId 分类Id
   * @apiParam {Number} name 商品名称
   * @apiParam {Number} status 状态（1:上架，2:下架）
   * @apiParam {Number} tag 标签
   * @apiParam {Number} priceOrder 按价格排序，1为升序，2为降序
   * @apiParam {Number} salesOrder 按销量排序，1为降序，2为升序序
   * @apiParamExample {json} 请求示例:
   * {
   *      "page": 1,
   *      "pageSize": 20,
   *      "merchantId": 1,
   *      "categoryId": 1,
   *      "priceOrder": 1，
   *      "status": 1,
   *      "name": "女装",
   *      "tag":"新品"
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
                  "tags":"新品,推荐",
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
                      }
                  ]
              }
          ]
      }
  }
  */
  @bp.get('/')
  public async index() {
    const { ctx } = this;
    const list = await ctx.service.shop.good.list(ctx.query);
    ctx.success(list);
  }
  /** 不分页列表 */
  @bp.get('/list')
  public async list() {
    const { ctx } = this;
    const list = await ctx.service.shop.good.select();
    ctx.success(list);
  }

  /**
   * @api {get} /api/store/good/:id 商品详情
   * @apiName goodList
   * @apiGroup 商品管理
   *
   * @apiParam {Number} id 商品id
   * @apiSuccessExample 成功返回:
   * {
      "status": 200,
      "result": 
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
              "tags":"新品,推荐",
              "isFav": false, // 是否收藏
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
                  }
              ]
          }
  }
  */
  @bp.get('/:id')
  public async detail() {
    const { ctx } = this;
    const data = await ctx.service.shop.good.detail(ctx.params.id);
    ctx.success(data);
  }
}
