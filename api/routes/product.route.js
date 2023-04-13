import express from 'express';
const router = express.Router();

//import db from '../db.js'
import * as controller from '../controllers/product.controller.js';


router.get('/', controller.index);
router.post('/', controller.postCreate);
//module.exports=router;
export default router;