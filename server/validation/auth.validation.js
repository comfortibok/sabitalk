const joi = require("joi")


const authSignupSchema = joi.object({
    email : joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    password : joi.string()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/)
        .required(),

    termsAccepted:joi.boolean()
        .required(),
    
})

const authLoginSchema = joi.object({
    email : joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    password : joi.string()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/)
        .required(),
})


const validateSignup = async(req, res, next)=>{
    const authPayload = req.body

    try{
        await authSignupSchema.validateAsync(authPayload)
        next()
    }catch(error){
        next({
            message : error.message
        })
    }
}

const validateLogin = async(req, res, next)=>{
    const authPayload = req.body;
    try{
        await authLoginSchema.validateAsync(authPayload)
        next()
    }catch(error){
        next({
            message : error.message
        })
    }
}


module.exports = {
    validateSignup,
    validateLogin
}