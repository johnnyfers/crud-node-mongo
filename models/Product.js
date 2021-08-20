const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    category: {type: String, required: false},
    brand: {type: String, required: false},
    quantity: {type: Number, required:true},
    price: {type: Number, required: true},
})

module.exports = mongoose.model('ProductModel', productSchema);

