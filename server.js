require('dotenv').config();
const { MongoClient } = require('mongodb');
const express = require('express');
const mongoose = require('mongoose');


const url = process.env.MONGODB_CONNECTION;
mongoose.connect(url);
const db = mongoose.connection;

db.on('error', () => {
    console.error("connection error");
})

db.once('open', () => {
    console.log("connection successful");
})

const app = express();
app.get("/", (req, res) => {
    res.send("App is working");
})


app.listen(3000);