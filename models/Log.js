const mongoose = require('mongoose');
const { Schema } = mongoose;

const logSchema = new Schema({
    profilo: String,
    action: String,
    testo: String
});

mongoose.model('logs', logSchema);