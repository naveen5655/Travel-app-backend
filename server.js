const express = require("express");

const app = express();

const PORT = 3500;

app.get("/",(req,res)=>{
    res.send("Hello Naveen")
})

app.listen(process.env.PORT || PORT ,()=>{
    console.log("Server is UP and Running")
})