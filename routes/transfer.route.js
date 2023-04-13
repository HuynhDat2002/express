
import express from 'express';
const router = express.Router();
//import csrf from 'csurf';

//import db from '../db.js'
import * as controller from '../controllers/transfer.controller.js';


router.get('/create', controller.create);
router.post('/create', controller.postCreate);

//module.exports=router;
export default router;