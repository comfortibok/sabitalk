const { sign } = require("jsonwebtoken")
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

    const signupResponse = await authService.Signup({
         email : payload.email,
         password : payload.password,
         termsAccepted : payload.termsAccepted,
         learningLanguage : selectedLanguage 

    })
    
    res.status(signupResponse.code).message(signupResponse)
    console.log(signupResponse.data.token)
}

module.exports = {
    Signup,
}