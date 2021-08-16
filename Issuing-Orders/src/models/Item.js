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
      // tableName: "items",
    });
  }

  static associate(models) {
    // belongsTo .....
    // this.belongsTo(models.Product, { foreignKey: 'product_id', through: 'products', as: 'product' });
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
    
    // this.belongsToMany(models.Order, { foreignKey: "order_id", through: 'orders', as: 'order' });
    this.belongsTo(models.Order, { foreignKey: "order_id", as: 'order' });
    //////
    // this.belongsTo(models.Order, { foreignKey: "order_id", allowNull: false });
    // this.belongsTo(models.Product, { foreignKey: "product_id", allowNull: false, as: "product" });

    // this.hasOne(models.Product, { foreignKey: 'product_id', through: 'items', as: 'item' });

  }
}

module.exports = Item;