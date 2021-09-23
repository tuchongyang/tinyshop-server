module.exports = (app) => {
  const { STRING, INTEGER, BOOLEAN, DOUBLE } = app.Sequelize;

  const UserAddress = app.model.define(
    "user_address",
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      province: { type: STRING, allowNull: false }, // 省
      city: { type: STRING }, // 市
      county: { type: STRING }, // 区县
      township: STRING, // 街道
      addressDetail: STRING, //详细地址
      name: STRING,
      tel: STRING,
      isDefault: BOOLEAN,
      longitude: DOUBLE, //
      latitude: DOUBLE,
      areaCode: STRING,//地区编码,前端组件需要
      postalCode: STRING,//邮政编码
      userId: INTEGER,
      // session_key: STRING, // 微信session_key
    },
    { freezeTableName: true }
  );

  // 表关联的字段
  UserAddress.associate = function () {
    // 一对一
    UserAddress.belongsTo(app.model.SystemUser, {
      foreignKey: "userId",
      targetKey: "id",
      as: "user",
    });
  };
  return UserAddress;
};
