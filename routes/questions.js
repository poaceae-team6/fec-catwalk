const express = require('express');
const axios = require('axios');
let router = express.Router();

const url = require('../server/atelier_api.js');
const {TOKEN} = require('../config.js');

// .route adds onto the path that is stated in app.js
// this whole file uses this base path '/reviews'

// GET /questions
// POST /questions
// this is actually http://localhost:3000/questions
// Add additonal router 

router
  .route('/')
  .get((req, res) => {
    axios({
      method: 'get',
      url: `${url}/qa/questions`,
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
  // .post((req, res) => {
  //   axios({
  //     method: 'post',
  //     url: `${url}/qa/questions`,
  //     headers: {
  //       'Authorization': `${TOKEN}`
  //     }
  //   })
  //   .then(response => {
  //     // ...
  //   })
  // })

// The express route can be whatever you want to name it! I just put /answers as an example
// this is equivalent to http://localhost:3000/questions/answers

router
.route('/answers')
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