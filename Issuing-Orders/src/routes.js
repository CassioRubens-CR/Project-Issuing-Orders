const express = require('express');

const customersController = require('./controllers/customersController');
const productsController = require('./controllers/productsController');

const routes = express.Router();

routes.get('/customers', customersController.getByCustomers);
routes.get('/products', productsController.getByProducts);

module.exports = routes;
