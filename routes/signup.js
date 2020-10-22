let express = require('express');
let signup = express.Router();
let User = require('../usrSchema.js');

signup.post('/', async (req, res) => {
    if (req.body.password !== req.body.password2) {
        return res.send({ message: 'different passwords' })
    }
    if(req.body.saveProduct !== '') {
        usr = new User({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            shopCart: [req.body.saveProduct]
        });
    } else {
        usr = new User({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            shopCart: []
        });
    }
    
    try {
        let newUsr = await usr.save();
        return res.json(newUsr);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = signup;