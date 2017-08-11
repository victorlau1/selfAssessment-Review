const express = require('express');
const path = require('path');
const app = express();
const request = require('request');
const db = require('../mongod-b/');
// const db = require('../db');

let port = process.env.PORT || 1337;

console.log('../client/src/public')
app.use(express.static(path.join(__dirname,'../client/src/public')))

app.get('/videos', function (req, res) {
  
  db.get()
  .then((data) =>{
    res.send(data)
  })
  .catch((err) => {
    res.send(err)
  })

})

app.post('/videos', function(req, res) {



})

app.listen(port, function() {
  console.log(`Listening on ${port}`)
})
