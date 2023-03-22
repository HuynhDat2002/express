import db from '../db.js';
import shortId from 'shortid'

export const index=(request, response)=>{
    response.render('users/index',{
        users:db.get('users').value()
    });
}

export const search=(req,res) => {
    var q=req.query.q;
    var matchedUsers=db.get('users').value().filter(user=>user.name.toLowerCase().indexOf(q.toLowerCase())>=0);
    
    res.render('users/index',{
        users:matchedUsers,
        question:q
    });

}

export const getCreate=(req,res)=>{
    res.render('users/create');
    
}
export const postCreate=(req,res)=>{
    req.body.id=shortId.generate();
db.get('users').push(req.body).write();
    res.redirect('/users');
}

export const getId=(req,res)=>{

    var id =req.params.id ;
    var user=db.get('users').find({id:id}).value();
    res.render('users/view',{
        user:user
    });
}