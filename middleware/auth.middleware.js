//import db from '../db.js'
import connection from "../connectionDB.js";

export var requireAuth =async (req, res, next) => {

    if(!req.signedCookies.userId){
        res.redirect('/auth/login');
        return;
    }


    //var user = db.get('users').find({id:req.signedCookies.userId}).value();
    async function getUser(){
        const [row]=await connection.query('SELECT * FROM users WHERE id = ?',[req.signedCookies.userId]);
        return row[0];
    }
    const user = await getUser();

    if(!user){
        res.redirect('/auth/login');
        return;
    }
    res.locals.user=user;
    next();
};