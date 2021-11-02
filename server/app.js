const express = require('express');
const path = require("path")

const app = express ();
// routers
const products = require('./routes/products')
const reviews = require('./routes/reviews')
const questions = require('./routes/questions');
const { appendFileSync } = require('fs');

//setup bodyparser
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// use the products.js file to handle endpoints that relates to products data
app.use('/products', products);
app.use('/reviews', reviews);
app.use('/questions', questions);

// API: https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp

// handle root
app.get('/', (req, res) => {
  res.send('hello world');
});

module.exports = app; 