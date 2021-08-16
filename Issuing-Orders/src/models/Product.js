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

  static associate(models) {
    this.hasMany(models.Item, { foreignKey: "product_id" });
  }

}

module.exports = Product;