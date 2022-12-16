require("dotenv").config();

const express = require("express");
const app = express();
const connectToDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");
//Middlewere it is necessy to parse data it works
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connecttodb function
connectToDB();
//for all requst
app.use("/", todoRoutes);

module.exports = app;
