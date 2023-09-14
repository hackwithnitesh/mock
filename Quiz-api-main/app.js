// Import Models and Controllers
const express = require('express');
const mongoose = require('mongoose');
const cookies = require("cookie-parser");
const path = require('path');
const app = express()
require("dotenv/config")

const bodyparser = require('body-parser');
app.use(bodyparser.json());

// Connect to MongoDB

mongoose.connect(process.env.SERVER_CONNECT, { useNewUrlParser: true }, () => {
    console.log('connected to mongodb !!!');
});

// home route
app.get('/', (req, res) => {
    res.json({'Ping':'Quiz Api'})
})

// Question Route
const QuestionRoute = require("./paths/questions");
app.use('/questions', QuestionRoute);

// Start Server on port 3000
const port = 3000;
app.listen(process.env.PORT || port, () => {
    console.log(`Started listening on port ${port}`);
})