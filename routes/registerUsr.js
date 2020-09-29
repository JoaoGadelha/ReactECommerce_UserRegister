let express = require('express');
let registerUsr = express.Router();
let User = require('../usrSchema.js');

registerUsr.post('/', async (req, res) => {
     usr =  new User({
        name: req.body.name,
        password: req.body.password,
        password2: req.body.password2,
        email: req.body.email
    });
     try {
        let newUsr = await usr.save();
        res.json(newUsr);
    } catch (err) {
        res.json({ message: err });
    } 
})

module.exports = registerUsr;