const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();
const verifyRoute = require('../auth/auto-token');
const feedbackModel = require('../Models/feedbackModel');
const { route } = require('./exam');
const { reset } = require('nodemon');

// home route
router.use(express.json());
router.get('/', async (req, res) => {
    console.log('Feedback form');
})
router.post('/',verifyRoute, async (req, res) => {
    const feedback = new feedbackModel({    
        feedback: req.body.feedback
    });
    try {
        const savedFeedback = await feedback.save();
        console.log(savedFeedback);
        res.send(savedFeedback);
    } catch (err) {
        console.log(res.status(500).send({ message: err }));
    }
})

module.exports = router;