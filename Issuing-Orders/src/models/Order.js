const { DataTypes, Model } = require("sequelize");

class Order extends Model {
  static init(sequelize) {
    super.init({
      customer_id: DataTypes.INTEGER,
    }, {
      sequelize,
    }
    );
  }

  static associate(models) {
    this.belongsTo(models.Customer, { foreignKey: 'customer_id', as: 'customer' });
    this.hasMany(models.Item, { foreignKey: 'order_id', as: 'items' });
  }
}

module.exports = Order;
