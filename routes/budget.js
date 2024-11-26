const express = require('express');
const { addBudget, getBudgets } = require('../controllers/budgetC');
const authenticate = require('../middlewareauth');

const router = express.Router();

// adding budgets
router.post('/add', authenticate, addBudget);
// getting all budgets
router.get('/all', authenticate, getBudgets);

module.exports = router;
