const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv/config')

router.use(express.json());


router.post('/', async (req, res) => {
    const thing = 'admin';
    const adminName = "admin"
    const AdminPassword = "password";
    if (adminName == req.body.username && AdminPassword == req.body.password) {
        const verifyAdmin = jwt.sign({_id:thing},process.env.ADMIN_SECRET,{expiresIn:'30day'})
        res.cookie('adminAuth',verifyAdmin).send({message:"Success"});
    }else{
        res.json({message:'Wrong Credentials'})
    }
})


module.exports = router;