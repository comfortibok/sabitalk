const express = require("express")
const {validateLogin, validateSignup} = require("../validation/auth.validation")
const authController = require("../controllers/auth.controller")


const route = express.Router()


    
route.post("/signup", validateSignup, authController.Signup)

// route.post("/login", validateLogin,  (req, res)=>{
//     // login
// })


module.exports = route