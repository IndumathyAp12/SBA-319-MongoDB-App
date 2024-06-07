const mongoose = require('./config/db-connection');
const Item = require('../models/Item.js');
const User = require('../models/User.js');
const Order = require('../models/Order.js');

// Sample data
const users = [
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

const items = [
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
    await Order.deleteMany({});

    const createdItems = await Item.create(items);
    console.log('Items: ', createdItems);

    const createdUsers = await User.create(users);
    console.log('Users: ', createdUsers);

    // Create orders with references to users and items
    const orders = [
      {
        userId: createdUsers[0]._id,
        items: [
          { itemId: createdItems[0]._id, quantity: 10 },
          { itemId: createdItems[1]._id, quantity: 5 }
        ],
        total: 50.0,
        status: 'Pending'
      },
      {
        userId: createdUsers[1]._id,
        items: [
          { itemId: createdItems[2]._id, quantity: 20 },
          { itemId: createdItems[3]._id, quantity: 15 }
        ],
        total: 75.0,
        status: 'Completed'
      },
      {
        userId: createdUsers[2]._id,
        items: [
          { itemId: createdItems[4]._id, quantity: 25 }
        ],
        total: 25.0,
        status: 'Pending'
      },
      {
        userId: createdUsers[3]._id,
        items: [
          { itemId: createdItems[0]._id, quantity: 15 },
          { itemId: createdItems[2]._id, quantity: 10 }
        ],
        total: 60.0,
        status: 'Cancelled'
      },
      {
        userId: createdUsers[4]._id,
        items: [
          { itemId: createdItems[3]._id, quantity: 5 },
          { itemId: createdItems[1]._id, quantity: 20 }
        ],
        total: 45.0,
        status: 'Completed'
      }
    ];

    const createdOrders = await Order.create(orders);
    console.log('Orders: ', createdOrders);

    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

seed();
