require('dotenv').config();
const mongoose = require('mongoose');
const Animal = require('./models/Animal');

const sampleAnimals = [
  { tagNumber: 'LC-001', breed: 'Holstein', age: 5, status: 'Healthy', collarActive: true },
  { tagNumber: 'LC-002', breed: 'Jersey',   age: 3, status: 'Healthy', collarActive: true },
  { tagNumber: 'LC-003', breed: 'Sahiwal',  age: 6, status: 'Healthy', collarActive: true },
  { tagNumber: 'LC-004', breed: 'Gir',      age: 4, status: 'Healthy', collarActive: true },
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Animal.deleteMany({});
  await Animal.insertMany(sampleAnimals);
  console.log('✅ Sample animals inserted!');
  process.exit();
});