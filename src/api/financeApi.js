const BASE_URL = '/api/transactions'; 

// Fetch transactions (GET)
export const getTransactions = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching transactions: ${response.statusText}`);
    }
    return await response.json(); 
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

// Add a new transaction (POST)
export const createTransaction = async (transaction) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    });

    if (!response.ok) {
      throw new Error(`Error creating transaction: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating transaction:', error);
    throw error;
  }
};

// Backend API handler logic
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Example: Return dummy transactions
      const transactions = [{ id: 1, name: 'Sample', amount: 100 }];
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch transactions' });
    }
  } else if (req.method === 'POST') {
    try {
      const transaction = req.body;
      res.status(201).json(transaction); // Return the created transaction
    } catch (error) {
      res.status(500).json({ error: 'Failed to create transaction' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
