
const UsersModel = require("../models/users.model")
const authService = require("../services/auth.service")


const Signup = async(req, res) => {
    const payload = req.body

    const language= req.session.language
    
    if(!payload){
        res.status(400).json({
            message : "all fields are required",
        })
    }

    const newUser = new UsersModel({
        email : payload.email,
        password : payload.password,
        termsAccepted : payload.termsAccepted,
        language 
    })

    const signupResponse = await authService.Signup(newUser)
    res.cookies("token", signupResponse.data.token,{ 
        httpOnly: true, 
        // change in production to true
        secure: false, 
        maxAge: 24 * 60 * 60 * 1000, 
        sameSite: 'Strict',
    })
    
    res.status(signupResponse.code).json(signupResponse)
    
}

module.exports = {
    Signup,
}