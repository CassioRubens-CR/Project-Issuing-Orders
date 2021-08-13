const { Model, DataTypes } = require('sequelize');

class Products extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      unitPrice: DataTypes.DECIMAL,
      multiple: DataTypes.INTEGER,
    }, {
      sequelize,
    })
  }
}

module.exports = Products;