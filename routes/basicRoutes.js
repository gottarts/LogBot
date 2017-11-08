const bodyParser = require('body-parser');
const basicServices = require('../services/basicServices');
const Models = require('../models');

module.exports = (app) => {

  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

  app.get('/', function (req, res) {
    Models.LogStatus.find({}, (err, status) => {
      if (err) {
        console.log("ERRORE: " + err);
        throw err;
      }
      res.render('home', { status: status });
    });
  });

  app.get('/:profilo', function (req, res) {
    Models.Log.find({ profilo: req.params.profilo }, null, {sort: '-createdAt'}, (err, log) => {
      if (err) {
        console.log("ERRORE:" + err);
        throw err;
      }

      res.render('logs_list', { profilo: req.params.profilo, logs: log });
    });

  });

  app.post('/', function (req, res) {
    var entry = new Models.Log({ profilo: req.body.profilo, action: req.body.action, testo: req.body.text });

    entry.save()
      .then(() => {
        var status = { profilo: entry.profilo, status: entry.action };
        Models.LogStatus.findOneAndUpdate({ profilo: status.profilo }, status, { upsert: true }).exec();
      }).then(() => {
        return res.end();
      }).catch((err) => {
        console.log("ERRORE" + err);
      });
  });
};
