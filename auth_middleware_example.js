const express = require('express');
const app = express();
const PORT = 3000;

/**
 * Authentication middleware
 * Validates if the request contains an authorization token
 * If token is missing, returns 401 Unauthorized response
 * Otherwise, passes control to the next middleware/route handler
 */
const auth = (req, res, next) => {
 // const token = req.get('Authorization');

 const token = req.headers.authorization;

 console.log(token);

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
};

app.use(auth);    // Apply auth middleware to all routes

/**
 * GET /profile route handler
 * Returns profile data after authentication
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/profile', (req, res) => {
  res.send('profile data');
});

/**
 * Start the server
 * Listens on the specified PORT and logs the server address
 */
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
