// import low from 'lowdb';
// import FileSync from 'lowdb/adapters/FileSync.js';

 
// const adapter = new FileSync('db.json');

// var db = low(adapter);
 
// // Set some defaults
// db.defaults({users: [],sessions:[],products: [],transfers:[]})
//   .write();

// export default db;

import * as dotenv from 'dotenv'
dotenv.config();

import mysql from 'mysql2/promise'

const connection = mysql.createPool({
  host:process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password:process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// var connectDB=async ()=>{
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// connectDB();

export default connection;