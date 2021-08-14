const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Customer = require('../models/Customer');
const Product = require('../models/Product');
const Order = require('../models/Order');
const Item = require('../models/Item');

const connection = new Sequelize(dbConfig);

Customer.init(connection);
Product.init(connection);
Order.init(connection);
Item.init(connection);

Customer.associate(connection.model);
Product.associate(connection.model);
Order.associate(connection.model);
Item.associate(connection.model);

module.exports = connection;
