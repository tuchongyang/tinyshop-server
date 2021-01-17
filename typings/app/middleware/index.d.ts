// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminReqLog from '../../../app/middleware/admin_req_log';
import ExportAuth from '../../../app/middleware/auth';
import ExportExecption from '../../../app/middleware/execption';

declare module 'egg' {
  interface IMiddleware {
    adminReqLog: typeof ExportAdminReqLog;
    auth: typeof ExportAuth;
    execption: typeof ExportExecption;
  }
}
