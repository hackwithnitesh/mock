const express = require('express');
const router = express.Router();
const path = require('path');
const jwt = require('jsonwebtoken')
const adminAuth = require('../auth/admin_auth')

router.use('/', adminAuth, express.static(path.join(__dirname, 'portal')));



module.exports = router;