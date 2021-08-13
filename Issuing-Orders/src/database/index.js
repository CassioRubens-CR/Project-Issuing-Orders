const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Customers = require('../models/Customers');
const seedersCustomers = require('../database/seeders/20210811020824-customers');

const Products = require('../models/Products');
const seedersProducts = require('../database/seeders/20210813004411-products');

const connection = new Sequelize(dbConfig);

Customers.init(connection);
seedersCustomers.init(connection);

Products.init(connection);
seedersProducts.init(connection);

module.exports = connection;
