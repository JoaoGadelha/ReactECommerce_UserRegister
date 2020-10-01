const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
let signup = require('./routes/signup');
//let getUsr = require('./routes/getUsr');
let login = require('./routes/login');
let getShopCart = require('./routes/getShopCart');
const shutDown = require('./shutdown');

//middlewares
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

//routes
app.use('/signup', signup);
//app.use('/get', getUsr);
app.use('/login',login);
app.use('/getShopCart', getShopCart);

//database
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true  },() => { console.log('Connected to DB.') });

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);


app.listen((process.env.PORT || 5000),
    () => console.log("Server is running in port " + (process.env.PORT || 5000)));