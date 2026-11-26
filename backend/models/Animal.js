const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  tagNumber:    { type: String, required: true, unique: true },
  breed:        { type: String, required: true },
  age:          { type: Number, required: true },
  status:       { type: String, enum: ['Healthy', 'Sick', 'Alert'], default: 'Healthy' },
  collarActive: { type: Boolean, default: true },
  collarId:     { type: String, default: '' },
  owner:        { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Animal', animalSchema);