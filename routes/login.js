let express = require('express');
let login = express.Router();
let User = require('../usrSchema.js');

login.post('/', async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    try {
        const search = await User.find({ email: { $regex: new RegExp(email, "i") }, password: password });
        /* const email = await User.find(); */
        res.json({  id:search[0]._id });
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = login;