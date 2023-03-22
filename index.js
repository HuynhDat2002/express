

import express from 'express';
const app = express();

import router from './routes/user.js'


// Set some defaults

 
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));


const port=3000;
app.get('/',(request, response) => {
    response.render('index');
} );

app.use('/users',router);


app.listen(3000,()=>{console.log('listening on port '+port);});