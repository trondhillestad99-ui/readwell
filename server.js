// Importing the express module. This is like bringing in a toolkit to build our server.
const express = require('express');

// Creating our server using the express toolkit.
const app = express();

// We need to use JSON data in our application.
app.use(express.json());

// This is the port where our server will listen for requests. Imagine this as our server's address.
const PORT = 3000;

// An endpoint for user registration. When someone sends data to this address, we can register a new user.
app.post('/api/register', (req, res) => {
    // Here we would put code to register a user using the data from the request.
    res.send('User registered!');  // A message to say the user was registered.
});

// An endpoint for user login. This is where users can log into the application.
app.post('/api/login', (req, res) => {
    // Here we would check the user's credentials to log them in.
    res.send('User logged in!');  // A message to say the user was logged in.
});

// This endpoint lets us fetch all users from our system.
app.get('/api/users', (req, res) => {
    // Here we would fetch and return all users.
    res.send('List of users');  // A message to say we listed users.
});

// This endpoint allows us to fetch a specific user by their ID.
app.get('/api/user/:id', (req, res) => {
    // Here we would retrieve a user by their unique ID.
    res.send(`User with ID: ${req.params.id}`);  // A message to say which user we fetched.
});

// Starting our server and telling it to listen on the specified PORT.
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);  // A message that our server is up and running.
});