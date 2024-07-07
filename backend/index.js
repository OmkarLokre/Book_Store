// const express = require('express')
import express from "express"
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js" 
import dotenv from "dotenv"
import cors from "cors"
import userRoute from "./route/user.route.js"

const app = express()
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to MongoDB

// try{

// }
// catch(e){}

try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error: ",error);
}

// defining routes

app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})