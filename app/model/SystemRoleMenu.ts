module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const RoleMenu = app.model.define('system_role_menu', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    roleId: INTEGER, // 角色Id
    menuId: INTEGER, // 菜单Id
  }, { freezeTableName: true });
  // 表关联的字段
  RoleMenu.associate = function() {
    RoleMenu.belongsTo(app.model.SystemMenu, { foreignKey: 'menuId', targetKey: 'id', as: 'menu' });
  };
  return RoleMenu;
};
