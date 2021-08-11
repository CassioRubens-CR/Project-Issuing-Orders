const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Customers = require('../models/Customers');
const seedersCustomers = require('../database/seeders/20210811020824-customers');

const connection = new Sequelize(dbConfig);

Customers.init(connection);
seedersCustomers.init(connection);

module.exports = connection;
