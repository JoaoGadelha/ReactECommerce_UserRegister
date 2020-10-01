let express = require('express');
let getShopCart = express.Router();
let User = require('../usrSchema.js');

getShopCart.post('/:id', async (req, res) => {
    try {
        let shopCart = await User.find({ _id: req.params.id });
        return res.json({shopCart:shopCart[0]._id});
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = getShopCart;