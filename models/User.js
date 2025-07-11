const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    role :{
        type: String,
        enum: ['admin', 'customers' ,'seller'] ,
        default:'customers'
    }
})

module.exports = mongoose.model('User', userSchema)