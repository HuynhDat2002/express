import mongoose from 'mongoose';

var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    avatar:String,
    phone: String,
});

var User= mongoose.model('User', userSchema,'users'); 

export var User;