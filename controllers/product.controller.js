import db from '../db.js';
import shortId from 'shortid'

export const index=(req,res) => {
    
    var page= parseInt(req.query.page) ||1;
    var perPage=8;
    var start=(page-1)*perPage;
    var end=page*perPage;
    res.render('products/index',{
        products:db.get('products').value().slice(start, end),
        page:parseInt(req.query.page)

    });
}
