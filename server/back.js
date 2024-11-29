const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// dotenv config

dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express()

// middlewares

app.use(express.json())
app.use(morgan('dev'))

//routes

app.get('/', (req,res) => {
    res.status(200).send({
        message:"server is running "
    })
});

// listen port
 const port = process.env.PORT || 8080

 app.listen(port, () =>{
    console.log(
        `server is running in ${process.env.DEV_MODE} mode on port ${process.env.PORT}`.bgCyan.white
    );
 });