import db from '../db.js';
import shortId from 'shortid'


export const create=(req,res,next)=>{
   
    res.render('transfer/create',{
        csrfToken: req.csrfToken()
    });
}   

export const postCreate=(req,res,next)=>{
    var data={
        id:shortId.generate(),
        accountId:req.body.accountId,
        amount:parseInt(req.body.amount),
        userId: req.signedCookies.userId
    }
    
    db.get('transfers').push(data).write();
    res.redirect('/transfer/create');
}