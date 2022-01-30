require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const APIRoutes = require('./src/routes/config.js');
// const router = express.Router();
const app = express();
app.use('/', APIRoutes);

app.listen(process.env.PORT, () => {
    console.log()
})