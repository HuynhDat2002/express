//import db from '../db.js';
import shortId from 'shortid'
import connection from '../connectionDB.js';
//import {User} from '../models/user.model.js'



export const index= async (request, response)=>{
    async function getUsers(){
        const [rows]=await connection.query("select * from users");
        return rows;
    }
    const users =await getUsers();
    response.render('users/index',{
        users:users
    });
    console.log(users);
}

export const search=async (req,res) => {
    var q=req.query.q;
    async function getUser(){
        var [row] = await connection.query(`select * from users where name like ?`,['%'+q+'%']);
        return row;
    }
    //var matchedUsers=db.get('users').value().filter(user=>user.name.toLowerCase().indexOf(q.toLowerCase())>=0);
    var matchedUsers=await getUser(); 
    res.render('users/index',{
        users:matchedUsers,
        question:q
    });

}

export const getCreate=(req,res)=>{
    console.log(req.cookies);
    res.render('users/create');
    
}
export const postCreate=async (req,res)=>{
    req.body.id=shortId.generate();
    var id = req.body.id;
    req.body.avatar=req.file.path.split('/').slice(1).join('/');
    var avatar= req.body.avatar;

    async function createUser(){
        const result =await connection.query(`Insert Into users Values (?,?,?,?,?,?)`,[id,req.body.name,req.body.phone,req.body.email,req.body.password,avatar]);
        return result;
    }
    const user = await createUser();
    res.redirect('/users');
}

export const getId=async (req,res)=>{

    var id =req.params.id;
    async function getUser(){
        const [row]=await connection.query('SELECT * FROM users WHERE id = ?',[id]);
        return row[0];
    }
    const user = await getUser();
    res.render('users/view',{
        user:user
    });
    console.log(user);
}