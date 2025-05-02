const UsersModel = require("../models/users.model")
const jwt = require("jsonwebtoken")
require("dotenv").config()


function generateToken(val){
    return jwt.sign({email : val}, process.env.JWT_SECRET, { expiresIn : "1hr"})
}

const Signup = async({email, password, termsAccepted, language}) =>{
    
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

        const user = await UsersModel.create({email, password, termsAccepted, language })
        
        const token = generateToken(user.email)
        
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

const Login = async({email, password}) =>{
    if(!email || !password){
        return{
            success : false,
            code : 400,
            data : null,
            message : "both fields are required"
        }
    }

    try{
        const user = await UsersModel.findOne({email});
        if(!user){
            return{
                success : false,
                data : null,
                code : 404,
                message : "Invalid email address"
            }
        }

        const isPasswordValid = await user.validatePass(password)
        if(!isPasswordValid){
            return{
                success : false,
                data : null,
                code : 404,
                message : "Invalid password"
            }
        }

        const token = generateToken(user.email)
        
        return{
            code : 200,
            success: true,
            data : {
                user,
                token
            },
            message : "login successful"
        }
        
    }catch(error){
        return({
            code : 500,
            success : false,
            data : null,
            message: "server error, unable to log into account"
        })
    }
}


module.exports = {
    Signup,
    Login
}