const BASE_URL = 'http://localhost:5000'; 

// Generic function for GET requests
export const fetchData = async (endpoint) => {
  try {
    const url = `${BASE_URL}/${endpoint}`;
    console.log(`Fetching data from: ${BASE_URL}`);
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Error fetching ${endpoint}: ${response.status} - ${response.statusText}`);
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};



// Generic function for POST requests
export const postData = async (endpoint, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response body as JSON
    const responseBody = await response.json();
    return responseBody;
  } catch (error) {
    console.error(`Error posting to ${endpoint}:`, error);
    throw error;
  }
};


// Transactions
export const getTransactions = () => fetchData('transactions');
export const createTransaction = (transaction) => postData('transactions', transaction);

// Incomes
export const getIncomes = () => fetchData('incomes');
export const createIncome = (income) => postData('incomes', income);

// Expenses
export const getExpenses = () => fetchData('expenses');
export const createExpense = (expense) => postData('expenses', expense);

// Reports
export const getReports = () => fetchData('reports');

// Users (e.g., Sign-up and Login)
export const signUpUser = (userData) => postData('sign-up', userData);
export const loginUser = (credentials) => postData('login', credentials); 

export default async function handler(req, res) {
  const { method, url } = req;
  const endpoint = url.split('/').pop(); // Get the endpoint name

  try {
    if (method === 'GET') {
      if (endpoint === 'transactions') {
        res.status(200).json([{ id: 1, name: 'Sample Transaction', amount: 100 }]);
      } else if (endpoint === 'incomes') {
        res.status(200).json([{ id: 1, name: 'Sample Income', amount: 500 }]);
      } else if (endpoint === 'expenses') {
        res.status(200).json([{ id: 1, name: 'Sample Expense', amount: 300 }]);
      } else if (endpoint === 'reports') {
        res.status(200).json({ summary: 'Report data goes here' });
      } else {
        res.status(404).json({ error: 'Endpoint not found' });
      }
    } else if (method === 'POST') {
      const data = req.body;
      if (endpoint === 'transactions') {
        res.status(201).json({ message: 'Transaction created', data });
      } else if (endpoint === 'incomes') {
        res.status(201).json({ message: 'Income created', data });
      } else if (endpoint === 'expenses') {
        res.status(201).json({ message: 'Expense created', data });
      } else if (endpoint === 'sign-up') {
        res.status(201).json({ message: 'User signed up', data });
      } else if (endpoint === 'login') {
        res.status(200).json({ message: 'User logged in'});
      } else {
        res.status(404).json({ error: 'Endpoint not found' });
      }
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error(`Error handling ${endpoint}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
