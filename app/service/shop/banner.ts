import { Service } from 'egg';

/**
 * banner Service
 */
export default class BannerService extends Service {

  /**
  * 列表
  * @param options - 列表查询参数
  */
  public async list(options) {
    const { pageIndex = 1, pageSize = this.config.pageSize } = options;
    const list = await this.app.model.ShopBanner.findAndCountAll({
      limit: +pageSize,
      offset: pageSize * (pageIndex - 1),
      order: [[ 'sort', 'DESC' ], [ 'createdAt', 'DESC' ]],
      include: [
        { model: this.app.model.SystemFile, as: 'image', attributes: [ ] },
      ],
      attributes: {
        include: [
          [ this.app.Sequelize.col('image.url'), 'imageUrl' ],
        ],
      },
    });
    return list;
  }
  /**
  * 列表
  * @param options - 列表查询参数
  */
  public async select(options) {
    const where = { status: 1 } as any;
    if (options.merchantId) {
      where.merchantId = options.merchantId;
    }
    const list = await this.app.model.ShopBanner.findAll({
      order: [[ 'sort', 'DESC' ], [ 'createdAt', 'DESC' ]],
      where,
      include: [
        { model: this.app.model.SystemFile, as: 'image', attributes: [ 'id', 'url' ] },
      ],
      attributes: { exclude: [ 'createdAt', 'updatedAt', 'imageId' ] },
    });
    return list;
  }
  /**
   * 保存
   * @param options - 参数
   */
  public async save(options: any) {
    const { ctx } = this;
    let results = { code: 400, message: '失败' };
    await ctx.model.ShopBanner.upsert(options).then(() => {
      results = { code: 0, message: '添加成功' };
    }).catch(err => {
      results = { code: 400, message: err };
    });

    return results;
  }
  /**
 * 保存
 * @param options - 参数
 */
  public async update(options: any) {
    const { ctx } = this;
    let results = { code: 400, message: '失败' };
    await ctx.model.ShopBanner.update(options, {
      where: { id: options.id },
    }).then(() => {
      results = { code: 0, message: '添加成功' };
    }).catch(err => {
      results = { code: 400, message: err };
    });
    return results;
  }
  public async detail(id) {
    const data = await this.app.model.ShopBanner.findOne({
      where: { id },
      include: [
        { model: this.app.model.SystemFile, as: 'image' },
      ],
    });
    return data;
  }
  // 删除
  public async remove(id) {
    let results;
    await this.ctx.model.ShopBanner.destroy({ where: { id } }).then(() => {
      results = { code: 0, message: '删除成功' };
    }).catch(error => {
      results = { code: 400, message: error };
    });
    return results;
  }

}
