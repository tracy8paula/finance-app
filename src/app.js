import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import Dashboard from './components/dashboard';
import AddTransaction from './pages/addTransaction';
import EditTransaction from './pages/editTransactions';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Fetch transactions from backend API using fetch
  useEffect(() => {
    fetch('/api/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error("There was an error fetching the data:", error));
  }, []);

  // Add new transaction using fetch
  const addTransaction = (transaction) => {
    fetch('/api/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    })
      .then(response => response.json())
      .then(newTransaction => {
        setTransactions(prev => [...prev, newTransaction]);
      })
      .catch(error => console.error("There was an error adding the transaction:", error));
  };

  // Edit existing transaction using fetch
  const editTransaction = (updatedTransaction) => {
    fetch(`/api/transactions/${updatedTransaction.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTransaction),
    })
      .then(response => response.json())
      .then(updated => {
        setTransactions(prev => prev.map(transaction =>
          transaction.id === updatedTransaction.id ? updated : transaction
        ));
      })
      .catch(error => console.error("There was an error editing the transaction:", error));
  };

  // Delete a transaction using fetch
  const deleteTransaction = (id) => {
    fetch(`/api/transactions/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setTransactions(prev => prev.filter(transaction => transaction.id !== id));
      })
      .catch(error => console.error("There was an error deleting the transaction:", error));
  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>Finance App</Typography>
      <Box display="flex" justifyContent="center" mb={2}>
        <button onClick={() => setIsAddTransactionOpen(true)}>Add Transaction</button>
      </Box>
      <Dashboard
        transactions={transactions}
        onEdit={setSelectedTransaction}
        onDelete={deleteTransaction}
      />
      {isAddTransactionOpen && <AddTransaction onClose={() => setIsAddTransactionOpen(false)} onAdd={addTransaction} />}
      {selectedTransaction && <EditTransaction transaction={selectedTransaction} onClose={() => setSelectedTransaction(null)} onEdit={editTransaction} />}
    </Container>
  );
};

export default App;
