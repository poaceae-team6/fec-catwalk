const express = require('express');


const app = express ();
const port = 3000;

//setup bodyparser
app.use(express.static('./client/dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/', (req, res) => {
  // fetch content
});

app.post('/', (req, res) => {
  // update content
})


app.listen(port, () => {
  console.log(`Server listening at: ${port}`)
});