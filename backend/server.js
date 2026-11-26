require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/animals', require('./routes/animals'));
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => res.send('Livestock API running 🐄'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT, () =>
    console.log(`✅ Server: http://localhost:${process.env.PORT}`)))
  .catch(err => console.error('❌ DB error:', err));