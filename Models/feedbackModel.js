const string = require('@hapi/joi/lib/types/string');
const mongoose = require('mongoose');

const FeedbackScheme = mongoose.Schema({
    feedback: {
        type: string,
        required: true
    }
});

module.exports = mongoose.model('feedback',FeedbackScheme);