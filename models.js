var mongoose = require("mongoose");
var Logs = require("./models/Log"); /* Imports the Bugs module. It contains the bug schema we need. */


var Log = mongoose.model("Log", Logs.logSchema); //This creates the Bug model.

module.exports.Log = Log; /* Export the Bug model so index.js can access it. */