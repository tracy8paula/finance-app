const db = require('../models/my_db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;

    db.query(query, [username, email, hashedPassword], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({ error: 'Email already in use.' });
            }
            return res.status(500).json({ error: 'Registration failed: ' + err.message });
        }
        res.status(201).json({ message: 'User registered successfully.' });
    });
};

exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }

    const query = `SELECT * FROM users WHERE email = ?`;

    db.query(query, [email], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error: ' + err.message });
        }
    });
};