const { DataTypes, Model } = require("sequelize");

class Order extends Model {
  static init(sequelize) {
    super.init({
      // id: DataTypes.INTEGER,
    }, {
      sequelize,
      // tableName: "orders",
    }
    );
  }

  static associate(models) {
    this.belongsTo(models.Customer, { foreignKey: 'customer_id', through: 'customers', as: 'customer' });
    // hasMany....
    this.belongsToMany(models.Item, { foreignKey: 'order_id', through: 'items', as: 'order' });

  }
}

module.exports = Order;
