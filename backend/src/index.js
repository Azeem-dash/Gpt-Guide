const express = require('express');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Sample route in controller folder
const paymobRouter = require('./routes/paymobRouter');
app.use('/paymobApi', paymobRouter);



// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
