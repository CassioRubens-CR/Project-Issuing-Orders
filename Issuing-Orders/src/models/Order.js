const { DataTypes, Model } = require("sequelize");

class Order extends Model {
  static init(sequelize) {
    super.init({
      customer_id: DataTypes.INTEGER,
    }, {
      sequelize,
      // tableName: "orders",
    }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Customer, { foreignKey: 'customer_id', through: 'customers', as: 'customer' });
    // hasMany....
    // this.belongsToMany(models.Item, { foreignKey: 'order_id', through: 'items', as: 'item' });
    this.hasOne(models.Item, { foreignKey: 'order_id', through: 'items', as: 'item' });
    // this.hasOne(models.Item, { foreignKey: 'product_id', through: 'items', as: 'itemprodut', targetKey: "item_id" });
  }
}

module.exports = Order;
