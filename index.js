
import * as dotenv from 'dotenv';
dotenv.config(); // .env

import express from 'express';
const app = express();

import {default as userRouter} from './routes/user.js'; // router
import {default as authRouter} from './routes/auth.route.js'; // router
import {default as productRouter} from './routes/product.route.js'; // router

import cookieParser from 'cookie-parser'; // to use cookie

import * as authMiddleware from './middleware/auth.middleware.js' //condition

// Set some defaults

 
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(cookieParser(process.env.SESSION_SECRET));

const port=3000;
app.get('/',(request, response) => {
    response.render('index');
} );

app.use('/auth',authRouter);
app.use('/users',authMiddleware.requireAuth,userRouter);
app.use('/products',productRouter);

app.listen(3000,()=>{console.log('listening on port '+port);});