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

Customer.associate(connection.models);
Product.associate(connection.models);
Order.associate(connection.models);
Item.associate(connection.models);

module.exports = connection;
