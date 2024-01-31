const express = require("express");
const mongoose = require('mongoose');

const hotelRouter = require("./routes/hotel.router");
const connectDB = require("./config/dbconfig");

const app = express();

app.use(express.json());
connectDB();

const PORT = 3500;

app.get("/",(req,res)=>{
    res.send("Hello Badisa Naveen")
})

app.use("/api/hotels",hotelRouter);

mongoose.connection.once("open", () =>{
    console.log("Connected to db");
    app.listen(process.env.PORT || PORT ,()=>{
        console.log("Server is UP and Running")
    })
})