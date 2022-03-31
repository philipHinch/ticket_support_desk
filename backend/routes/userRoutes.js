// here we will create all the routes for the server.js
const express = require('express');
// creates a router as a module
const router = express.Router();


// this will be added on to whatever requires it
router.post('/', (req, res) => {
    res.send('Register Route')
})
// this will be added on to whatever requires it
router.post('/login', (req, res) => {
    res.send('Login Route')
})

module.exports = router