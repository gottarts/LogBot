const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Log');

mongoose.connect(keys.mongoUri);

const app = express();

require('./routes/basicRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log('LogBot listening on port ' + PORT);
});