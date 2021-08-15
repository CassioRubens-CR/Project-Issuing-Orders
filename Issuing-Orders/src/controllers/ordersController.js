const ordersService = require('../services/ordersService');

module.exports = {

  async getOrders(req, res) {
    try {
      const orders = await ordersService.findOrders();
      return res.status(200).json(orders);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  },

  async getOrderById(req, res) {
    try {
      const { id } = req.params;
      const order = await ordersService.findOrderById(id);
      return res.status(200).json(order);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  },

  async createOrder(req, res) {
    try {
      const { customer_id, items } = req.body;
      const order = await ordersService.insertOrder(customer_id, items);
      return res.status(201).json(order);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  },

  async updateOrder(req, res) {
    try {
      const { id } = req.params;
      const { customer_id, items } = req.body;
      const order = await ordersService.updateOrder2(id, customer_id, items);
      return res.status(200).json(order);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  },

  async deleteOrder(req, res) {
    try {
      const { id } = req.params;
      await ordersService.removeOrder(id);
      return res.status(204).json();
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  },
};
