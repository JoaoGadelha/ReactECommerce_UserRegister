let express = require('express');
let login = express.Router();
let User = require('../usrSchema.js');

login.post('/', async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    try {
        const search = await User.find({ email: { $regex: new RegExp(email, "i") }, password: password });
        console.log(search[0]);
        /* const email = await User.find(); */
        res.json({ name:search[0].name, email:search[0].email, shopCart: search[0].shopCart, id:search[0]._id });
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = login;