const { required } = require("joi")
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true,
    },
    termsAccepted: {
        type : Boolean,
        required : true,
    },
    learningLanguage:{
        type: String
    }

})



const UsersModel = mongoose.model("users", UserSchema)

module.exports = UsersModel