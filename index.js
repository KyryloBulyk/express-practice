const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb+srv://kyrylobulyk:12345qwert@kyrylobulyk.m7jdr88.mongodb.net/Node-API?retryWrites=true&w=majority&appName=kyrylobulyk")
.then(() => {
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed!");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

app.get('/', (req, res) => {
    res.send('Hello from NodeJs API Hello');
})