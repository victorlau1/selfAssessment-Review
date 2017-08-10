const express = require('express');
const path = require('path');
const app = express();

let port = process.env.PORT || 1337;

console.log('../client/src/public')
app.use(express.static(path.join(__dirname,'../client/src/public')))

app.get('/videos', function (req, res) {


})

app.post('/videos', function(req, res) {


})

app.listen(port, function() {
  console.log(`Listening on ${port}`)
})