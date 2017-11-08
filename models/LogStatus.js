const mongoose = require('mongoose');
const { Schema } = mongoose;

const logStatusSchema = new Schema({
    profilo: String,
    status: String
}, { timestamps: true }
);


module.exports.logStatusSchema = logStatusSchema;