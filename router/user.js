
import express from 'express';
const router = express.Router();

import shortId from 'shortid'
import db from '../db.js'

router.get('/', (request, response) => {
    response.render('users/index',{
        users:db.get('users').value()
    });
});

router.get('/search',(req,res) => {
    var q=req.query.q;
    var matchedUsers=db.get('users').value().filter(user=>user.name.toLowerCase().indexOf(q.toLowerCase())>=0);
    
    res.render('users/index',{
        users:matchedUsers,
        question:q
    });

});

router.get('/create',(req,res)=>{
    res.render('/create');
    
});

router.post('/create',(req,res)=>{
    req.body.id=shortId.generate();
db.get('users').push(req.body).write();
    res.redirect('');
});

router.get('/:id',(req,res)=>{

    var id =req.params.id ;
    var user=db.get('users').find({id:id}).value();
    res.render('users/view',{
        user:user
    });
});

//module.exports=router;
export default router;