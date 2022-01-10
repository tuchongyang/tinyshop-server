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
    const { pageIndex = 1, pageSize = this.config.pageSize } = options;
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

  public async detail(id) {
    const data = await this.app.model.GoodOrder.findOne({
      where: { id },
      include: [
        { model: this.app.model.GoodOrderLine, as: 'goodList' },
      ],
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
  // 更新
  public async update(params) {
    let results;
    const { id, ...args } = params;
    await this.ctx.model.GoodOrder.update(args, { where: { id } }).then(() => {
      results = { code: 0, message: '更新成功' };
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
