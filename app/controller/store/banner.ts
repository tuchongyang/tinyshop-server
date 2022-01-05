import { Controller } from 'egg';
import { bp } from 'egg-blueprint';
/**
* @Controller 轮播图
*/
bp.prefix('/store/banner', 'BannerController');
export default class BannerController extends Controller {
  /** 不分页列表 */
  /**
   * @api {get} /api/store/banner/list 首页广告图列表
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
  */
  @bp.get('/list')
  public async list() {
    const { ctx } = this;
    const list = await ctx.service.shop.banner.select(ctx.query);
    ctx.success(list);
  }
}