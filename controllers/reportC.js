const db = require('../models/my_db');

exports.getReport = (req, res) => {
    const { userId } = req.user;
    const { startDate, endDate } = req.query;

    const expenseQuery = `
        SELECT category, SUM(amount) AS total
        FROM expenses
        WHERE userId = ? AND date BETWEEN ? AND ?
        GROUP BY category
    `;

    const incomeQuery = `
        SELECT source, SUM(amount) AS total
        FROM income
        WHERE userId = ? AND date BETWEEN ? AND ?
        GROUP BY source
    `;

    db.query(expenseQuery, [userId, startDate, endDate], (err, expenseResults) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch expenses: ' + err.message });
        }

        db.query(incomeQuery, [userId, startDate, endDate], (err, incomeResults) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to fetch income: ' + err.message });
            }

            res.json({ expenses: expenseResults, income: incomeResults });
        });
    });
};
