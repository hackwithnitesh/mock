const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const QuestionModel = require("../Models/QuestionModel");
const verifyRoute = require('../auth/auto-token');
const adminRoute = require('../auth/admin_auth')
const path = require('path');


// home route
router.use(express.json());

router.use('/', verifyRoute, express.static(path.join(__dirname, 'ExamPage')));
// all Questions
router.get('/questions', async (req, res) => {
    try {
        const question = await QuestionModel.find();
        res.json(question);
    } catch (err) {
        res.json({ message: err });
    }
});


// get all CN Questions into database
router.post('/', adminRoute, async (req, res) => {
    const Question = new QuestionModel(req.body)
    try {
        const savedQue = await Question.save();
        console.log(savedQue);
        res.json({ message: 'Success' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/:queID', adminRoute, async (req, res) => {
    try {
        const removedPost = await QuestionModel.deleteOne({ _id: req.params.queID });
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router;