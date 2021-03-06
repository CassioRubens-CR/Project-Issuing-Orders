const Product = require('../models/Product');
const { PROFITABILITY_TYPES } = require('../enums/profitabilityEnum')

const getByProducts = async () => {
  const result = await Product.findAll({
    attributes: ["id", "name", "unit_price", "multiple"],
  });

  if (!result || result.length === 0) {
    throw new Error("Não foram encontrados produtos cadastrados");
  }

  return result;
};

const calculateProductProfitability = async (id, newPrice) => {
  const product = await Product.findOne({ where: { id } });

  if (!product) {
    throw new Error("Não foi possível encontrar o produto");
  }

  const priceProduct = product.unit_price;
  const limitGoodProfitability = priceProduct - priceProduct * 0.1;

  let profitability;
  if (newPrice > priceProduct) {
    profitability = PROFITABILITY_TYPES.EXCELLENT_PROFITABILITY;
  } else if (newPrice >= limitGoodProfitability) {
    profitability = PROFITABILITY_TYPES.GOOD_PROFITABILITY;
  } else {
    profitability = PROFITABILITY_TYPES.POOR_PROFITABILITY;
  }

  return profitability;
};

module.exports = {
  getByProducts,
  calculateProductProfitability,
};