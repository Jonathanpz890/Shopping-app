require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const APIRoutes = require('./src/routes/config.js');
const mongoose = require('mongoose');

const mongoURI = `${process.env.DB_PROTOCOL}${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}${process.env.DB_HOST}/${process.env.DB_NAME}`;

const app = express();
app.use(express.json())
app.use(express.urlencoded());
app.use('/', APIRoutes);


const start = async () => {
    try {
        await mongoose.connect(mongoURI)
        app.listen(process.env.PORT, () => {
            console.log()
        })
    } catch(error) {
        console.log(error);
        process.exit(0)
    }
}

start();