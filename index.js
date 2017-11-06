var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
    //console.log(req);
  res.send('Giao Baolo!');
});

app.post('/', function (req, res) {
    console.log(req.body);
    var entry = {};
    entry.profilo = req.body.profilo;
    entry.action = req.body.action;
    entry.testo = req.body.action_text;
      
  res.send(entry);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT);
});