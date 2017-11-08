var mongoose = require("mongoose");
var Logs = require("./models/Log"); /* Imports the Bugs module. It contains the bug schema we need. */
var LogStatus = require("./models/LogStatus");

var Log = mongoose.model("Log", Logs.logSchema); //This creates the Bug model.
var LogStatus = mongoose.model("LogStatus", LogStatus.logStatusSchema);

module.exports.Log = Log; /* Export the Bug model so index.js can access it. */
module.exports.LogStatus = LogStatus;
