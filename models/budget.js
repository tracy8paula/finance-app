const db = require('./my_db');

// Create a new budget
const createBudget = (userId, category, limit, startDate, endDate, callback) => {
    const query = 'INSERT INTO budgets (userId, category, limit, startDate, endDate) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [userId, category, limit, startDate, endDate], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Get budgets by user
const getBudgetsByUser = (userId, callback) => {
    const query = 'SELECT * FROM budgets WHERE userId = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    createBudget,
    getBudgetsByUser,
};
