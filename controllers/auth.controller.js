//import db from '../db.js';
//import md5 from 'md5';
import connection from "../connectionDB.js";


export const login=(request, response)=>{
    response.render('auth/login');
};

export const postLogin=async (request, response)=>{
    var email = request.body.email;
    var password=request.body.password;
    //var user=db.get('users').find({email: email}).value();

    async function getUser(){
        const [row]=await connection.query(`SELECT * FROM users WHERE email = ?`,[email]);
        return row[0];
    }
    const user = await getUser();

    if(!user){
        response.render('auth/login',{
            errors: [
                'User does not exist',
            ],
            values:request.body
        });
        return;
    }

    //var hashPassword=md5(password);
    if(user.password!== password){
        response.render('auth/login',{
            errors: [
                'Wrong password',
            ],
            values:request.body,
        
        });
        return;    
    }
   

    response.cookie('userId',user.id,{signed:true});
    response.redirect('/users');
    
    
}; 