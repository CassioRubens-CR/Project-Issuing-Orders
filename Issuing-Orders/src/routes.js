const express = require('express');

const customersController = require('./controllers/customersController');
const productsController = require('./controllers/productsController');
const ordersController = require('./controllers/ordersController');

const routes = express.Router();

// customers
routes.get('/customers', customersController.getByCustomers);

// products
routes.get('/products', productsController.getByProducts);
routes.get("/products/:id/profitability/:newPrice", productsController.getProductProfitability);

// orders
routes.get("/orders", ordersController.getOrders);
routes.get("/orders/:id", ordersController.getOrderById);
routes.post("/orders", ordersController.createOrder);
routes.put("/orders/:id", ordersController.updateOrder);
routes.delete("/orders/:id", ordersController.deleteOrder);

module.exports = routes;
