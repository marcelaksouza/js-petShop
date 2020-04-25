
//load env variables
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.Promise = global.Promise

//db connection
mongoose.connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
    console.log("Database connection established!");
 },
 err => {
    console.log("Error connecting Database instance due to: ", err);
 });