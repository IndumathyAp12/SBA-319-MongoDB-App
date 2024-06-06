const { Router } = require('express');
const itemsCtrl = require('../controllers/items.js');
const Item = require('./models/item');
const router = Router();

router.post('/', itemsCtrl.createItem);
app.post('/items', async (req, res) => {
    try {
      const newItem = new Item(req.body);
      await newItem.save();
      res.status(201).send(newItem);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  
  app.get('/items', async (req, res) => {
    try {
      const items = await Item.find({});
      res.status(200).send(items);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  app.get('/items/:id', async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      if (!item) {
        return res.status(404).send();
      }
      res.status(200).send(item);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  app.patch('/items/:id', async (req, res) => {
    try {
      const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!item) {
        return res.status(404).send();
      }
      res.status(200).send(item);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  
  app.delete('/items/:id', async (req, res) => {
    try {
      const item = await Item.findByIdAndDelete(req.params.id);
      if (!item) {
        return res.status(404).send();
      }
      res.status(200).send(item);
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = router;