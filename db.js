import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';

 
const adapter = new FileSync('db.json');

var db = low(adapter);
 
// Set some defaults
db.defaults({users: [],sessions:[],products: [],transfers:[]})
  .write();

export default db;