'use strict';

import { Service } from 'egg';


/**
 * redis类
 */
class RedisService extends Service { // 标注1：BaseService基类文件根据自己的


  /**
   * redis数据存储，所有数据均存储为序列化json字符串
   * @param {*} key 键名
   * @param {*} val 键值
   * @param {*} expir 有效期
   * @param {*} db 配置库名 ,从dbConfig中进行取值
   */
  async set(key, val, expir = 0) {

    const { redis } = this.app;

    if (expir === 0) {
      return await redis.set(key, JSON.stringify(val));
    }
    return await redis.set(key, JSON.stringify(val), 'EX', expir);

  }

  /**
   * 获取缓存的值
   * @param {*} key 键名
   * @param {*} db 库编号
   */
  async get(key) {

    const { redis } = this.app;
    const dbRedis = await redis.get(key);

    return dbRedis && JSON.parse(dbRedis);

  }
}

module.exports = RedisService;
