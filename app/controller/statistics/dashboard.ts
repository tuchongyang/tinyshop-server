import { Controller } from 'egg';
import { bp } from 'egg-blueprint';

const auth = require('../../middleware/auth');
bp.prefix('/statistics/dashboard', 'DashboardController');
export default class DashboardController extends Controller {
  @bp.get('/totalnum', auth())
  public async totalNum() {
    const { ctx } = this;
    const { or } = this.app.Sequelize.Op;
    const user = await ctx.getUser();
    // 商品
    const goodnum = await ctx.model.Good.count({
      where: { merchantId: user.merchant?.id || '' },
    });
    // 销售额
    const totalOrder = await ctx.model.GoodOrder.findAll({
      where: { merchantId: user.merchant?.id || '', status: 'completed' },
    });
    const amountnum = totalOrder.reduce((next, cur) => -(-next - cur.totalAmount), 0);
    // 成交订单量
    const ordernum = totalOrder.length;
    // 进行中的订单量
    const orderingnum = await ctx.model.GoodOrder.count({
      where: {
        merchantId: user.merchant?.id || 0,
        [or]: [
          { status: 'ordered' }, { status: 'paid' }, { status: 'receiving' },
        ],
      },
    });
    ctx.success({
      goodnum,
      amountnum: +amountnum.toFixed(2),
      ordernum,
      orderingnum,
    });
  }
  // 商品销量排行
  @bp.get('/goodsalerank', auth())
  public async goodsalerank() {
    const { ctx } = this;
    const user = await ctx.getUser();
    // 商品
    const goods = await ctx.model.Good.findAll({
      where: { merchantId: user.merchant?.id || 0 },
      order: [[ 'sales', 'DESC' ], [ 'createdAt', 'DESC' ]],
      limit: 10,
    });
    ctx.success(goods);
  }
  @bp.get('/ordertrend', auth())
  public async ordertrend() {
    const { ctx } = this;
    const { Op } = this.app.Sequelize;
    const { startTime, endTime } = ctx.request.query;
    const user = await ctx.getUser();
    let times = ctx.helper.getDateBetWeen(startTime, endTime);
    if (startTime === endTime) {
      times = Array(24)
        .fill('')
        .map((a, i) => (a > -1 && i < 10 ? '0' + i + ':00' : i + ':00'));
    }
    const result = {
      times,
      totalAmount: times.map(() => 0),
      num: times.map(() => 0),
    };
    const list = await ctx.model.GoodOrder.findAll({
      where: {
        merchantId: user.merchant?.id || 0,
        createdAt: {
          [Op.between]: [ startTime + ' 00:00:00', endTime + ' 23:59:59' ],
        },
      },
    });
    for (let i = 0; i < list.length; i++) {
      const a = list[i];
      result.times.forEach((time, j) => {
        let pass = a.createdAt.substr(0, 10) === time;
        if (startTime === endTime) {
          pass = a.createdAt.substr(11, 2) + ':00' === time;
        }
        if (pass) {
          result.totalAmount[j] = result.totalAmount[j] ? result.totalAmount[j] + a.totalAmount : a.totalAmount;
          result.num[j]++;
        }
      });
    }
    ctx.success(result);
  }
  @bp.get('/init')
  public async init() {
    const { ctx } = this;
    ctx.success({
      msg: '初始化完成',
    });
  }
}
