import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
const requireLogin = require('../../middleware/requireLogin')()
/**
* @Controller 订单
*/
bp.prefix('/api/member/order', 'MemberOrderController')
export default class MemberOrderController extends Controller {
    /** 分页列表 */
    /**
     * @api {get} /api/member/order 我的订单列表
     * @apiName userOrder
     * @apiGroup 个人中心-我的订单
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
                    "orderNo": "1608206328247689",
                    "status": "ordered",
                    "addressId": 3,
                    "address": "湖北省武汉市江岸区null汉口武汉客运港旁(汉口江滩)",
                    "linkMan": "hxy",
                    "linkPhone": "13333333333",
                    "goodsTotalQty": 1,
                    "totalAmount": "150",
                    "merchantId": 1,
                    "shopName": "良品铺子",
                    "remark": "",
                    "userName": "良品铺子",
                    "userId": 2,
                    "createdAt": "2020-12-17 19:58:48",
                    "updatedAt": "2020-12-17 19:58:48",
                    "goodList": [
                        {
                            "id": 1,
                            "goodId": 16,
                            "goodName": "童装套装",
                            "salePrice": "150.00",
                            "marketPrice": "89.00",
                            "qty": 1,
                            "amount": "150",
                            "orderId": 1,
                            "goodPic": "/public/uploads/2020/12/15/1608036369981975.2750883626092.png",
                            "goodSpecId": 6,
                            "goodSpecName": "黑色",
                            "goodCategoryName": "婴童衣橱",
                            "goodCategoryId": 39,
                            "createdAt": "2020-12-17 19:58:48",
                            "updatedAt": "2020-12-17 19:58:48"
                        }
                    ]
                }
            ]
        }
    }
     */
    @bp.get('/',requireLogin)
    public async index() {
        const { ctx } = this;
        let list = await ctx.service.member.order.list(ctx.query)
        ctx.success(list)
    }
    /**
     * @api {post} /api/member/order/save 添加订单
     * @apiName userOrderSave
     * @apiGroup 个人中心-我的订单
     * @apiParam {Number} goodId 商品ID
     * @apiParamExample {json} 请求示例:
     * {
        "addressId": 4,
        "merchantId": 1,
        "remark": "备注",
        "goodList": [
            {
            "id":16,
            "qty":2,
            "goodSpecId":2
            }
        ]
        }
     */
    @bp.post('/save',requireLogin)
    public async save(){
        const { ctx } = this;
        let params = ctx.request.body;
        let ret = await ctx.service.member.order.save(params);
        if(ret.code==0){
            ctx.success(ret)
        }else{
            ctx.fail(ret.code, ret.message)
        }
    }
    @bp.del('/:id',requireLogin)
    public async remove(){
        const { ctx } = this;
        let ret = await ctx.service.member.order.remove(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.code, ret.message)
        }
    }
    /**
     * @api {post} /api/member/order/cancel/1 取消订单
     * @apiName userOrderCancel
     * @apiGroup 个人中心-我的订单
     * @apiParam {Number} id 订单ID
     */
    @bp.post('/cancel/:id',requireLogin)
    public async cancel(){
        const { ctx } = this;
        let ret = await ctx.service.member.order.cancel(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.code, ret.message)
        }
    }
    /**
     * @api {post} /api/member/order/pay/1 订单支付
     * @apiName userOrderPay
     * @apiGroup 个人中心-我的订单
     * @apiParam {Number} id 订单ID
     * @apiDescription 目前未涉及在线支付，所以后台只是改了一个状态
     */
    @bp.post('/pay/:id',requireLogin)
    public async pay(){
        const { ctx } = this;
        let ret = await ctx.service.member.order.pay(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.code, ret.message)
        }
    }
    /**
     * @api {get} /api/member/order/1 订单详情
     * @apiName userOrderDetail
     * @apiGroup 个人中心-我的订单
     * @apiParam {Number} id 订单ID
     * @apiSuccessExample {json} 成功示例:
     * {
        "status": 200,
        "result": {
            "id": 2,
            "orderNo": "1610784874243146",
            "status": "ordered",
            "addressId": 4,
            "address": "湖北省武汉市江夏区null高新五路",
            "linkMan": "涂重阳",
            "linkPhone": "18707133663",
            "goodsTotalQty": 1,
            "totalAmount": "2600",
            "merchantId": 1,
            "shopName": "良品铺子",
            "remark": "备注",
            "userName": "管理员1",
            "userId": 1,
            "createdAt": "2021-01-16 16:14:34",
            "updatedAt": "2021-01-16 16:14:34"
        }
    }
     * 
     */
    
    @bp.get('/:id',requireLogin)
    public async detail(){
        const { ctx } = this;
        const data = await ctx.service.member.order.detail(ctx.params.id)
        
        ctx.success(data)
       
    }
    

}