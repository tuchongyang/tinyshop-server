import { Service } from 'egg';

/**
 * role Service
 */
export default class OrderService extends Service {

    /**
    * 列表
    * @param params - 列表查询参数
    */
    public async list(options) {
        const { Op } = this.app.Sequelize;
        let {page = 1, pageSize = this.config.pageSize} = options
        const where = {
            status: options.status || '',
            userName: options.userName?{
                [Op.substring]:'%'+options.userName
            }:'',
            orderNo:options.orderNo?{
                [Op.substring]:'%'+options.orderNo
            }:''
        };
        for(const i in where){
            if(!where[i]) delete where[i]
        }
        let list = await this.app.model.GoodOrder.findAndCountAll({
            limit: +pageSize,
            offset: pageSize * (page-1),
            include:[
                { model: this.app.model.GoodOrderLine,as:'goodList'}
            ],
            where:where
        })
        return list;
    }
    
  /**
   * 保存
   * @param options - 参数
   */
    public async save(options: any) {
        const { ctx } = this
        let results={code: 0, message: "添加成功"}
        let mechantModel = await this.app.model.Merchant.findOne({where:{id: options.merchantId}});;
        let addressModel = await this.app.model.UserAddress.findOne({where:{id: options.addressId}});

        if(!addressModel){
            results = { code: 400, message: "地址不存在" }
            return results
        }
        const { Op } = this.app.Sequelize;
        const goods = await this.app.model.Good.findAll({
            where: {
                [Op.or]:{
                    id: options.goodList.map(item=>item.id)
                }
            },
            include:[
                {model: this.app.model.SystemFile,as:'thumbnailImage'},
                {model: this.app.model.GoodCategory,as:'category'}
            ]
        })
        const specs = await this.app.model.GoodSpec.findAll({
            where: {
                [Op.or]:{
                    id: options.goodList.map(item=>item.goodSpecId)
                }
            },
        })
        const goodList = options.goodList.map(item=>{
            const good = goods.find(g=>g.id==item.id)
            const spec = specs.find(s=>s.id==item.goodSpecId)
            return {
                ...item,
                good,
                spec
            }
        })
        let orderModel = {
            addressId: options.addressId,
            address: [addressModel.province,addressModel.city,addressModel.district,addressModel.township,addressModel.place].filter(a=>a).join(''),
            linkMan: addressModel.linkMan,
            linkPhone: addressModel.linkPhone,
            goodsTotalQty: options.goodList.length,
            totalAmount: goodList.reduce((next,cur)=>next+cur.spec.salePrice*cur.qty,0),
            merchantId: mechantModel.id,
            shopName: mechantModel.name,
            remark: options.remark,
            userId: ctx.user.id,
            userName: ctx.user.name,
            orderNo: ctx.helper.randomNo(3)
        }
        const order = await ctx.model.GoodOrder['create'](orderModel)
        .then((res) => {
            results = { code: 0, message: "添加成功", }
            return res
        }).catch(err => {
            results = { code: 400, message: err, }
        })

        const goodLines = goodList.map(item=>{
            return {
                goodId: item.id,
                goodName: item.good.name,
                salePrice: item.spec.salePrice,
                marketPrice: item.spec.marketPrice,
                qty: item.qty,
                amount: item.spec.salePrice * item.qty,
                orderId: order.id,
                goodPic: item.good.thumbnailImage && item.good.thumbnailImage.url,
                goodSpecId: item.spec.goodSpecId,
                goodSpecName: item.spec.goodSpecName,
                goodCategoryName: item.good.category.name,
                goodCategoryId: item.good.category.id,
            }
        })
        await this.ctx.model.GoodOrderLine.bulkCreate(goodLines);
        return results
    }

    public async detail(id){
        // const { ctx } = this
        let data = await this.app.model.GoodOrder.findOne({
            where: {id}
        })
        return data
    }
    //删除
    public async remove(id){
        let results
        await this.ctx.model.GoodOrder.destroy({ where: { id}}).then(() => {
            results = { code: 0, message: "删除成功", }
        }).catch(error => {
            results = { code: 400, message: error, }
        })
        return results
    }
    //取消
    public async cancel(id){
        let results
        await this.ctx.model.GoodOrder.update({status: 'canceled'},{ where: { id}}).then(() => {
            results = { code: 0, message: "取消成功", }
        }).catch(error => {
            results = { code: 400, message: error, }
        })
        return results
    }
    //支付
    public async pay(id){
        let results
        await this.ctx.model.GoodOrder.update({status: 'paid'},{ where: { id}}).then(() => {
            results = { code: 0, message: "支付成功", }
        }).catch(error => {
            results = { code: 400, message: error, }
        })
        return results
    }

}
