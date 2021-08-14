const express = require('express');

const customersController = require('./controllers/customersController');
const productsController = require('./controllers/productsController');

const routes = express.Router();

// customers
routes.get('/customers', customersController.getByCustomers);

// products
routes.get('/products', productsController.getByProducts);
routes.get("/:id/profitability/:newPrice", productsController.getProductProfitability);

module.exports = routes;
