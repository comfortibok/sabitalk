const Joi = require("joi")


const authSignupSchema = Joi.object({
    email : Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    password : Joi.string()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/)
        .required()
        .message({
            "string.pattern.base": `Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long.`,
            "string.empty": `Password cannot be empty`,
            "any.required": `Password is required`,
        }),
    termsAccepted:Joi.boolean()
        .required(),
    
})

const authLoginSchema = Joi.object({
    email : Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    password : Joi.string()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/)
        .required()
        .message({
            "string.pattern.base": `Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long.`,
            "string.empty": `Password cannot be empty`,
            "any.required": `Password is required`,
        }),
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