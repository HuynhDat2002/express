
import express from 'express';
const router = express.Router();


import db from '../db.js'
import * as controller from '../controllers/user.controller.js';

router.get('/', controller.index);

router.get('/search',controller.search);

router.get('/create',controller.getCreate);

router.post('/create',controller.postCreate);

router.get('/:id',controller.getId);

//module.exports=router;
export default router;