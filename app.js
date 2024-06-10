const express = require("express")
const mongoose = require("mongoose")
const cors =require("cors")
const app = express()
const library = require("./models/library")

app .use(cors())

app.post("/add",(req,res)=>{
    res.send("ADD")
})

app.post("/search",(req,res)=>{
    res.send("SEARCH")
})

app.post("/delete",(req,res)=>{
    res.send("DELETE")
})

app.get("/view",(req,res)=>{
    res.send("VIEW")
})

app.listen(8080,()=>{
    console.log("server started")
})