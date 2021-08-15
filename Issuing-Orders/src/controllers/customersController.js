const customersService = require('../services/customersService');

module.exports = {
  async getByCustomers(req, res) {
    try {
      const customers = await customersService.getByCustomers();
      return res.status(200).json(customers)
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }
};
