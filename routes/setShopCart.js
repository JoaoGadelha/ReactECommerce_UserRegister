let express = require('express');
let setShopCart = express.Router();
let User = require('../usrSchema.js');

setShopCart.post('/:id', async (req, res) => {
    try {
        let shopCart = await User.find({ _id: req.params.id });
        return res.json({shopCart:shopCart[0].shopCart});
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = setShopCart;
