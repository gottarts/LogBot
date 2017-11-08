const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const path = require('path');
require('./models/Log');


mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoUri);

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

require('./routes/basicRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log('LogBot listening on port ' + PORT);
});