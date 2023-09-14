const jwt = require('jsonwebtoken');
const cookies = require("cookie-parser");
require('dotenv/config')

module.exports = function(req,res,next){
    const token = req.cookies.authtoken;
    if(!token) return res.status(401).send('Forbidden login first');
    try{
        const verified = jwt.verify(token,process.env.USER_SECRET);
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send('Invalid token');
    }
}; 