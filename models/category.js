const mongoose = require('mongoose');

let categoryScheme = new mongoose.Schema({
    name : String,
    description : String,
    status : String
});

module.exports = mongoose.model('Category', categoryScheme);