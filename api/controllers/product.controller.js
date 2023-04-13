import { Product } from "../../models/product.model.js";

export const index=async (req,res) => {
    
    // var page= parseInt(req.query.page) ||1;
    // var perPage=8;
    // var start=(page-1)*perPage;
    // var end=page*perPage;
    var products=await Product.find();
    res.json(products);
}

export var postCreate=async (req,res) => {
    
    // var page= parseInt(req.query.page) ||1;
    // var perPage=8;
    // var start=(page-1)*perPage;
    // var end=page*perPage;\
    const {name,image,description,price} = req.body
    var product=await Product.create({name,image,description,price});
    res.json(product);
}