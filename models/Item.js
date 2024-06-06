const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [3, 'Name must be at least 4 characters long'],
    maxlength: [100, 'Name must be less than 100 characters long']
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [0, 'Quantity cannot be negative'],
    validate: {
      validator: Number.isInteger,
      message: 'Quantity must be an integer'
    }
  },
  description: {
    type: String,
    maxlength: [500, 'Description must be less than 200 characters long']
  }
}, { timestamps: true });

// Indexes
itemSchema.index({ name: 1 }); 

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
