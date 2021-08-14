const { DataTypes, Model } = require("sequelize");

class Item extends Model {
  static init(sequelize) {
    super.init({
      unit_price: DataTypes.DECIMAL,
      quantity: DataTypes.INTEGER,
    }, {
      sequelize,
      // tableName: "items",
    });
  }

  static associate(models) {
    // belongsTo .....
    this.belongsToMany(models.Product, { foreignKey: 'product_id', through: 'products', as: 'product' });
    
    this.belongsToMany(models.Order, { foreignKey: "order_id", through: 'orders', as: 'order' });
  }
}

module.exports = Item;