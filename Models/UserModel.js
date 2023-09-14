const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    sem:{
        type:Number,
        min:1,
        required:true
    },
    password:{
        type:String,
        min:6,
        max:20,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('user',UserSchema);