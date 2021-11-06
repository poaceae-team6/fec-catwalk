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
  .route('/:id') // expecting the text after / to be a param named id
  .get((req, res) => {
    const reqUrl = `${url}/reviews?product_id=${req.params.id}&${req.url.split('?')[1]}`;
    console.log(`Forward the request to ${reqUrl}`);
    axios({
      method: 'get',
      url: reqUrl,
      headers: {
        'Authorization': `${TOKEN}`
      }
    })
    .then(response => {
      console.log(response.status);
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    })
  })

  router
    .route('/')
    .post((req, res) => {
      console.log(`Forward review create request to the atelier api`);
      console.log('body', JSON.stringify(req.body));
      axios({
        method: 'post',
        url: `${url}/reviews`,
        headers: {
          'Authorization': `${TOKEN}`,
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(req.body)
      })
      .then(response => {
        console.log(response.status);
        res.sendStatus(response.status);
      })
      .catch(error => {
        console.log(error);
        res.sendStatus(500);
      })
      // res.sendStatus(201);
    })

router
  .route('/:id/helpful')
  .put((req, res) => {
    console.log(`Forward to ${url}/reviews${req.url}`);
    axios({
      method: 'put',
      url: `${url}/reviews${req.url}`,
      headers: {
        'Authorization': `${TOKEN}`
      }
    })
    .then(response => {
      console.log(response.status);
      res.sendStatus(response.status);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    })
  })

// The .route can be whatever you want to name it! I just put /meta as an example
// this is equivalent to http://localhost:3000/reviews/:id/meta
router
  .route('/:id/meta')
  .get((req, res) => {
    const reqUrl = `${url}/reviews/meta?product_id=${req.params.id}`;
    console.log(`Forward the request to ${reqUrl}`)
    axios({
      method: 'get',
      url: reqUrl,
      headers: {
        'Authorization': `${TOKEN}`
      }
    })
    .then(response => {
      console.log(response.status);
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    })
  })

  router
  .route('/:id/report')
  .get((req, res) => {
    const reqUrl = `${url}/reviews/${req.params.id}/report`;
    console.log(`Forward the request to ${reqUrl}`)
    axios({
      method: 'put',
      url: reqUrl,
      headers: {
        'Authorization': `${TOKEN}`
      }
    })
    .then(response => {
      console.log(response.status);
      res.sendStatus(response.status);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    })
  })

// ... add the rest

module.exports = router;