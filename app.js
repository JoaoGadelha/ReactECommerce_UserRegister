const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
let registerUsr = require('./routes/registerUsr');
let getUsr = require('./routes/getUsr');

//middlewares
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

//routes
app.use('/register', registerUsr);
app.use('/get', getUsr);

//database
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true  },() => { console.log('Connected to DB.') });

app.listen((process.env.PORT || 3000),
    () => console.log("Server is running in port " + (process.env.PORT || 3000)));