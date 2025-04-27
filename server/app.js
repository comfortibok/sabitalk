const express = require("express")
require("dotenv").config()
const connect = require("./db")
const authRoute = require("./routes/auth.routes")


const PORT = process.env.PORT

const app = express()
// connecting to database
connect.connectDB()

// routes
app.use("/auth", authRoute)

app.get("/", (req,res)=>{
    res.send("we are live")
})


app.use((error, req, res, next)=>{
    console.log("path: ", req.path)
    if(error.type == "Redirect"){
        console.log("from error handler middleware : redirecting error", error.message)
        res.send({message : error.message})
    }else if(error.type == "Not found"){
        res.status(404).send({
            message: "Not found"
        })
    }else{
        res.status(500).send({
            message: "Server error"
        })
    }
    next()
})

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})
