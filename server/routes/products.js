const express = require('express');
const axios = require('axios');
let router = express.Router();

const url = require('../atelier_api.js');
const {TOKEN} = require('../../config.js');

// .route adds onto the path that is stated in app.js
// this whole file uses this base path '/products'

// GET products
// this is actually http://localhost:3000/products
router
  .route('/')
  .get((req, res) => {
    axios({
      method: 'get',
      url: `${url}/products`,
      headers: {
        'Authorization': `${TOKEN}`
      }
    })
    .then(response => {
      //console.log(resonse.data);
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  });
  
// GET specific product by id
router
  .route('/:id')
  .get((req, res) => {
    axios({
      method: 'get',
      url: `${url}/products/${req.params.id}`,
      headers: {
        'Authorization': `${TOKEN}`
      }
    })
    .then(response => {
      //console.log(resonse.data);
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  });

// GET specific product's styles by id
router
  .route('/:id/styles')
  .get((req, res) => {
    axios({
      method: 'get',
      url: `${url}/products/${req.params.id}/styles`,
      headers: {
        'Authorization': `${TOKEN}`
      }
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  });
  
// GET related products ids for specific product
router
  .route('/:id/related')
  .get((req, res) => {
    axios({
      method: 'get',
      url: `${url}/products/${req.params.id}/related`,
      headers: {
        'Authorization': `${TOKEN}`
      }
    })
    .then(response => {
      //console.log(resonse.data);
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  });

module.exports = router;