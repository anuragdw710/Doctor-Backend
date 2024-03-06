const express = require('express');
const dotenv = require('dotenv').config();

const dbConfig = require('./config/dbConfig');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})