import { Controller } from 'egg';
import { bp } from 'egg-blueprint';

const auth = require('../../middleware/auth');
bp.prefix('/statistics/dashboardadmin', 'DashboardController');
export default class DashboardController extends Controller {
  @bp.get('/totalnum', auth())
  public async totalNum() {
    const { ctx } = this;
    // 店铺
    const shopnum = await ctx.model.Merchant.count({
      where: { },
    });
    const totalFile = await ctx.model.SystemFile.findAll({
      where: { },
    });
    // 文件总大小
    const filetotalsize = totalFile.reduce((next, cur) => -(-next - cur.size), 0);
    // 文件数量
    const filenum = totalFile.length;
    // 用户数量
    const usernum = await ctx.model.SystemUser.count({
      where: {},
    });
    ctx.success({
      shopnum,
      filetotalsize: +filetotalsize.toFixed(2),
      filenum,
      usernum,
    });
  }
  // 店铺排行
  @bp.get('/shopsalerank', auth())
  public async goodsalerank() {
    const { ctx } = this;
    // 商品
    const goods = await ctx.model.Merchant.findAll({
      where: { },
      limit: 10,
    });
    ctx.success(goods);
  }
  @bp.get('/ordertrend', auth())
  public async ordertrend() {
    const { ctx } = this;
    const { Op } = this.app.Sequelize;
    const { startTime, endTime } = ctx.request.query;
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
