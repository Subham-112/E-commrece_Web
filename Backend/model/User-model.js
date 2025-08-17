const mongoose = require('mongoose');

const newUser = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const userModel = mongoose.model('User', newUser);
module.exports = userModel;