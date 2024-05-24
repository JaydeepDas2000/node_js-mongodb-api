require('dotenv').config();
const { MongoClient } = require('mongodb');
const express = require('express');
const mongoose = require('mongoose');

const todoRoutes = require('./routes/TodoRoutes');

const app = express();
app.use(express.json());
const port = 3000

const url = process.env.MONGODB_CONNECTION;
mongoose.connect(url);
const db = mongoose.connection;

db.on('error', () => {
    console.error("connection error");
})

db.once('open', () => {
    console.log("connection successful");
})

app.get("/", (req, res) => {
    res.send("App is working");
})

app.use('/api', todoRoutes);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});