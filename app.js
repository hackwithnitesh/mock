// Import Models and Controllers
const express = require('express');
const mongoose = require('mongoose');
const cookies = require("cookie-parser");
const path = require('path');
const cors = require('cors');
const app = express()
require("dotenv/config")

const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors())

app.use(cookies());

app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'static')));

// Connect to MongoDB

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('connected to mongodb !!!');
});

// middlewares
const QuestionRoute = require("./paths/exam");
const registrationRoute = require("./paths/register");
const loginRoute = require("./paths/login");
const AdminRoute = require('./paths/admin/login');
const UploadPortal = require('./paths/adminPortal');
const feedback = require('./paths/feedback');
const router = require('./paths/exam');


app.use('/exam', QuestionRoute);
app.use('/user/register', registrationRoute);
app.use('/user/login', loginRoute)
app.use('/adminPanel', UploadPortal)
app.use('/admin/login', AdminRoute)
app.use('/feedback',feedback)

// Start Server on port 3000
const port = 3000;
app.listen(process.env.PORT || port, () => {
    console.log(`Started listening on port ${port}`);
})

