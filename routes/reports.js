const express = require('express');
const { getReport } = require('../controllers/reportC');
const authenticate = require('../middlewareauth');

const router = express.Router();

// Route for generating financial reports
router.get('/generate', authenticate, getReport);

module.exports = router;
