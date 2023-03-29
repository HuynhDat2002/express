

import express from 'express';
const app = express();

import {default as useRouter} from './routes/user.js';
import {default as authRouter} from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

import * as authMiddleware from './middleware/auth.middleware.js'

// Set some defaults

 
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(cookieParser());

const port=3000;
app.get('/',(request, response) => {
    response.render('index');
} );

app.use('/auth',authRouter);
app.use('/users',authMiddleware.requireAuth,useRouter);


app.listen(3000,()=>{console.log('listening on port '+port);});