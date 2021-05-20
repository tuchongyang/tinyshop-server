module.exports = {
    SUCCESS_CODE: 200, // 成功
    NO_LOGIN_CODE: 401, // 未登录
    UNIQUE_CODE: 200, // 唯一性冲突
    ERROR_CODE: 500, // 失败
    
    success(data, status=200) {
        this.body = { status: this.SUCCESS_CODE, result:data };
        this.status = status;
    },
    
    fail(message,status=400,data) {
        this.body = { message,status, result:data };
        this.status = 200;
    },
    
    notFound(msg) {
        msg = msg || 'not found';
        this.throw(404, msg);
    },
    get user(){
      const token = this.request.header.authorization;
      let tokenCache
      try{
      tokenCache = token ? this.app.jwt.verify(token, this.app.config.secret) : undefined;
    }catch(e){

    }
      return tokenCache && tokenCache.user || undefined;
    },
};