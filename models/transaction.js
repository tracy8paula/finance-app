import { db, firebaseDb, collection, getDocs, addDoc } from './my_db';

// Fetch transactions from Firebase
export const getTransactionsFromFirebase = async () => {
  try {
    const querySnapshot = await getDocs(collection(firebaseDb, "transactions"));
    const transactions = querySnapshot.docs.map(doc => doc.data());
    return transactions;
  } catch (error) {
    console.error('Error fetching transactions from Firebase:', error);
    throw error;
  }
};

// Fetch transactions from MySQL (local database)
export const getTransactionsFromLocal = (callback) => {
  const query = 'SELECT * FROM transactions';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching transactions from MySQL:', err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Add a new transaction to Firebase
export const createTransactionInFirebase = async (transaction) => {
  try {
    const docRef = await addDoc(collection(firebaseDb, "transactions"), transaction);
    return { id: docRef.id, ...transaction };
  } catch (error) {
    console.error('Error creating transaction in Firebase:', error);
    throw error;
  }
};

// Add a new transaction to MySQL (local database)
export const createTransactionInLocal = (transaction, callback) => {
  const { userId, amount, category, date } = transaction;
  const query = 'INSERT INTO transactions (userId, amount, category, date) VALUES (?, ?, ?, ?)';
  db.query(query, [userId, amount, category, date], (err, result) => {
    if (err) {
      console.error('Error inserting transaction into MySQL:', err);
      return callback(err, null);
    }
    callback(null, result);
  });
};
