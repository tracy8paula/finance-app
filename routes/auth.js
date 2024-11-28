const express = require('express');
const authController = require('../controllers/authC');

const router = express.Router();

// Route for user login
router.post('/login', authController.login);

// Route for user registration
router.post('/register', authController.register);

// Protected route example (using token verification)
router.get('/profile', authController.verifyToken, (req, res) => {
    res.status(200).json({
        message: 'Profile accessed successfully',
        user: req.user, // Contains the decoded user information
    });
});

module.exports = router;
