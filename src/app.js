import { login, register } from './services/authServ';
import { getIncome, addIncome } from './services/incomeServ';
import { getExpenses, addExpense } from './services/expenseServ';
import { getBudget, updateBudget } from './services/budgetServ';
import { getReports } from './services/reportsServ';

const initializeApp = async () => {
    // Example usage:
    
    // Register a new user
    await register('JohnDoe', 'john@example.com', 'password123');
    
    // Log in the user
    const loginResponse = await login('john@example.com', 'password123');
    console.log('Login Response:', loginResponse);

    // Fetch income
    const incomes = await getIncome();
    console.log('Incomes:', incomes);

    // Fetch expenses
    const expenses = await getExpenses();
    console.log('Expenses:', expenses);

    // Fetch budget
    const budget = await getBudget();
    console.log('Budget:', budget);

    // Fetch reports
    const reports = await getReports();
    console.log('Reports:', reports);
};

// Initialize the app
initializeApp();
