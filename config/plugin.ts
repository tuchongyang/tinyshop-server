import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  jwt: {
    enable: true,
    package: "egg-jwt",
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  },
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  swaggerdoc: {
    enable: true,   // 是否启用。
    package: 'egg-swagger-doc', // 指定包名称。
  }
};

export default plugin;
