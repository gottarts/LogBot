const bodyParser = require('body-parser');
const basicServices = require('../services/basicServices');
const Models = require('../models');

module.exports = (app) => {

  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

  app.get('/', function (req, res) {
    //console.log(req);
    res.render('home');
  });

  app.get('/:profilo', function (req, res) {
    Models.Log.find({ profilo: req.params.profilo }, (err, log) => {
      if (err) { throw err; }
      console.log(log);
      res.render('logs_list', { profilo: req.params.profilo, logs: log });
    });

  });

  app.post('/', function (req, res) {
    console.log(req.body);
    var entry = new Models.Log({ profilo: 'AA', action: 'BB', testo: 'CC' });

    entry.save(function (error) { //This saves the information you see within that Bee declaration (lines 4-6).
      console.log("Salvato");
      if (error) {
        console.error(error);
      }
    });
    res.send(entry);
  });
};
