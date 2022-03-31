// here we create all the route logic

// import express-async-handler to use async on the routing functions below (useful with mongoose)
// it makes it easier to deal with async functions
const asyncHandler = require('express-async-handler');

// @desc - register a new user
// @route - /api/users
// @access - public
const registerUser = asyncHandler(async (req, res) => {
    // get data from the request
    const { name, email, password } = req.body;
    //validation
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please include all fields')
    }

    res.send('Register Route')
});

// @desc - login a new user
// @route - /api/users/login
// @access - public
const loginUser = asyncHandler(async (req, res) => {
    res.send('Login Route')
});

module.exports = { registerUser, loginUser }