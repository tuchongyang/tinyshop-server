// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportMemberAddress from '../../../app/controller/member/address';
import ExportMemberFav from '../../../app/controller/member/fav';
import ExportMemberOrder from '../../../app/controller/member/order';
import ExportMerchantIndex from '../../../app/controller/merchant/index';
import ExportShopBanner from '../../../app/controller/shop/banner';
import ExportShopCategory from '../../../app/controller/shop/category';
import ExportShopGood from '../../../app/controller/shop/good';
import ExportShopOrder from '../../../app/controller/shop/order';
import ExportStatisticsDashboard from '../../../app/controller/statistics/dashboard';
import ExportStatisticsDashboardadmin from '../../../app/controller/statistics/dashboardadmin';
import ExportStoreBanner from '../../../app/controller/store/banner';
import ExportStoreCategory from '../../../app/controller/store/category';
import ExportStoreGood from '../../../app/controller/store/good';
import ExportSystemFile from '../../../app/controller/system/file';
import ExportSystemMenu from '../../../app/controller/system/menu';
import ExportSystemMessage from '../../../app/controller/system/message';
import ExportSystemPermission from '../../../app/controller/system/permission';
import ExportSystemReqLog from '../../../app/controller/system/req_log';
import ExportSystemRole from '../../../app/controller/system/role';
import ExportSystemUser from '../../../app/controller/system/user';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    member: {
      address: ExportMemberAddress;
      fav: ExportMemberFav;
      order: ExportMemberOrder;
    }
    merchant: {
      index: ExportMerchantIndex;
    }
    shop: {
      banner: ExportShopBanner;
      category: ExportShopCategory;
      good: ExportShopGood;
      order: ExportShopOrder;
    }
    statistics: {
      dashboard: ExportStatisticsDashboard;
      dashboardadmin: ExportStatisticsDashboardadmin;
    }
    store: {
      banner: ExportStoreBanner;
      category: ExportStoreCategory;
      good: ExportStoreGood;
    }
    system: {
      file: ExportSystemFile;
      menu: ExportSystemMenu;
      message: ExportSystemMessage;
      permission: ExportSystemPermission;
      reqLog: ExportSystemReqLog;
      role: ExportSystemRole;
      user: ExportSystemUser;
    }
  }
}
