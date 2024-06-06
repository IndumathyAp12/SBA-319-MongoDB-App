const { Router } = require('express');
const ordersCtrl = require('../controllers/orders.js');
const Order = require('./models/order');
const router = Router();

router.post('/', ordersCtrl.createItem);
app.post('/orders', async (req, res) => {
    try {
      const newOrder = new Order(req.body);
      await newOrder.save();
      res.status(201).send(newOrder);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  
  app.get('/orders', async (req, res) => {
    try {
      const orders = await Order.find({}).populate('userId').populate('items.itemId');
      res.status(200).send(orders);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  app.get('/orders/:id', async (req, res) => {
    try {
      const order = await Order.findById(req.params.id).populate('userId').populate('items.itemId');
      if (!order) {
        return res.status(404).send();
      }
      res.status(200).send(order);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  app.patch('/orders/:id', async (req, res) => {
    try {
      const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!order) {
        return res.status(404).send();
      }
      res.status(200).send(order);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  
  app.delete('/orders/:id', async (req, res) => {
    try {
      const order = await Order.findByIdAndDelete(req.params.id);
      if (!order) {
        return res.status(404).send();
      }
      res.status(200).send(order);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  

module.exports = router;