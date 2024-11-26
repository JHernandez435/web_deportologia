const mongoose = require('mongoose');

let productScheme = new mongoose.Schema({
    sku : String, 
    title : String,
    newprice : String,
    oldprice : String,
    newstock : String,
    oldstock : String,
    company : String,
    category : String,
    description : String,
    url : String,
    status : String
});

module.exports = mongoose.model('Product', productScheme);