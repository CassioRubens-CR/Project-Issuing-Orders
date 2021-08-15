const Customer = require("../models/Customer");
const Product = require("../models/Product");
const Order = require("../models/Order");
const Item = require("../models/Item");

const findOrders = () => {
  return Order.findAll({
    attributes: ["id", "customer_id", "created_at"],
    // include: { model: Customer, as: "customer", attributes: ["id", "name"] },
  }
)};

const findOrderById = async (id) => {
  //
  console.log("*******estive aqui findOrderById *****");
  //
  const order = await Order.findOne({
    attributes: ["id", "customer_id"],
    where: { id },
    include: {
      model: Item,
      as: "item",
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

  console.log("console.log customer_id", customer_id);
  console.log("console.log items", items);

  const order = await Order.create({ customer_id });

  await Item.bulkCreate(
    items.map((item) => {
      return { ...item, order_id: order.id };
    })
  );

  // const order = await Order.create(
  //   {
  //     customer_id,
  //     items,
  //     // items: 
  //   },
  //   {
  //     include: [ {items} ],
  //     // include: [{
  //     // model: Item,
  //     // as: "item",
  //     // // attributes: ["product_id", "quantity", "unit_price"],
  //     // include: {
  //     //   model: Order,
  //     //   as: "order",
  //     //   // attributes: ["order_id"],
  //     //   },
  //     // }],
  //   },
  // );

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
  //  
  console.log("**********passei aqui < validade Ordem item >*****************");
  //
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

const validateProfitability = (item, product) => {
  //  
  console.log("**********passei aqui < validade Profitability >*****************");
  //
  const priceProduct = product.unit_price;
  const priceOrderItem = item.unit_price;
  const limitGoodProfitability = priceProduct - priceProduct * 0.1;

  if (priceOrderItem < limitGoodProfitability) {
    throw new Error("Item with a poor profitability");
  }
};

const validateMultiple = (item, product) => {
  //  
  console.log("**********passei aqui < validade multiple >*****************");
  //
  const multiple = product.multiple;
  const quantity = item.quantity;

  if (quantity % multiple !== 0) {
    throw new Error("Item should be multiple");
  }
};

const updateOrder2 = async (order_id, customer_id, items) => {
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
  updateOrder2,
  removeOrder,
};
