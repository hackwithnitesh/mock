const jwt = require('jsonwebtoken')
require('dotenv/config');

module.exports = function (req, res, next) {
    const token = req.cookies.adminAuth;
    if (!token) return res.status(401).send('Welcome to admin portal before start login first');
    try {
        const verified = jwt.verify(token,process.env.ADMIN_SECRET)
        req.user = verified;
        next();
    } catch (   err ) {
        res.status(400).send("Invalid Admin Token")
    }
};