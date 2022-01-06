import { Service } from 'egg';

/**
 * order Service
 */
export default class OrderService extends Service {

  /**
  * 列表
  * @param options - 列表查询参数
  */
  public async list(options) {
    const { Op } = this.app.Sequelize;
    const { pageIndex = 1, pageSize = this.config.pageSize} = options
    const where = {
      status: options.status || '',
      userName: options.userName ? {
        [Op.substring]: '%' + options.userName,
      } : '',
      orderNo: options.orderNo ? {
        [Op.substring]: '%' + options.orderNo,
      } : '',
    };
    for (const i in where) {
      if (!where[i]) delete where[i];
    }
    const list = await this.app.model.GoodOrder.findAndCountAll({
      limit: +pageSize,
      offset: pageSize * (pageIndex - 1),
      include: [
        // { model: this.app.model.GoodOrderLine, as: 'goodList' },
        { model: this.app.model.SystemUser, as: 'user' },
      ],
      attributes: {
        include: [
          [ this.app.Sequelize.col('user.name'), 'userName' ],
        ],
      },
      where,
    });
    return list;
  }
  /**
  * 列表
  */
  public async select() {
    const list = await this.app.model.GoodOrder.findAll();
    return list;
  }
  
/**
 * 保存
 * @param options - 参数
 */
  public async save(options: any) {
    const { ctx } = this;
    let results = { code: 400, message: '失败' };
    const mechantModel = await this.app.model.Merchant.findOne({ where: { id: options.merchantId } });
    const addressModel = await this.app.model.UserAddress.findOne({ where: { id: options.addressId } });

    if (!addressModel) {
      results = { code: 0, message: '添加成功' };
      return results;
    }
    const orderModel = {
      addressId: options.addressId,
      address: addressModel.province + addressModel.city + addressModel.district + addressModel.township + addressModel.place,
      linkMan: addressModel.linkMan,
      linkPhone: addressModel.linkPhone,
      goodsTotalQty: options.goodList.length,
      totalAmount: options.goodList.reduce((next, cur) => next+cur.salePrice*cur.qty,0),
      merchantId: mechantModel.id,
      shopName: mechantModel.name,
      remark: options.remark,
      userId: ctx.user,
      userName: '',
      orderNo: ctx.helper.randomNo(3),
    };
    const order = await ctx.model.GoodOrder.create(orderModel).then(res => {
      results = { code: 0, message: '添加成功' };
      return res;
    }).catch(err => {
      results = { code: 400, message: err };
    });
    const { Op } = this.app.Sequelize;
    const goods = await this.app.model.Good.findAll({
      where: {
        [Op.or]: {
          id: options.goodList.map(item => item.id),
        },
      },
      include: [
        { model: this.app.model.SystemFile, as: 'thumbnailImage' },
      ],
    });
    const goodLines = options.goodList.map(item => {
      const good = goods.find(g => g.id === item.id);
      return {
        goodId: item.id,
        goodName: good.name,
        salePrice: good.salePrice,
        marketPrice: good.marketPrice,
        qty: item.qty,
        amount: good.salePrice * item.qty,
        orderId: order.id,
        goodPic: good.thumbnailImage.url,
        goodSpecId: item.goodSpecId,
        goodSpecName: item.goodSpecName,
        goodCategoryName: item.goodCategoryName,
        goodCategoryId: item.goodCategoryId,
      };
    });
    await this.ctx.model.GoodOrderLine.bulkCreate(goodLines);
    return results;
  }

  public async detail(id) {
    const data = await this.app.model.GoodOrder.findOne({
      where: { id },
    });
    return data;
  }
  // 删除
  public async remove(id) {
    let results;
    await this.ctx.model.GoodOrder.destroy({ where: { id } }).then(() => {
      results = { code: 0, message: '删除成功' };
    }).catch(error => {
      results = { code: 400, message: error };
    });
    return results;
  }
  // 取消
  public async cancel(id) {
    let results;
    await this.ctx.model.GoodOrder.update({ status: 'canceled' }, { where: { id } }).then(() => {
      results = { code: 0, message: '取消成功' };
    }).catch(error => {
      results = { code: 400, message: error };
    });
    return results;
  }

}
