import express from 'express';
const router = express.Router();

//import db from '../db.js'
import * as controller from '../controllers/product.controller.js';


router.get('/', controller.index);

//module.exports=router;
export default router;