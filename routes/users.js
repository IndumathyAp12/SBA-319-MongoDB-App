const { Router } = require('express');
const usersCtrl = require('../controllers/users.js');
const User = require('./models/user');

const router = Router();

router.post('/', usersCtrl.createUser);
app.post('/users', async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).send(newUser);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  
  app.get('/users', async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  app.get('/users/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).send();
      }
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  app.patch('/users/:id', async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!user) {
        return res.status(404).send();
      }
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  
  app.delete('/users/:id', async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).send();
      }
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = router;
