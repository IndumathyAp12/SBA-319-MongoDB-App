const {Schema, model} = require('../config/db-connection');

const itemSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [4, 'Name must be at least 4 characters long'],
    maxlength: [100, 'Name must be less than 100 characters long'],
    unique: true,
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [0, 'Quantity cannot be negative'],
    validate: {
      validator: Number.isInteger,
      message: 'Quantity must be an integer',
    },
  },
  description: {
    type: String,
    maxlength: [200, 'Description must be less than 200 characters long'],
  },
}, { timestamps: true });

// Indexes
itemSchema.index({ name: 1 });

module.exports  = model('Item', itemSchema);