import db from '../db.js';
import md5 from 'md5';

export const login=(request, response)=>{
    response.render('auth/login');
};

export const postLogin=(request, response)=>{
    var email = request.body.email;
    var password=request.body.password;
    var user=db.get('users').find({email: email}).value();
    if(!user){
        response.render('auth/login',{
            errors: [
                'User does not exist',
            ],
            values:request.body
        });
        return;
    }

    var hashPassword=md5(password);
    if(user.password!== hashPassword){
        response.render('auth/login',{
            errors: [
                'Wrong password',
            ],
            values:request.body
        });
        return;    
    }
   

    response.cookie('userId',user.id);
    response.redirect('/users');
    
    
}; 