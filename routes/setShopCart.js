let express = require('express');
let setShopCart = express.Router();
let User = require('../usrSchema.js');

setShopCart.post('/', async (req, res) => {
    try {
        console.log(req.body.id, req.body.quantity, req.body.userId);
        if (req.body.quantity <= 0) { // if a product should be removed from the cart
            await User.updateOne({ _id: req.body.userId }, { $pull: { 'shopCart': { 'id': req.body.id } } });
        } else {//check if wether the product is already present in the cart or not
            let productIsInCart = await User.find({ _id: req.body.userId, "shopCart.id": req.body.id });
            if (productIsInCart.length === 0) {
                await User.updateOne({ _id: req.body.userId }, { $push: { shopCart: { quantity: req.body.quantity, id: req.body.id } } });
            } else {
                await User.updateOne({ _id: req.body.userId, "shopCart.id": req.body.id }, { $set: { 'shopCart.$.quantity': req.body.quantity } });
            }
        }
        // console.log('modify :' + modify.ok + ',' + modify.n + ',' + modify.nModified);
        let modifiedCart = await User.find({ _id: req.body.userId });
        //console.log('modified: ' + modifiedCart);
        return res.json(modifiedCart[0].shopCart);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = setShopCart;
