const express = require('express');
const { addIncome, getIncome } = require('../controllers/incomeC');
const authenticate = require('../middlewareauth');

const router = express.Router();

// Routes for managing income
// adding a new income source
router.post('/add', authenticate, addIncome);

// getting all income records
router.get('/all', authenticate, getIncome);

module.exports = router;
