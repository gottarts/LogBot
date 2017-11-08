const mongoose = require('mongoose');
const { Schema } = mongoose;

const logSchema = new Schema({
    profilo: String,
    action: String,
    testo: String
}, { timestamps: true }
);


module.exports.logSchema = logSchema;