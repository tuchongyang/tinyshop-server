// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportCacheRedis from '../../../app/service/cache/redis';
import ExportMemberAddress from '../../../app/service/member/address';
import ExportMemberFav from '../../../app/service/member/fav';
import ExportMemberOrder from '../../../app/service/member/order';
import ExportMerchantIndex from '../../../app/service/merchant/index';
import ExportShopBanner from '../../../app/service/shop/banner';
import ExportShopCategory from '../../../app/service/shop/category';
import ExportShopGood from '../../../app/service/shop/good';
import ExportShopOrder from '../../../app/service/shop/order';
import ExportSystemFile from '../../../app/service/system/file';
import ExportSystemMenu from '../../../app/service/system/menu';
import ExportSystemMessage from '../../../app/service/system/message';
import ExportSystemPermission from '../../../app/service/system/permission';
import ExportSystemReqLog from '../../../app/service/system/req_log';
import ExportSystemRole from '../../../app/service/system/role';
import ExportSystemUser from '../../../app/service/system/user';

declare module 'egg' {
  interface IService {
    cache: {
      redis: AutoInstanceType<typeof ExportCacheRedis>;
    }
    member: {
      address: AutoInstanceType<typeof ExportMemberAddress>;
      fav: AutoInstanceType<typeof ExportMemberFav>;
      order: AutoInstanceType<typeof ExportMemberOrder>;
    }
    merchant: {
      index: AutoInstanceType<typeof ExportMerchantIndex>;
    }
    shop: {
      banner: AutoInstanceType<typeof ExportShopBanner>;
      category: AutoInstanceType<typeof ExportShopCategory>;
      good: AutoInstanceType<typeof ExportShopGood>;
      order: AutoInstanceType<typeof ExportShopOrder>;
    }
    system: {
      file: AutoInstanceType<typeof ExportSystemFile>;
      menu: AutoInstanceType<typeof ExportSystemMenu>;
      message: AutoInstanceType<typeof ExportSystemMessage>;
      permission: AutoInstanceType<typeof ExportSystemPermission>;
      reqLog: AutoInstanceType<typeof ExportSystemReqLog>;
      role: AutoInstanceType<typeof ExportSystemRole>;
      user: AutoInstanceType<typeof ExportSystemUser>;
    }
  }
}
