const { Model, DataTypes } = require('sequelize');

class Customers extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Customers;