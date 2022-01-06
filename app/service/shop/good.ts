import { Service } from 'egg';
/**
 * role Service
 */
export default class GoodService extends Service {

  /**
  * 列表
  * @param options - 列表查询参数
  */
  public async list(options) {
    const { pageIndex = 1, pageSize = this.config.pageSize } = options;
    const { Op } = this.app.Sequelize;
    const where = {} as any;
    const order = [[ 'createdAt', 'DESC' ]];
    if (options.merchantId) {
      where.merchantId = options.merchantId;
    }
    if (options.status) {
      where.status = options.status;
    }
    if (options.categoryId) {
      where.categoryId = options.categoryId;
    }
    if (options.name) {
      where.name = {
        [Op.substring]: '%' + options.name,
      };
    }
    if (options.tag) {
      where.tags = {
        [Op.substring]: '%' + options.tag,
      };
    }
    if (options.priceOrder > 0) {
      order.unshift([ 'salePrice', options.priceOrder === 1 ? 'ASC' : 'DESC' ]);
    }
    if (options.salesOrder > 0) {
      order.unshift([ 'sales', options.salesOrder === 1 ? 'DESC' : 'ASC' ]);
    }
    const list = await this.app.model.Good.findAndCountAll({
      limit: +pageSize,
      offset: pageSize * (pageIndex - 1),
      order,
      where,
      include: [
        { model: this.app.model.SystemFile, as: 'pic', attributes: [ ] },
      ],
      attributes: {
        exclude: [ 'content' ],
        include: [
          [ this.app.Sequelize.col('pic.url'), 'picUrl' ],
        ],
      },
      // distinct: true,
    });

    return list;
  }
  /**
  * 列表
  */
  public async select() {
    const list = await this.app.model.Good.findAll();
    return list;
  }
  /**
   * 保存
   * @param options - 参数
   */
  public async save(options: any) {
    const { ctx } = this;
    let results = { code: 400, message: '失败' };
    let goodId = options.id;
    const mechantId = options.mechantId;
    const method = goodId ? 'upsert' : 'create';
    options.specs.sort((a, b) => a.salePrice - b.salePrice);
    options.salePrice = options.specs[0].salePrice;
    options.marketPrice = options.specs[0].marketPrice;
    await ctx.model.Good[method](options).then(res => {
      res && (goodId = res.id);
      results = { code: 0, message: '添加成功' };
    }).catch(err => {
      results = { code: 400, message: err };
    });
    if (options.images) {
      // 先删除原来的图片,再批量保存
      await this.ctx.model.GoodImage.destroy({
        where: { goodId },
      });
      await this.ctx.model.GoodImage.bulkCreate(options.images.map(img => {
        return {
          fileId: img.id,
          goodId,
          mechantId,
        };
      }));
    }
    if (options.specs) {
      // 先删除原来的规格,再批量保存
      await this.ctx.model.GoodSpec.destroy({
        where: { goodId },
      });
      await this.ctx.model.GoodSpec.bulkCreate(options.specs.map(item => {
        return {
          ...item,
          goodId,
          mechantId,
        };
      }));
    }
    return results;
  }

  public async detail(id) {
    const data = await this.app.model.Good.findOne({
      where: { id },
      attributes: {
        include: [
          [ this.app.Sequelize.col('pic.url'), 'picUrl' ],
        ],
      },
      include: [
        { model: this.app.model.SystemFile, as: 'pic', attributes: [ ] },
        { model: this.app.model.GoodSpec, as: 'apecs', attributes: { exclude: [ 'updatedAt', 'createdAt' ] } },
      ],
    });
    const images = await this.app.model.GoodImage.findAll({
      where: { goodId: id },
      include: [
        { model: this.app.model.SystemFile, as: 'file' },
      ],
    }) || [];
    const specs = await this.app.model.GoodSpec.findAll({
      where: { goodId: id },
    }) || [];
    if (this.ctx.user) {
      const fav = await this.app.model.UserFav.findOne({
        where: { goodId: id, userId: this.ctx.user },
      });
      data.setDataValue('isFav', !!fav);
    }
    data.setDataValue('images', images.map(item => item.file));
    data.setDataValue('specs', specs);
    return data;
  }
  // 删除
  public async remove(id) {
    let results;
    await this.ctx.model.Good.destroy({ where: { id } }).then(() => {
      results = { code: 0, message: '删除成功' };
    }).catch(error => {
      results = { code: 400, message: error };
    });
    return results;
  }

}
