const { Model, DataTypes } = require('sequelize');

class Customer extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    // hasMany.....
    this.belongsToMany(models.Order, { foreignKey: 'customer_id', through: 'orders', as: 'customer' });
  }
}

module.exports = Customer;