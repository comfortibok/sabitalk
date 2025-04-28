const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

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
        required : true
    },
    termsAccepted: {
        type : Boolean,
        required : true,
        default: false
    },
    selectedLanguage:{
        type: String
    }

}, {timestamps : true})


UserSchema.pre("save", async function(next){
    if(this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

UserSchema.methods.validatePass = async function(password){
    try{
        const user = this
        const compare = await bcrypt.compare(password, user.password)
        return compare;
    }catch(err){
        console.log("unable to confirm password ", err.message )
        return false;
    }

}

const UsersModel = mongoose.model("users", UserSchema)

module.exports = UsersModel