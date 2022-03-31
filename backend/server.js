// set up express and listen on specific port
const express = require('express');
// dotenv loads environment variables from a .env file into process.env
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => {
    console.log(`Server started on port ${ PORT }`);
});