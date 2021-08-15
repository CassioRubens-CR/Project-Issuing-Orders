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
    // hasMany...
    this.belongsToMany(models.Item, { foreignKey: 'product_id', through: 'items', as: 'product' });

    this.hasOne(models.Item, { foreignKey: 'product_id', through: 'items', as: 'item' });

  }

}

module.exports = Product;