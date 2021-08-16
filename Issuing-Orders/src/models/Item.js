const { DataTypes, Model } = require("sequelize");

class Item extends Model {
  static init(sequelize) {
    super.init({
      order_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      unit_price: DataTypes.DECIMAL,
      quantity: DataTypes.INTEGER,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
    this.belongsTo(models.Order, { foreignKey: "order_id", as: 'order' });
  }
}

module.exports = Item;