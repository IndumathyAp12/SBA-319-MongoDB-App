// Require connection file to connect
const mongoose = require('./db-connection.js');
// Require Models for delete and create operations
const Item = require('../models/Item.js');
const User = require('../models/User.js');
const Order = require('../models/Order.js');
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

  const sampleUsers = [
    {
      username: 'john_doe',
      email: 'john@example.com',
      password: 'password123'
    },
    {
      username: 'jane_doe',
      email: 'jane@example.com',
      password: 'password123'
    },
    {
      username: 'alice',
      email: 'alice@example.com',
      password: 'password123'
    },
    {
      username: 'bob',
      email: 'bob@example.com',
      password: 'password123'
    },
    {
      username: 'charlie',
      email: 'charlie@example.com',
      password: 'password123'
    }
  ];

  
     const sampleOrders = [
      {
        userId: (await User.findOne({ username: 'john_doe' }))._id,
        items: [
          { itemId: (await Item.findOne({ name: 'Apple' }))._id, quantity: 10 },
          { itemId: (await Item.findOne({ name: 'Banana' }))._id, quantity: 5 }
        ],
        total: 50.0,
        status: 'Pending'
      },
      {
        userId: (await User.findOne({ username: 'jane_doe' }))._id,
        items: [
          { itemId: (await Item.findOne({ name: 'Orange' }))._id, quantity: 20 },
          { itemId: (await Item.findOne({ name: 'Strawberry' }))._id, quantity: 15 }
        ],
        total: 75.0,
        status: 'Completed'
      },
      {
        userId: (await User.findOne({ username: 'alice' }))._id,
        items: [
          { itemId: (await Item.findOne({ name: 'Grapes' }))._id, quantity: 25 }
        ],
        total: 25.0,
        status: 'Pending'
      },
      {
        userId: (await User.findOne({ username: 'bob' }))._id,
        items: [
          { itemId: (await Item.findOne({ name: 'Apple' }))._id, quantity: 15 },
          { itemId: (await Item.findOne({ name: 'Orange' }))._id, quantity: 10 }
        ],
        total: 60.0,
        status: 'Cancelled'
      },
      {
        userId: (await User.findOne({ username: 'charlie' }))._id,
        items: [
          { itemId: (await Item.findOne({ name: 'Strawberry' }))._id, quantity: 5 },
          { itemId: (await Item.findOne({ name: 'Banana' }))._id, quantity: 20 }
        ],
        total: 45.0,
        status: 'Completed'
      }
    ];


async function seed() {
  try {
    await Item.deleteMany({});
    await User.deleteMany({});
    await Order.deleteMany({});

    const createdItems = await Item.create(items);

    console.log('Items: ', createdItems);

    const createdUsers = await User.create(users);

    console.log('Users: ', createdUsers);

    const createdOrders = await Order.create(orders);

    console.log('Orders: ', createdOrders);

    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

seed();