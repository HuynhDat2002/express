import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';

 
const adapter = new FileSync('db.json');

var db = low(adapter);
 
// Set some defaults
db.defaults({users: [],products: []})
  .write();

export default db;