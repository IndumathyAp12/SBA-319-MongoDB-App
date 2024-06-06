const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 },
  description: String,
}, { timestamps: true });

itemSchema.index({ name: 1 });
const Item = mongoose.model('Item', itemSchema);


module.exports = Item;
