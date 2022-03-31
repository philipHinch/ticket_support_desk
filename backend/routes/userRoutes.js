// here we will create all the routes for the server.js
const express = require('express');
// creates a router as a module
const router = express.Router();
// import the route logic functions from the userController
const { registerUser, loginUser } = require('../controllers/userController');

// added imported route functions to each route
router.post('/', registerUser);
router.post('/login', loginUser);

module.exports = router