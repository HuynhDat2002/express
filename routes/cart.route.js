
import express from 'express';
const router = express.Router();

//import db from '../db.js'
import * as controller from '../controllers/cart.controller.js';


router.get('/add/:productId', controller.addToCart);

//module.exports=router;
export default router;