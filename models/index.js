const db = require('./my_db');

// Load SQL-based models
const User = require('./user');
const Expense = require('./expense');
const Income = require('./income');
const Budget = require('./budget');

// Export the database connection and models
module.exports = { db, User, Expense, Income, Budget };
