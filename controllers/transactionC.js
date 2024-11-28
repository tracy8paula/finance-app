import { 
  getTransactionsFromFirebase, 
  getTransactionsFromLocal, 
  createTransactionInFirebase, 
  createTransactionInLocal 
} from '../models/transaction';

export const getTransactions = async (req, res) => {
  const { source } = req.query; 

  try {
    let transactions;
    if (source === 'firebase') {
      transactions = await getTransactionsFromFirebase();  // Fetch from Firebase
    } else {
      transactions = await new Promise((resolve, reject) => {
        getTransactionsFromLocal((err, results) => {  // Fetch from local DB
          if (err) return reject(err);
          resolve(results);
        });
      });
    }

    res.status(200).json({ data: transactions });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Error fetching transactions' });
  }
};

export const createTransaction = async (req, res) => {
  const { source } = req.query;
  const transaction = req.body; // Get the transaction from the request body

  try {
    let createdTransaction;
    if (source === 'firebase') {
      createdTransaction = await createTransactionInFirebase(transaction);  // Create in Firebase
    } else {
      createdTransaction = await new Promise((resolve, reject) => {
        createTransactionInLocal(transaction, (err, result) => {  // Create in local DB
          if (err) return reject(err);
          resolve(result);
        });
      });
    }

    res.status(201).json({ data: createdTransaction });
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ error: 'Error creating transaction' });
  }
};
