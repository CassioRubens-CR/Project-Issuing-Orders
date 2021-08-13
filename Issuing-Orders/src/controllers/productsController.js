const productService = require('../services/productService');

module.exports = {
  async getByProducts(req, res) {
    try {
      const product = await productService.getByProducts();
      return res.status(200).json(product)
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }
}