const productService = require('../services/productService');

module.exports = {
  async getByProducts(req, res) {
    try {
      const product = await productService.getByProducts();
      return res.status(200).json(product)
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },

  async getProductProfitability(req, res) {
    try {
      const { id, newPrice } = req.params;
      const productProfitability = await productService.calculateProductProfitability(
        id,
        Number.parseFloat(newPrice)
      );
      return res.status(200).json(productProfitability);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  },
};
