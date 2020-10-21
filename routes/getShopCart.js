let express = require('express');
let getShopCart = express.Router();
let User = require('../usrSchema.js');

getShopCart.post('/:id', async (req, res) => {
    try {
        let shopCart = await User.find({ _id: req.params.id });
        console.log(shopCart);
        return res.json({shopCart:shopCart[0].shopCart});
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = getShopCart;