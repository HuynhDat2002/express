
import express from 'express';
const router = express.Router();

//import db from '../db.js'
import * as controller from '../controllers/auth.controller.js';


router.get('/login', controller.login);
router.post('/login', controller.postLogin);
//module.exports=router;
export default router;