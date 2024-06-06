const Order = require('../models/Order');

module.exports = {
  createOrder,
};

async function createOrder(req, res) {
  try {
    const order = await Order.create(req.body);

    res.status(200).json(order);
  } catch (err) {
    res.status(400).json('No Beuno:(');
  }
}