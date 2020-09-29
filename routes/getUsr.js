let express = require('express');
let getUsr = express.Router();
let User = require('../usrSchema.js');

getUsr.get('/', async (req, res) => {
     try {
        //let usrInfo = await User.find(); 
        //res.json(usrInfo);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = getUsr;