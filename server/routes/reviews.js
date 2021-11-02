const express = require('express');
const axios = require('axios');
let router = express.Router();

const url = require('../atelier_api.js');
const {TOKEN} = require('../../config.js');

// .route adds onto the path that is stated in app.js
// this whole file uses this base path '/reviews'

// GET /reviews
// POST /reviews
// this is actually http://localhost:3000/reviews
router
  .route('/')
  .get((req, res) => {
    const id = '40345'; // testing purposes, this should eventually be the params of the req
    axios({
      method: 'get',
      url: `${url}/reviews?product_id=${id}`,
      headers: {
        'Authorization': `${TOKEN}`
      }
    })
    .then(response => {
      res.send(response.data);
    })
  })
  .post((req, res) => {
    axios({
      method: 'post',
      url: `${url}/reviews`,
      headers: {
        'Authorization': `${TOKEN}`
      }
    })
    .then(response => {
      // ...
    })
  })
  
// The express route can be whatever you want to name it! I just put /meta as an example
// this is equivalent to http://localhost:3000/reviews/meta
router
  .route('/meta')
  .get((req, res) => {
    axios({
      method: 'get',
      url: `${url}/reviews`,
      headers: {
        'Authorization': `${TOKEN}`
      }
    })
    .then(response => {
      // ...
    })
  })

// ... add the rest

module.exports = router;