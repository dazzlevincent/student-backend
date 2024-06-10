const express = require("express")
const mongoose = require("mongoose")
const cors =require("cors")

const app=express()
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Hello")

})
app.get("/contact",(req,res)=>{
    res.send("Welcome to contact page")
})
app.listen(8080,()=>{
    console.log("Server Started")
}
)