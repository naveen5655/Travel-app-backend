const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");
const singleHoterRouter = require("./routes/singlehotel.router");

const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router")
const connectDB = require("./config/dbconfig");
const authRouter = require("./routes/auth.router");
const wishlistRouter = require("./routes/wishlist.router");

const app = express();

app.use(express.json());
connectDB();

const PORT = 3500;

app.get("/",(req,res)=>{
    res.send("Hello Badisa Naveen")
})

app.use("/api/hoteldata", hotelDataAddedToDBRouter);
app.use("/api/categorydata", categoryDataAddedToDBRouter);
app.use("/api/hotels",hotelRouter);
app.use("/api/category",categoryRouter);
app.use("/api/hotels", singleHoterRouter);
app.use("/api/auth", authRouter);
app.use("/api/wishlist", wishlistRouter);

mongoose.connection.once("open", () =>{
    console.log("Connected to db");
    app.listen(process.env.PORT || PORT ,()=>{
        console.log("Server is UP and Running")
    })
})