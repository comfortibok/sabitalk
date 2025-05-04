const express = require("express")
const {validateLogin, validateSignup} = require("../validation/auth.validation")
const authController = require("../controllers/auth.controller")


const route = express.Router()


    
route.post("/signup", validateSignup, authController.Signup)

route.post("/login", validateLogin, authController.Login)
route.post("/reset-password", authController.Reset)
route.post("/verify-otp", authController.VerifyOtp)
route.post("/reset/new-password", authController.PasswordChange)

module.exports = route