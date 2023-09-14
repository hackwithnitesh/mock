const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    Quiz: [
        {
            Que: {
                type: String,
                required: true
            },
            Ans1: {
                type: String,
                required: true
            },
            Ans2: {
                type: String,
                required: true
            },
            Ans3: {
                type: String,
                required: true
            },
            Ans4: {
                type: String,
                required: true
            },
            Hint: {
                type: String,
                required: true
            },
            CorrectAns: {
                type: String,
                required: true
            },
            sub: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        },
        {
            Que: {
                type: String,
                required: true
            },
            Ans1: {
                type: String,
                required: true
            },
            Ans2: {
                type: String,
                required: true
            },
            Ans3: {
                type: String,
                required: true
            },
            Ans4: {
                type: String,
                required: true
            },
            Hint: {
                type: String,
                required: true
            },
            CorrectAns: {
                type: String,
                required: true
            },
            sub: {
                type: String,
                required: true
            }
        },
        {
            Que: {
                type: String,
                required: true
            },
            Ans1: {
                type: String,
                required: true
            },
            Ans2: {
                type: String,
                required: true
            },
            Ans3: {
                type: String,
                required: true
            },
            Ans4: {
                type: String,
                required: true
            },
            Hint: {
                type: String,
                required: true
            },
            CorrectAns: {
                type: String,
                required: true
            },
            sub: {
                type: String,
                required: true
            }
        },
        {
            Que: {
                type: String,
                required: true
            },
            Ans1: {
                type: String,
                required: true
            },
            Ans2: {
                type: String,
                required: true
            },
            Ans3: {
                type: String,
                required: true
            },
            Ans4: {
                type: String,
                required: true
            },
            Hint: {
                type: String,
                required: true
            },
            CorrectAns: {
                type: String,
                required: true
            },
            sub: {
                type: String,
                required: true
            }
        },
        {
            Que: {
                type: String,
                required: true
            },
            Ans1: {
                type: String,
                required: true
            },
            Ans2: {
                type: String,
                required: true
            },
            Ans3: {
                type: String,
                required: true
            },
            Ans4: {
                type: String,
                required: true
            },
            Hint: {
                type: String,
                required: true
            },
            CorrectAns: {
                type: String,
                required: true
            },
            sub: {
                type: String,
                required: true
            }
        }
    ]
});


module.exports = mongoose.model('Question', QuestionSchema);
