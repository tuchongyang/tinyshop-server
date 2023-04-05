import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.sequelize = {
    dialect: 'mysql', // 数据库类型
    host: 'localhost', // host
    port: 3306, // 端口号
    username: 'root', // 用户名
    password: 'Root123.', // 密码
    database: 'tinyshop', // 数据库名
  };
  // config.redis = {
  //   client: {
  //     port: 6379, // Redis port
  //     host: '127.0.0.1', // Redis host
  //     password: 'auth',
  //     db: 0,
  //   },
  // };
  return config;
};
