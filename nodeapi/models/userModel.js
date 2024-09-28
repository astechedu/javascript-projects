const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        requiere:true
    },
    mobile:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User