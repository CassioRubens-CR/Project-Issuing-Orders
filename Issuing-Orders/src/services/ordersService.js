const Customer = require("../models/Customer");
const Product = require("../models/Product");
const Order = require("../models/Order");
const Item = require("../models/Item");
const productService = require("./productService");
const { PROFITABILITY_TYPES } = require("../enums/profitabilityEnum");

const findOrders = async () => {
  return await Order.findAll({
    attributes: ["id", "customer_id", "created_at"],
    include: { model: Customer, as: "customer", attributes: ["id", "name"] },
  });
};

const findOrderById = async (id) => {
  const order = await Order.findOne({
    attributes: ["id", "customer_id"],
    where: { id },
    include: {
      model: Item,
      as: "items",
      attributes: ["id", "order_id", "product_id", "quantity", "unit_price"],
      include: { model: Product, as: "product", attributes: ["id", "name"] },
    },
  });

  if (!order) {
    throw new Error("Order not found");
  }

  return order;
};

const insertOrder = async (customer_id, items) => {

  await validateOrder(customer_id);

  await validateOrderItems(items);

  const order = await Order.create(
    {
      customer_id,
      items,
    },
    {
      include: [{
        model: Item,
        as: "items",
      }],
    },
  );

  return findOrderById(order.id);
};

const validateOrder = async (customer_id) => {
  if (!customer_id) {
    throw new Error("Customer is required");
  }

  const customer = await Customer.findByPk(customer_id);
  if (!customer) {
    throw new Error("Customer not found");
  }
};

const validateOrderItems = async (items) => {
  items.forEach(async (item) => {
    if (!item.quantity || item.quantity <= 0) {
      throw new Error("Quantity should be more than 0");
    }

    const product = await Product.findByPk(item.product_id);
    if (!product) {
      throw new Error("Product not found");
    }

    validateProfitability(item, product);
    validateMultiple(item, product);
  });
};

const validateProfitability = async (item, product) => {
  const profitability = await productService.calculateProductProfitability(product.id, item.unit_price);

  if (profitability === PROFITABILITY_TYPES.POOR_PROFITABILITY) {
    throw new Error("Item with a poor profitability");
  }
};

const validateMultiple = (item, product) => {
  const multiple = product.multiple;
  const quantity = item.quantity;

  if (quantity % multiple !== 0) {
    throw new Error("Item should be multiple");
  }
};

const updateOrder = async (order_id, customer_id, items) => {
  await validateOrder(customer_id);
  await validateOrderItems(items);

  await Item.bulkCreate(
    items
      .filter((item) => !item.id)
      .map((item) => {
        return { ...item, order_id };
      })
  );

  const [quantityOrderUpdated] = await Order.update(
    { customer_id },
    {
      where: {
        id: order_id,
      },
    }
  );

  if (quantityOrderUpdated <= 0) {
    throw new Error(
      "Não foi possível atualizar o pedido. Tente novamente mais tarde!"
    );
  }

  return findOrderById(order_id);
};

const removeOrder = async (order_id) => {
  const quantityOrdersDeleted = await Order.destroy({
    where: {
      id: order_id,
    },
  });

  if (quantityOrdersDeleted <= 0) {
    throw new Error(
      "Não foi possível deletar o pedido. Tente novamente mais tarde!"
    );
  }
};

module.exports = {
  findOrders,
  findOrderById,
  insertOrder,
  updateOrder,
  removeOrder,
};
