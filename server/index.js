const path = require("path")
const express = require('express');
const axios = require('axios');


const app = express ();
const port = 3000;

//setup bodyparser
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// API: https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfp/

app.get('/api', (req, res) => {
  // call your api to fetch data
  //axios.get('/')
});

app.post('/api', (req, res) => {
  // call your api to update content
  //axios.post('/')
})


app.listen(port, () => {
  console.log(`Server listening at: ${port}`)
});