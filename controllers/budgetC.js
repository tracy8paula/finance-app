const db = require('../models/my_db');

exports.addBudget = (req, res) => {
    const { userId, category, limit, startDate, endDate } = req.body;

    const query = `INSERT INTO budgets (userId, category, limit, startDate, endDate) VALUES (?, ?, ?, ?, ?)`;

    db.query(query, [userId, category, limit, startDate, endDate], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to add budget: ' + err.message });
        }
        res.status(201).json({ message: 'Budget added successfully.', id: result.insertId });
    });
};

exports.getBudgets = (req, res) => {
    const { userId } = req.user;

    const query = `SELECT * FROM budgets WHERE userId = ?`;

    db.query(query, [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch budgets: ' + err.message });
        }
        res.json(results);
    });
};
