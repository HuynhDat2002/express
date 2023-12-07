import connection from '../../connectionDB.js';
//var db = require('../../models/index.js')
export const index=async (req,res) => {
    
    // var page= parseInt(req.query.page) ||1;
    // var perPage=8;
    // var start=(page-1)*perPage;
    // var end=page*perPage;
    async function getUsers(){
        const rows=await connection.query("select * from users");
        return rows;
    }

    const users =await getUsers();
    res.json(users);
}   
