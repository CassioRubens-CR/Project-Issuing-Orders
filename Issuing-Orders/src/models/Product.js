const { Model, DataTypes } = require('sequelize');

class Product extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      unit_price: DataTypes.DECIMAL,
      multiple: DataTypes.INTEGER,
    }, {
      sequelize,
    })
  }
}

module.exports = Product;