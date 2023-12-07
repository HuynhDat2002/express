
import * as dotenv from 'dotenv';
dotenv.config(); // .env
import * as connectDB from './connectionDB.js'
import express from 'express';



const app = express();

import {default as userRouter} from './routes/user.js'; // router
import {default as authRouter} from './routes/auth.route.js'; // router
import {default as productRouter} from './routes/product.route.js'; // router
import {default as cartRouter} from './routes/cart.route.js'
import {default as transferRouter} from './routes/transfer.route.js'
import {default as apiProductRouter} from './api/routes/product.route.js';
import {default as apiUserRouter} from './api/routes/user.router.js'


import cookieParser from 'cookie-parser'; // to use cookie
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
//import csurf from 'csurf';

//mongoose.connect(process.env.MONGO_URL);



import * as authMiddleware from './middleware/auth.middleware.js' //condition
import sessionMiddleware from './middleware/session.middleware.js' //function  

// Set some defaults

 
app.set('view engine', 'pug');
app.set('views', './views');


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);
//app.use(csurf({cookie:true}));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use('/api/products',apiProductRouter);

const port=3000;
app.get('/',(request, response) => {
    response.render('index');
} );


app.use('/api/users',apiUserRouter);
app.use('/auth',authRouter);
app.use('/users',authMiddleware.requireAuth, userRouter);
app.use('/products',productRouter);
//app.use('/cart',cartRouter);
//app.use('/transfer', transferRouter);


app.listen(3000,()=>{console.log('listening on port '+port);});