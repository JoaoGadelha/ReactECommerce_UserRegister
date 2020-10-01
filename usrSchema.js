const mongoose = require('mongoose');

const usrSchema = mongoose.Schema({
     name: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    shopCart: {
        type: Array
    }
});




module.exports = mongoose.model('User', usrSchema);