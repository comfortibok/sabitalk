const express = require("express")
require("dotenv").config()
const connect = require("./db")
const authRoute = require("./routes/auth.routes")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const session = require("express-session")

const PORT = process.env.PORT

const app = express()
// connecting to database
connect.connectDB()

var corsOption = {
    origin : ["http://localhost:5173/", "http://localhost:8000/"],
    optionsSuccessStatus: 200 ,
    credentials: true 
};

app.use(cookieParser())
app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(session({
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : true,
    // set this to true before deploy
    cookie: { secure: false } 
}))


// routes
app.use("/auth", authRoute)

app.post("/select-language", (req, res)=>{
    const {language} = req.body;
    if(!language){
        res.status(400).json({
            message : "you have to select a language"
        })
    }
    req.session.language = language;

    console.log("from select lang route ses.lang", req.session.language)
    console.log("from select lang route language", language)

    res.status(200).json({
        message : `successfully selected ${language}`
    })
})

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
        console.log( `server error : ${error.message}`)
        res.status(500).json({
            message: `server error : ${error.message}`
        })
    }
    next()
})

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})
