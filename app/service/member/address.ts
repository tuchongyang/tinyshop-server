import { Service } from 'egg';

/**
 * role Service
 */
export default class AddressService extends Service {
  /**
   * 列表
   * @param options - 列表查询参数
   */
  public async list(options) {
    const { ctx } = this;
    const { pageIndex = 1, pageSize = this.config.pageSize } = options;
    const where = { userId: ctx.user } as any;
    if (typeof options.isDefault !== 'undefined') {
      where.isDefault = !!options.isDefault;
    }
    const list = await this.app.model.UserAddress.findAndCountAll({
      limit: +pageSize,
      offset: pageSize * (pageIndex - 1),
      where,
    });
    return list;
  }
  /**
   * 列表
   */
  public async select() {
    const list = await this.app.model.UserAddress.findAll();
    return list;
  }

  /**
   * 保存
   * @param options - 参数
   */
  public async save(options: any) {
    const { ctx } = this;
    let results = { code: 400, message: '失败' };
    options.userId = ctx.user;

    if (options.isDefault) {
      // 先将其它地址默认地址去掉
      await ctx.model.UserAddress.update(
        { isDefault: false },
        {
          where: { userId: ctx.user },
        },
      );
    }
    await ctx.model.UserAddress.upsert(options)
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
    const data = await this.app.model.UserAddress.findOne({ where: { id } });
    return data;
  }
  public async setDefault(id) {
    const { ctx } = this;
    const results = { code: 0, message: '成功' };
    await ctx.model.UserAddress.update(
      { isDefault: false },
      {
        where: {},
      },
    );
    await ctx.model.UserAddress.update(
      { isDefault: true },
      {
        where: { id },
      },
    );
    return results;
  }
  // 删除
  public async remove(id) {
    let results;
    await this.ctx.model.UserAddress.destroy({ where: { id } })
      .then(() => {
        results = { code: 0, message: '删除成功' };
      })
      .catch(error => {
        results = { code: 400, message: error };
      });
    return results;
  }
}
