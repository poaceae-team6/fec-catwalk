const express = require('express');
const axios = require('axios');
let router = express.Router();

const url = require('../atelier_api.js');
const {TOKEN} = require('../../config.js');

// GET products
// this is actually http://localhost:3000/interactions
router
  .route('/')
  .get((req, res) => {
    axios({
      method: 'get',
      url: `${url}/interactions`,
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
  })

module.exports = router;