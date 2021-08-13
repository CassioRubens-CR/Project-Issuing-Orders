const Customer = require('../models/Customer');

const getByCustomers = async () => {
  const result = await Customer.findAll();
  return result;
};

module.exports = { getByCustomers };