const express = require('express');
const { addExpense, getExpenses } = require('../controllers/expenseC');
const authenticate = require('../middlewareauth');

const router = express.Router();

// add a new expense
router.post('/add', authenticate, addExpense);

//get all expenses
router.get('/all', authenticate, getExpenses);

module.exports = router;
