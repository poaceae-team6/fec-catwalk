const express = require('express');
const axios = require('axios');
let router = express.Router();

const url = require('../atelier_api.js');
const {TOKEN} = require('../../config.js');

// .route adds onto the path that is stated in app.js
// this whole file uses this base path '/reviews'

// GET /questions
// POST /questions
// this is actually http://localhost:3000/questions
// Add additonal router

router
  .route('/:id') // expecting the text after / to be a param named id
  .get((req, res) => {

    axios({
      method: 'get',
      url: `${url}/qa/questions?product_id=${req.params.id}`,
      headers: {
        'Authorization': `${TOKEN}`
      }
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log('server get error', error);
    })
  })
  .post((req, res) => { // using router, you can chain your requests!
    // ...
    let postData = req.body.data;
    let id = req.body.id;
    console.log(req.body);

    // axios({
    //   method: 'post',
    //   url: `${url}/qa/question?product_id=${id}`,
    //   headers: {
    //     'Authorization': `${TOKEN}`
    //   }
    // }, postData)
    // .then(() => {
    //   res.send('data added')
    // })
    // .catch(err => console.log('server post err', err))
  })

// The .route can be whatever you want to name it! I just put /answers as an example
// this is equivalent to http://localhost:3000/questions/answers

router
  .route('/answers/:id')
  .get((req, res) => {
    axios({
      method: 'get',
      url: `${url}/reviews...`,
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