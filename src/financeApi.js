// Direct API endpoints for interacting with internet services
const BASE_URL = 'http://localhost:5000/api'; 

// Fetch transactions from an external API
export const getTransactions = async () => {
  try {
    const response = await fetch(`${BASE_URL}/transactions`);
    if (!response.ok) {
      throw new Error(`Error fetching transactions: ${response.statusText}`);
    }
    return await response.json(); // Ensure this matches the API's response structure
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

// Add a new transaction via the external API
export const createTransaction = async (transaction) => {
  try {
    const response = await fetch(`${BASE_URL}/transactions`, {
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
