const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Customer = require('../models/Customer');
// const seedersCustomers = require('../database/seeders/20210811020824-customers');

const Product = require('../models/Product');
// const seedersProducts = require('../database/seeders/20210813004411-products');

const connection = new Sequelize(dbConfig);

Customer.init(connection);
// seedersCustomers.init(connection);

Product.init(connection);
// seedersProducts.init(connection);

module.exports = connection;
