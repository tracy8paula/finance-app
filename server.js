const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
app.use(bodyParser.json()); 
const port = 3000;

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/expenses', require('./routes/expense'));
app.use('/income', require('./routes/income'));
app.use('/budgets', require('./routes/budget'));
app.use('/reports', require('./routes/reports'));
app.use('/users', require('./routes/user'));


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
