const db = require('./my_db');

// Create a new user
const createUser = (username, email, password, callback) => {
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Get a user by email
const getUserByEmail = (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

module.exports = {
    createUser,
    getUserByEmail,
};
