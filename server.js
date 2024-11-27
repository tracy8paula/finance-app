const express = require('express');
require('dotenv').config();
const db = require('./models/my_db'); 

const app = express();
app.use(express.json());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/expenses', require('./routes/expense'));
app.use('/income', require('./routes/income'));
app.use('/budgets', require('./routes/budget'));
app.use('/reports', require('./routes/reports'));

// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));
