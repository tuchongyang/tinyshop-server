import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
const auth = require('../../middleware/auth')
/**
* @Controller 用户地址
*/
bp.prefix('/member/address', 'AddressController')
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
                        "county": "江夏区",
                        "township": null,
                        "addressDetail": "高新五路",
                        "name": "涂重阳",
                        "tel": "18707133663",
                        "isDefault": false,
                        "longitude": null,
                        "latitude": null,
                        "postalCode": null,
                        "areaCode": null,
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
    @bp.get('/',auth())
    public async index() {
        const { ctx } = this;
        let list = await ctx.service.member.address.list(ctx.query)
        ctx.success(list)
    }
    /** 不分页列表 */
    @bp.get('/list',auth())
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
     * @apiParam {String} name 收件人
     * @apiParam {String} tel 收件人电话
     * @apiParam {String} province 省
     * @apiParam {String} city 市
     * @apiParam {String} county 区
     * @apiParam {String} addressDetail 详细地址
     * @apiParam {String} areaCode 区域编码，前端插件需要
     * @apiParamExample {json} 请求示例:
     * {
     *      "name": "涂重阳",
     *      "tel": "18707133663",
     *      "province": "湖北省",
     *      "city": "武汉市",
     *      "county": "江夏区",
     *      "addressDetail": "高新五路",
     *      "areaCode": 1100013,
     *      "isDefault": false
     *  }
     */
    @bp.post('/save',auth())
    public async save(){
        const { ctx } = this;
        let params = ctx.request.body;
        let ret = await ctx.service.member.address.save(params);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    /**
     * @api {post} /api/member/setDefault/1 设为默认
     * @apiName userAddressSet
     * @apiGroup 个人中心-地址管理
     * @apiParam {String} id id
    */
   @bp.post('/setDefault/:id',auth())
    public async setDefault(){
        const { ctx } = this;
        let ret = await ctx.service.member.address.setDefault(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    /**
     * @api {delete} /api/member/address/1 删除地址
     * @apiName userAddressDel
     * @apiGroup 个人中心-地址管理
     * 
     */
    @bp.del('/:id',auth())
    public async remove(){
        const { ctx } = this;
        let ret = await ctx.service.member.address.remove(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.message,ret.code)
        }
    }
    
    @bp.get('/:id',auth())
    public async detail(){
        const { ctx } = this;
        const data = await ctx.service.member.address.detail(ctx.params.id)
        
        ctx.success(data)
       
    }
    

}