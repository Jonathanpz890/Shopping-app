require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// router('/', (req, res) => {
//     res.json({'hello': 'hi'})
// })
const getItems = () => {
    return [1, 2, 3, 4]
}
app.post('/items',  getItems)

app.listen(process.env.PORT, () => {
    console.log()
})