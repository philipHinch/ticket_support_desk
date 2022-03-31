// set up express and listen on specific port
const express = require('express');
// dotenv loads environment variables from a .env file into process.env
const dotenv = require('dotenv').config();
// import the custom error handler function
const { errorHandler } = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;

const app = express();

// in order to receive json data 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create routes. (bring in route from userRoutes.js)
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the support desk API' })
});

// routes. here any routes in userRoutes will get added on. 
// separating routes, controller and server will end in a much cleaner code
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server started on port ${ PORT }`);
});