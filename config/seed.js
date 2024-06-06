// Require connection file to connect
const mongoose = require('./db-connection.js');
// Require Models for delete and create operations
const Item = require('../models/Item.js');
const User = require('../models/User.js');

const sampleItems = [
    {
      name: 'Apple',
      quantity: 100,
      description: 'Fresh red apples from the orchard.'
    },
    {
      name: 'Banana',
      quantity: 150,
      description: 'Organic bananas rich in potassium.'
    },
    {
      name: 'Orange',
      quantity: 200,
      description: 'Juicy oranges perfect for fresh juice.'
    },
    {
      name: 'Strawberry',
      quantity: 50,
      description: 'Sweet strawberries ideal for desserts.'
    },
    {
      name: 'Grapes',
      quantity: 120,
      description: 'Seedless grapes for a healthy snack.'
    }
  ];


async function seed() {
  try {
    await Item.deleteMany({});
    await User.deleteMany({});

    const createdItems = await Item.create(items);

    console.log('Items: ', createdItems);

    const createdUsers = await User.create(users);

    console.log('Users: ', createdUsers);

    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

seed();