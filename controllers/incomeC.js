const db = require('../models/my_db');

exports.addIncome = (req, res) => {
    const { userId, source, amount, date } = req.body;

    const query = `INSERT INTO income (userId, source, amount, date) VALUES (?, ?, ?, ?)`;

    db.query(query, [userId, source, amount, date], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to add income: ' + err.message });
        }
        res.status(201).json({ message: 'Income added successfully.', id: result.insertId });
    });
};

exports.getIncome = (req, res) => {
    const { userId } = req.user;

    const query = `SELECT * FROM income WHERE userId = ?`;

    db.query(query, [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch income: ' + err.message });
        }
        res.json(results);
    });
};
