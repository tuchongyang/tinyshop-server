import { Service } from 'egg';

/**
 * Merchant Service
 */
export default class MerchantService extends Service {
  /**
   * 列表
   * @param options - 列表查询参数
   */
  public async list(options) {
    const { pageIndex = 1, pageSize = this.config.pageSize } = options;
    const list = await this.app.model.Merchant.findAndCountAll({
      limit: +pageSize,
      offset: pageSize * (pageIndex - 1),
      include: [{ model: this.app.model.SystemFile, as: 'logo' }],
    });
    return list;
  }
  /**
   * 列表
   */
  public async select() {
    const list = await this.app.model.Merchant.findAll();
    return list;
  }

  /**
   * 保存
   * @param options - 参数
   */
  public async save(options: any) {
    const { ctx } = this;
    let results = { code: 400, message: '失败' };
    await ctx.model.Merchant.upsert(options)
      .then(() => {
        results = { code: 0, message: '添加成功' };
      })
      .catch(err => {
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
    await ctx.model.Merchant.update(options, {
      where: { id: options.id },
    })
      .then(() => {
        results = { code: 0, message: '添加成功' };
      })
      .catch(err => {
        results = { code: 400, message: err };
      });

    return results;
  }
  public async detail(id) {
    // const { ctx } = this
    const data = await this.app.model.Merchant.findOne({ where: { id } });
    return data;
  }
  // 删除
  public async remove(id) {
    let results;
    await this.ctx.model.Merchant.destroy({ where: { id } })
      .then(() => {
        results = { code: 0, message: '删除成功' };
      })
      .catch(error => {
        results = { code: 400, message: error };
      });
    return results;
  }
}
