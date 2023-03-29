
import express from 'express';
const router = express.Router();

//import db from '../db.js'
import * as controller from '../controllers/user.controller.js';
import * as validate from '../validate/user.validate.js'
import * as authMiddleware from '../middleware/auth.middleware.js'

router.get('/',controller.index);
router.get('/cookie',(req,res,next)=>{
    res.cookie('user-id',1335);
    res.send('trongdat');
});
router.get('/search',controller.search);

router.get('/create',controller.getCreate);

router.post('/create',validate.postCreate,controller.postCreate);

router.get('/:id',controller.getId);

//module.exports=router;
export default router;