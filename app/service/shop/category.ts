import { Service } from 'egg';

/**
 * category Service
 */
export default class CategoryService extends Service {

  /**
  * 列表
  * @param options - 列表查询参数
  */
  public async list(options) {
    const { pageIndex = 1, pageSize = this.config.pageSize } = options;
    const list = await this.app.model.GoodCategory.findAndCountAll({
      limit: +pageSize,
      offset: pageSize * (pageIndex - 1),
      order: [
        [ 'created_at', 'DESC' ],
      ],
      include: [
        { model: this.app.model.GoodCategory, as: 'parent' },
        { model: this.app.model.SystemFile, as: 'image', attributes: [] },
      ],
      attributes: {
        exclude: [ 'updatedAt', 'imageId' ],
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
    const where = {} as any;
    for (const i in options) {
      options[i] && (where[i] = options[i]);
    }
    const list = await this.app.model.GoodCategory.findAll({
      where,
      include: [
        { model: this.app.model.SystemFile, as: 'image', attributes: [] },
      ],
      attributes: {
        exclude: [ 'createdAt', 'updatedAt', 'imageId', 'status' ],
        include: [
          [ this.app.Sequelize.col('image.url'), 'imageUrl' ],
        ],
      },
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
    if (!options.parentId) {
      delete options.parentId;
    }
    await ctx.model.GoodCategory.upsert(options).then(() => {
      results = { code: 0, message: '添加成功' };
    }).catch(err => {
      results = { code: 400, message: err };
    });

    return results;
  }

  public async detail(id) {
    const data = await this.app.model.GoodCategory.findOne({ where: { id } });
    return data;
  }
  // 删除
  public async remove(id) {
    let results;
    await this.ctx.model.GoodCategory.destroy({ where: { id } }).then(() => {
      results = { code: 0, message: '删除成功' };
    }).catch(error => {
      results = { code: 400, message: error };
    });
    return results;
  }

}
