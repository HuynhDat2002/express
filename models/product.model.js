import mongoose from 'mongoose';

var productSchema = new mongoose.Schema({
    name: String,
    image:String,
    description: String,
    price:Number
});

export var Product= mongoose.model('Product', productSchema,'products'); 

