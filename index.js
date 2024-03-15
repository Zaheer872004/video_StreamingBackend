// step 1 create server;
// const express = require('express');
import express from 'express';
import dataBaseConnection from "./util/databaseconfig.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute.js";

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
dataBaseConnection();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());


//api 
app.use("/api/v1/user",userRoute);



app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})