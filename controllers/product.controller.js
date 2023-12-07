//import Product  from "../models/product.model.js";
import connection from "../connectionDB.js";

export const index = async (req, res) => {
  // var page= parseInt(req.query.page) ||1;
  // var perPage=8;
  // var start=(page-1)*perPage;
  // var end=page*perPage;
  // res.render('products/index',{
  //     products:db.get('products').value().slice(start, end),
  //     page:parseInt(req.query.page)

  // });
 // var products = await Product.find();
    async function getProducts(){
        const [row]=await connection.query(`SELECT * from products `);
        return row;
    }
    var products = await getProducts();
  res.render("products/index", {
    products: products,
  });
};
