const express = require('express');
const res = require('express/lib/response');
const { append } = require('express/lib/response');
const router = express.Router();
const UserSchema = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv/config");

router.post('/', async (req, res) => {

    // check if roll number exit 
    rollnoexit = await UserSchema.findOne({ rollno: req.body.rollno });
    if (rollnoexit) return res.json({ 'message': "Roll Number already exists" })

    // check if email exit
    emailexit = await UserSchema.findOne({ email: req.body.email });
    if (emailexit) return res.json({ 'message': "Email already exists" })

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new UserSchema({ 
        name: req.body.name,
        rollno: req.body.rollno,
        email: req.body.email,
        sem: req.body.sem,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        console.log(savedUser);
        const verifyme = jwt.sign({_id:savedUser._id},process.env.USER_SECRET,{expiresIn:"30day"});
        res.cookie('authtoken',verifyme).send({message:'Success'})
    } catch (err) {
        res.status(400).send({message:"Enter Valid Information"});
    }
});

module.exports = router;
