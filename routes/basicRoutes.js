const bodyParser = require('body-parser');
const basicServices = require('../services/basicServices');
const Models = require('../models');

module.exports = (app) => {

  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

  app.get('/', function (req, res) {
    Models.LogStatus.find({}, (err, status) => {
      if (err) { throw err; }
      console.log(status);
      res.render('home', { status: status });
    });
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
    var entry = new Models.Log({ profilo: req.body.profilo, action: req.body.action, testo: req.body.text });

    entry.save(function (error) {
      console.log("Salvato");
      if (error) {
        console.error(error);
      }
    });
    var status = new Models.LogStatus({ profilo: entry.profilo, status: entry.action });
    status.update({ profilo: status.profilo }, status, { upsert: true, setDefaultsOnInsert: true }, (function (error) {
      console.log("Status aggiornato");
      if (error) {
        console.error(error);
      }
    }));

    res.end();
  });
};
