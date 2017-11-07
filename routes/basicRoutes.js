const bodyParser = require('body-parser');
const basicServices = require('../services/basicServices');

module.exports = (app) => {
  
  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

  app.get('/', function (req, res) {
    //console.log(req);
    res.send('Giao Baolo!');
  });

  app.post('/', function (req, res) {
    console.log(req.body);
    new Log({
      profilo: req.body.profilo,
      action: req.body.action,
      testo: req.body.action_text
    }).save();
    res.send(entry);
  });
};
