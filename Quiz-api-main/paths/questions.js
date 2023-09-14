const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const CGModel = require("../Models/QuestionModel")
router.use(express.json());

// all Questions
router.get('/',async (req,res)=>{
    try{
        const question = await CGModel.find();
        res.json(question);
    }catch(err){
        res.json({message:err});
    }
});

// specific Question

router.get('/questions/:id',async (req,res)=>{
    try{
        const question = await CGModel.findById(req.params.id);
        res.json(question);
    }catch(err){
        res.json({message:err});
    }
});



// get all CG Questions into database
router.post('/', async (req, res) => {
    const CG = new CGModel({
        Quiz:[
            {
                Que:req.body.Quiz[0].Que,
                Ans1:req.body.Quiz[0].Ans1,
                Ans2:req.body.Quiz[0].Ans2,
                Ans3:req.body.Quiz[0].Ans3,
                Ans4:req.body.Quiz[0].Ans4,
                Hint:req.body.Quiz[0].Hint,
                CorrectAns:req.body.Quiz[0].CorrectAns
            },
            {
                Que:req.body.Quiz[1].Que,
                Ans1:req.body.Quiz[1].Ans1,
                Ans2:req.body.Quiz[1].Ans2,
                Ans3:req.body.Quiz[1].Ans3,
                Ans4:req.body.Quiz[1].Ans4,
                Hint:req.body.Quiz[1].Hint,
                CorrectAns:req.body.Quiz[1].CorrectAns
            },
            {
                Que:req.body.Quiz[12].Que,
                Ans1:req.body.Quiz[2].Ans1,
                Ans2:req.body.Quiz[2].Ans2,
                Ans3:req.body.Quiz[2].Ans3,
                Ans4:req.body.Quiz[2].Ans4,
                Hint:req.body.Quiz[2].Hint,
                CorrectAns:req.body.Quiz[2].CorrectAns
            },
            {
                Que:req.body.Quiz[3].Que,
                Ans1:req.body.Quiz[3].Ans1,
                Ans2:req.body.Quiz[3].Ans2,
                Ans3:req.body.Quiz[3].Ans3,
                Ans4:req.body.Quiz[3].Ans4,
                Hint:req.body.Quiz[3].Hint,
                CorrectAns:req.body.Quiz[3].CorrectAns
            },
            {
                Que:req.body.Quiz[4].Que,
                Ans1:req.body.Quiz[4].Ans1,
                Ans2:req.body.Quiz[4].Ans2,
                Ans3:req.body.Quiz[4].Ans3,
                Ans4:req.body.Quiz[4].Ans4,
                Hint:req.body.Quiz[4].Hint,
                CorrectAns:req.body.Quiz[4].CorrectAns
            },
            {
                Que:req.body.Quiz[5].Que,
                Ans1:req.body.Quiz[5].Ans1,
                Ans2:req.body.Quiz[5].Ans2,
                Ans3:req.body.Quiz[5].Ans3,
                Ans4:req.body.Quiz[5].Ans4,
                Hint:req.body.Quiz[5].Hint,
                CorrectAns:req.body.Quiz[5].CorrectAns
            },
            {
                Que:req.body.Quiz[6].Que,
                Ans1:req.body.Quiz[6].Ans1,
                Ans2:req.body.Quiz[6].Ans2,
                Ans3:req.body.Quiz[6].Ans3,
                Ans4:req.body.Quiz[6].Ans4,
                Hint:req.body.Quiz[6].Hint,
                CorrectAns:req.body.Quiz[6].CorrectAns
            },
            {
                Que:req.body.Quiz[7].Que,
                Ans1:req.body.Quiz[7].Ans1,
                Ans2:req.body.Quiz[7].Ans2,
                Ans3:req.body.Quiz[7].Ans3,
                Ans4:req.body.Quiz[7].Ans4,
                Hint:req.body.Quiz[7].Hint,
                CorrectAns:req.body.Quiz[7].CorrectAns
            },
            {
                Que:req.body.Quiz[8].Que,
                Ans1:req.body.Quiz[8].Ans1,
                Ans2:req.body.Quiz[8].Ans2,
                Ans3:req.body.Quiz[8].Ans3,
                Ans4:req.body.Quiz[8].Ans4,
                Hint:req.body.Quiz[8].Hint,
                CorrectAns:req.body.Quiz[8].CorrectAns
            },
            {
                Que:req.body.Quiz[9].Que,
                Ans1:req.body.Quiz[9].Ans1,
                Ans2:req.body.Quiz[9].Ans2,
                Ans3:req.body.Quiz[9].Ans3,
                Ans4:req.body.Quiz[9].Ans4,
                Hint:req.body.Quiz[9].Hint,
                CorrectAns:req.body.Quiz[9].CorrectAns
            },
            {
                Que:req.body.Quiz[10].Que,
                Ans1:req.body.Quiz[10].Ans1,
                Ans2:req.body.Quiz[10].Ans2,
                Ans3:req.body.Quiz[10].Ans3,
                Ans4:req.body.Quiz[10].Ans4,
                Hint:req.body.Quiz[10].Hint,
                CorrectAns:req.body.Quiz[10].CorrectAns
            },
            {
                Que:req.body.Quiz[11].Que,
                Ans1:req.body.Quiz[11].Ans1,
                Ans2:req.body.Quiz[11].Ans2,
                Ans3:req.body.Quiz[11].Ans3,
                Ans4:req.body.Quiz[11].Ans4,
                Hint:req.body.Quiz[11].Hint,
                CorrectAns:req.body.Quiz[11].CorrectAns
            },
            {
                Que:req.body.Quiz[12].Que,
                Ans1:req.body.Quiz[12].Ans1,
                Ans2:req.body.Quiz[12].Ans2,
                Ans3:req.body.Quiz[12].Ans3,
                Ans4:req.body.Quiz[12].Ans4,
                Hint:req.body.Quiz[12].Hint,
                CorrectAns:req.body.Quiz[12].CorrectAns
            },
            {
                Que:req.body.Quiz[13].Que,
                Ans1:req.body.Quiz[13].Ans1,
                Ans2:req.body.Quiz[13].Ans2,
                Ans3:req.body.Quiz[13].Ans3,
                Ans4:req.body.Quiz[13].Ans4,
                Hint:req.body.Quiz[13].Hint,
                CorrectAns:req.body.Quiz[13].CorrectAns
            },
            {
                Que:req.body.Quiz[14].Que,
                Ans1:req.body.Quiz[14].Ans1,
                Ans2:req.body.Quiz[14].Ans2,
                Ans3:req.body.Quiz[14].Ans3,
                Ans4:req.body.Quiz[14].Ans4,
                Hint:req.body.Quiz[14].Hint,
                CorrectAns:req.body.Quiz[14].CorrectAns
            },
            {
                Que:req.body.Quiz[15].Que,
                Ans1:req.body.Quiz[15].Ans1,
                Ans2:req.body.Quiz[15].Ans2,
                Ans3:req.body.Quiz[15].Ans3,
                Ans4:req.body.Quiz[15].Ans4,
                Hint:req.body.Quiz[15].Hint,
                CorrectAns:req.body.Quiz[15].CorrectAns
            },
            {
                Que:req.body.Quiz[16].Que,
                Ans1:req.body.Quiz[16].Ans1,
                Ans2:req.body.Quiz[16].Ans2,
                Ans3:req.body.Quiz[16].Ans3,
                Ans4:req.body.Quiz[16].Ans4,
                Hint:req.body.Quiz[16].Hint,
                CorrectAns:req.body.Quiz[16].CorrectAns
            },
            {
                Que:req.body.Quiz[17].Que,
                Ans1:req.body.Quiz[17].Ans1,
                Ans2:req.body.Quiz[17].Ans2,
                Ans3:req.body.Quiz[17].Ans3,
                Ans4:req.body.Quiz[17].Ans4,
                Hint:req.body.Quiz[17].Hint,
                CorrectAns:req.body.Quiz[17].CorrectAns
            },
            {
                Que:req.body.Quiz[18].Que,
                Ans1:req.body.Quiz[18].Ans1,
                Ans2:req.body.Quiz[18].Ans2,
                Ans3:req.body.Quiz[18].Ans3,
                Ans4:req.body.Quiz[18].Ans4,
                Hint:req.body.Quiz[18].Hint,
                CorrectAns:req.body.Quiz[18].CorrectAns
            },
            {
                Que:req.body.Quiz[19].Que,
                Ans1:req.body.Quiz[19].Ans1,
                Ans2:req.body.Quiz[19].Ans2,
                Ans3:req.body.Quiz[19].Ans3,
                Ans4:req.body.Quiz[19].Ans4,
                Hint:req.body.Quiz[19].Hint,
                CorrectAns:req.body.Quiz[19].CorrectAns
            },
        ]
    });
    try {
        const savedCG = await CG.save();
        res.json(savedCG);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;