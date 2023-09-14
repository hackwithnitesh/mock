const express = require('express');
const res = require('express/lib/response');
const { append } = require('express/lib/response');
const router = express.Router();
const UserSchema = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const req = require('express/lib/request');
require("dotenv/config");

router.get('/', async(req, res)=>{
    res.send('login');
})

router.post('/', async (req, res) => {
    // check if roll number exit 
    userExits = await UserSchema.findOne({ rollno: req.body.rollno });
    if (!userExits) return res.json({ message: "Wrong username or password !" })

    // checking if password is correct
    const userPass = await bcrypt.compare(req.body.password , userExits.password);
    if(!userPass) return res.status(400).send({message: "Wrong username or password !" })
    
    // create and verify jsonwebtoken
    const verifyme = jwt.sign({_id:userExits._id},process.env.USER_SECRET,{expiresIn:"30day"});
    res.cookie('authtoken',verifyme).send({message:'Success'})
});


module.exports = router;