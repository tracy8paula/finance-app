const db = require('../models/my_db');

// Add a new expense
exports.addExpense = (req, res) => {
    const { userId, category, amount, description, date } = req.body;

    const query = `
        INSERT INTO expenses (userId, category, amount, description, date)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(query, [userId, category, amount, description, date], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to add expense: ' + err.message });
        }
        res.status(201).json({ message: 'Expense added successfully.', id: result.insertId });
    });
};

// Get all expenses
exports.getExpenses = (req, res) => {
    const { userId } = req.user; // Assuming `authenticate` middleware adds `userId` to `req`

    const query = `
        SELECT * FROM expenses
        WHERE userId = ?
    `;

    db.query(query, [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve expenses: ' + err.message });
        }
        res.json(results);
    });
};
