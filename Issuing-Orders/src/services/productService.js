const Product = require('../models/Product');

const getByProducts = async () => {
  const result = await Product.findAll();
  return result;
};

module.exports = { getByProducts };