const UsersModel = require("../models/users.model")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const Signup = async({email, password, termsAccepted, selectedLanguage}) =>{
    try{
        if (!termsAccepted) {
            return {
              code: 400,
              success: false,
              data: null,
              message: "You must agree to the Terms and Conditions to sign up."
            };
        }

        const userExist = await UsersModel.findOne({email})

        if(userExist){
            return({
                code : 409,
                success : false,
                data : null,
                message: "Email already exist"
            })
        }

        const user = await UsersModel.create({email, password, termsAccepted, selectedLanguage })
        
        const token = await jwt.sign({email: user.email}, process.env.JWT_SECRET, {expiresIn : "1hr"})
        return({
            success: true,
            code : 201,
            data: {user, token},
            message : "signed up successfully"
        })

    }catch(error){
        return({
            code : 500,
            success : false,
            data : null,
            message: "server error, unable to create account"
        })
    }
}



module.exports = {
    Signup,
}