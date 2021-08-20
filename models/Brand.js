const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
})

module.exports = mongoose.model('BrandModel', BrandSchema);

