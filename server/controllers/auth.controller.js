
const UsersModel = require("../models/users.model")
const authService = require("../services/auth.service")


const Signup = async(req, res) => {
    const payload = req.body
    console.log(payload)
    const selectedLanguage = req.session.selectedLanguage
    console.log(selectedLanguage)
    
    if(!payload){
        res.status(400).json({
            message : "all fields are required",
        })
    }

    const newUser = new UsersModel({
        email : payload.email,
         password : payload.password,
         termsAccepted : payload.termsAccepted,
         learningLanguage : selectedLanguage 
    })

    const signupResponse = await authService.Signup(newUser)
    
    res.status(signupResponse.code).json(signupResponse)
    console.log( "from controller ",signupResponse.data.token)
}

module.exports = {
    Signup,
}