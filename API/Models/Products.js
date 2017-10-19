const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    proveedor: String,
    //date: {type: Date, default: Date.now },
    dimensions:{
        height:Number,
        width: Number
    },
    create_at:{type: Date, default: Date.now},
    update_at:{type: Date, default: Date.now}

});


let Product = mongoose.model('Product',productSchema);

module.exports = Product;