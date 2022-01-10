module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const RolePermission = app.model.define('system_role_permission', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    roleId: INTEGER, // 角色Id
    permissionId: STRING, // 权限Id
    actions: STRING,
  }, { freezeTableName: true });
  // 表关联的字段
  RolePermission.associate = function() {
    RolePermission.belongsTo(app.model.SystemPermission, { foreignKey: 'permissionId', targetKey: 'id', as: 'permission' });
  };
  return RolePermission;
};
