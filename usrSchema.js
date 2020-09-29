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
    password2: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});




module.exports = mongoose.model('User', usrSchema);