let express = require('express');
let setShopCart = express.Router();
let User = require('../usrSchema.js');

setShopCart.post('/', async (req, res) => {
    try {
        console.log(req.body.quantCart);
        return '';
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = setShopCart;
