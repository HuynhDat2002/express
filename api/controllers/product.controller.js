//import Product from "../../models/product.model.js";
import connection from "../../connectionDB.js";


export const index=async (req,res) => {
    
    // var page= parseInt(req.query.page) ||1;
    // var perPage=8;
    // var start=(page-1)*perPage;
    // var end=page*perPage;
    //var products=await Product.find();
    async function getProducts(){
        const [row]=await connection.query(`SELECT * from products `);
        return row;
    }
    var products = await getProducts();
    res.json(products);
}

export var postCreate=async (req,res) => {
    
    // var page= parseInt(req.query.page) ||1;
    // var perPage=8;
    // var start=(page-1)*perPage;
    // var end=page*perPage;\
    var {id,name,image,description,price} = req.body;
    //var product=await Product.create({name,image,description,price});
    async function createProduct(){
        const result =await connection.query(`Insert Into products Values (?,?,?,?,?)`,[id,name,image,description,price]);
        return result;
    }
    const user = await createProduct();
    res.json(product);
}