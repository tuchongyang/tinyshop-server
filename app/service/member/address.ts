import { Service } from 'egg';

/**
 * role Service
 */
export default class AddressService extends Service {

    /**
    * 列表
    * @param params - 列表查询参数
    */
    public async list(options) {
        const { ctx } = this
        let {page = 1, pageSize = this.config.pageSize} = options
        const where = {userId: ctx.user.id};
        if(typeof options.isDefault !== 'undefined'){
            where['isDefault']=options.isDefault?true:false
        }
        let list = await this.app.model.UserAddress.findAndCountAll({
            limit: +pageSize,
            offset: pageSize * (page-1),
            where: where
        })
        return list;
    }
    /**
    * 列表
    * @param params - 列表查询参数
    */
    public async select() {
        let list = await this.app.model.UserAddress.findAll()
        return list;
    }
    
  /**
   * 保存
   * @param options - 参数
   */
    public async save(options: any) {
        const { ctx } = this
        let results = { code: 400, message: "失败", }
        options.userId = ctx.user.id;
        
        if(options.isDefault){//先将其它地址默认地址去掉
            await ctx.model.UserAddress.update({isDefault: false},{
                where:{userId: ctx.user.id}
            })
        }
        await ctx.model.UserAddress.upsert(options).then(() => {
            results = { code: 0, message: "添加成功", }
        }).catch(err => {
            results = { code: 400, message: err, }
        })

        return results
    }
    public async detail(id){
        // const { ctx } = this
        let data = await this.app.model.UserAddress.findOne({where: {id}})
        return data
    }
    public async setDefault(id){
        const { ctx } = this
        let results = { code: 0, message: "成功", }
        await ctx.model.UserAddress.update({isDefault: false},{
            where:{}
        })
        await ctx.model.UserAddress.update({isDefault: true},{
            where:{id: id}
        })
        return results
    }
    //删除
    public async remove(id){
        let results
        await this.ctx.model.UserAddress.destroy({ where: { id}}).then(() => {
            results = { code: 0, message: "删除成功", }
        }).catch(error => {
            results = { code: 400, message: error, }
        })
        return results
    }

}
