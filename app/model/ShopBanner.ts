module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Merchant = app.model.define('shop_banner', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    url: { type: STRING },
    sort: INTEGER,
    merchantId: INTEGER, // 关联商家id
    status: { type: INTEGER, defaultValue: 1 }, //  状态：  1:启用 2：禁用
    imageId: INTEGER,
  }, { freezeTableName: true });
  // 表关联的字段
  Merchant.associate = function() {
    Merchant.belongsTo(app.model.SystemFile, { foreignKey: 'imageId', targetKey: 'id', as: 'image' });
  };
  return Merchant;
};
