module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const User = app.model.define('system_user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: STRING, unique: true, allowNull: false }, // 用户名
    email: { type: STRING }, // 邮箱
    password: { type: STRING, allowNull: false }, // 密码
    name: STRING, // 姓名
    sex: { type: INTEGER, defaultValue: 1 }, // 用户性别：1男性, 2女性, 0未知
    avatarId: INTEGER, // 头像
    type: INTEGER, // 类型，1：管理员，2：商家，3：普通用户
    phone: { type: STRING }, // 手机号码
    roleId: INTEGER, // 角色id
    status: { type: INTEGER, defaultValue: 1 }, //  用户状态： 0:禁用, 1:启用
    lastLoginTime: INTEGER, // 上次登录时间
    unionid: STRING, // 微信unionid
    openid: STRING, // 微信openid
  }, { freezeTableName: true });
  // 表关联的字段
  User.associate = function() {
    User.belongsTo(app.model.SystemFile, { foreignKey: 'avatarId', targetKey: 'id', as: 'avatar' });
    User.belongsTo(app.model.SystemRole, { foreignKey: 'roleId', targetKey: 'id', as: 'role' });
  };
  return User;
};
