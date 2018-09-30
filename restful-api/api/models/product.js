const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    size: String,
    type: String,
    oldPrice: Number,
    price: Number
});

module.exports = mongoose.model('Product', productSchema);