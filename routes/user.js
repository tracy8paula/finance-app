const express = require('express');
const userController = require('../controllers/userC');
const authMiddleware = require('../middleware/middlewareauth'); // Import middleware

const router = express.Router();

// Route to create a new user
router.post('/users', userController.createUser);

// Route to get a user by email
router.get('/users/:email', userController.getUserByEmail);

// A protected route where authentication is required
router.get('/profile', authMiddleware, userController.getUserProfile);
module.exports = router;
