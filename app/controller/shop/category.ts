import { Controller } from 'egg';
import { bp } from 'egg-blueprint';
const auth = require('../../middleware/auth')
/**
* @Controller 商品分类
*/
bp.prefix('/shop/category', 'CategoryController');
export default class CategoryController extends Controller {
  /** 分页列表 */
  @bp.get('/', auth('shop-category', 'list'))
  public async index() {
    const { ctx } = this;
    const list = await ctx.service.shop.category.list(ctx.query);
    ctx.success(list);
  }
  /** 不分页列表 */
  @bp.get('/list', auth('shop-category', 'list'))
  public async list() {
    const { ctx } = this;
    const list = await ctx.service.shop.category.select(ctx.query);
    ctx.success(list)
  }

  @bp.post('/save', auth('shop-category', 'add'))
  public async save() {
    const { ctx } = this;
    const params = ctx.request.body;
    const ret = await ctx.service.shop.category.save(params);
    if (ret.code === 0) {
      ctx.success();
    } else {
      ctx.fail(ret.message, ret.code);
    }
  }
  @bp.del('/:id', auth('shop-category', 'delete'))
  public async remove() {
    const { ctx } = this;
    const ret = await ctx.service.shop.category.remove(ctx.params.id);
    if (ret.code === 0) {
      ctx.success();
    } else {
      ctx.fail(ret.message, ret.code);
    }
  }
  @bp.get('/:id', auth('shop-category', 'detail'))
  public async detail() {
    const { ctx } = this;
    const data = await ctx.service.shop.category.detail(ctx.params.id);
    ctx.success(data);
  }
}
