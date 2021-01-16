import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
const requireLogin = require('../../middleware/requireLogin')()
/**
* @Controller 用户地址
*/
bp.prefix('/api/member/address', 'AddressController')
export default class AddressController extends Controller {
    /** 分页列表 */
    /**
     * @api {get} /api/member/address 用户地址列表
     * @apiName userAddress
     * @apiGroup 个人中心-地址管理
     * @apiParam {Number} page 页码
     * @apiParam {Number} pageSize 分页数量
     * @apiParamExample {json} 请求示例:
     * {
     *      "page": 1,
     *      "pageSize": 20,
     * }
     * @apiSuccessExample 成功返回:
     *  {
            "status": 200,
            "result": {
                "count": 1,
                "rows": [
                    {
                        "id": 4,
                        "province": "湖北省",
                        "city": "武汉市",
                        "district": "江夏区",
                        "township": null,
                        "place": "高新五路",
                        "linkMan": "涂重阳",
                        "linkPhone": "18707133663",
                        "isDefault": false,
                        "longitude": null,
                        "latitude": null,
                        "userId": 1,
                        "createdAt": "2021-01-16 14:07:17",
                        "updatedAt": "2021-01-16 14:07:17"
                    }
                ]
            }
        }
     * 
     * 
     *
     */
    @bp.get('/',requireLogin)
    public async index() {
        const { ctx } = this;
        let list = await ctx.service.member.address.list(ctx.query)
        ctx.success(list)
    }
    /** 不分页列表 */
    @bp.get('/list',requireLogin)
    public async list() {
        const { ctx } = this;
        let list = await ctx.service.member.address.select()
        ctx.success(list)
    }

    /**
     * @api {post} /api/member/save 添加/修改地址
     * @apiName userAddressSave
     * @apiGroup 个人中心-地址管理
     * @apiDescription 如果是修改，则在body数据中传id
     * @apiParam {String} linkMan 收件人
     * @apiParam {String} linkPhone 收件人电话
     * @apiParam {String} province 省
     * @apiParam {String} city 市
     * @apiParam {String} district 区
     * @apiParam {String} place 详细地址
     * @apiParamExample {json} 请求示例:
     * {
     *      "linkMan": "涂重阳",
     *      "linkPhone": "18707133663",
     *      "province": "湖北省",
     *      "city": "武汉市",
     *      "district": "江夏区",
     *      "place": "高新五路",
     *      "isDefault": false
     *  }
     */
    @bp.post('/save',requireLogin)
    public async save(){
        const { ctx } = this;
        let params = ctx.request.body;
        let ret = await ctx.service.member.address.save(params);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.code, ret.message)
        }
    }
    /**
     * @api {post} /api/member/setDefault/1 设为默认
     * @apiName userAddressSet
     * @apiGroup 个人中心-地址管理
     * @apiParam {String} id id
    */
   @bp.post('/setDefault/:id',requireLogin)
    public async setDefault(){
        const { ctx } = this;
        let ret = await ctx.service.member.address.setDefault(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.code, ret.message)
        }
    }
    /**
     * @api {delete} /api/member/address/1 删除地址
     * @apiName userAddressDel
     * @apiGroup 个人中心-地址管理
     * 
     */
    @bp.del('/:id',requireLogin)
    public async remove(){
        const { ctx } = this;
        let ret = await ctx.service.member.address.remove(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.code, ret.message)
        }
    }
    
    @bp.get('/:id',requireLogin)
    public async detail(){
        const { ctx } = this;
        const data = await ctx.service.member.address.detail(ctx.params.id)
        
        ctx.success(data)
       
    }
    

}