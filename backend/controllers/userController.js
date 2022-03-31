// here we create all the route logic

// @desc - register a new user
// @route - /api/users
// @access - public
const registerUser = (req, res) => {
    // get data from the request
    const { name, email, password } = req.body;
    //validation
    if (!name || !email || !password) {
        res.status(400).json({ message: 'Please include all fields' })
    }

    res.send('Register Route')
};

// @desc - login a new user
// @route - /api/users/login
// @access - public
const loginUser = (req, res) => {
    res.send('Login Route')
};

module.exports = { registerUser, loginUser }