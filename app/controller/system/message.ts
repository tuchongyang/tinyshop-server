import { Controller } from 'egg';
import { bp } from 'egg-blueprint';
/**
* @Controller 消息日志
*/
bp.prefix('/system/message', 'MessageController');
export default class MessageController extends Controller {
  /** 分页列表 */
  @bp.get('/')
  public async index() {
    const { ctx } = this;
    const list = await ctx.service.log.message.list(ctx.query);
    ctx.success(list);
  }

  @bp.post('/save')
  public async save() {
    const { ctx } = this;
    const params = ctx.request.body;
    const ret = await ctx.service.log.message.save(params);
    if (ret.code === 0) {
      ctx.success();
    } else {
      ctx.fail(ret.message, ret.code);
    }
  }
  @bp.del('/:id')
  public async remove() {
    const { ctx } = this;
    const ret = await ctx.service.log.message.remove(ctx.params.id);
    if (ret.code === 0) {
      ctx.success();
    } else {
      ctx.fail(ret.message, ret.code);
    }
  }
  @bp.get('/detail/:id')
  public async detail() {
    const { ctx } = this;
    const data = await ctx.service.log.message.detail(ctx.params.id);
    ctx.success(data);
  }

}
