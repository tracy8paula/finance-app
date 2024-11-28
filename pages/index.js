import React, { useState, useEffect } from 'react';
import Navbar from '../src/components/navbar';
import { Container, Typography, Box, Button } from '@mui/material';
import Dashboard from './dashboard';
import AddTransaction from '../src/components/addTransaction';
import EditTransaction from '../src/components/editTransactions';
import TransactionForm from '../src/components/transactionForm';
import TransactionList from '../src/components/transactionList';
import { getTransactions, createTransaction } from '../src/api/financeApi';

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Fetch transactions on page load
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  // Add new transaction
  const handleAddTransaction = async (transaction) => {
    try {
      const newTransaction = await createTransaction(transaction);
      setTransactions((prev) => [...prev, newTransaction]);
      setIsAddTransactionOpen(false); // Close the AddTransaction form after success
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  // Edit transaction logic
  const handleEditTransaction = async (updatedTransaction) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/transactions/${updatedTransaction.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTransaction),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update transaction');
      }

      const updated = await response.json();
      setTransactions((prev) =>
        prev.map((transaction) =>
          transaction.id === updatedTransaction.id ? updated : transaction
        )
      );
      setSelectedTransaction(null); // Close the EditTransaction form after success
    } catch (error) {
      console.error('Error updating transaction:', error);
    }
  };

  // Delete transaction logic
  const handleDeleteTransaction = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/transactions/${id}`,
        { method: 'DELETE' }
      );

      if (!response.ok) {
        throw new Error('Failed to delete transaction');
      }

      setTransactions((prev) =>
        prev.filter((transaction) => transaction.id !== id)
      );
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to the Personal Finance App
        </Typography>

        {/* Transaction Form */}
        <TransactionForm />

        {/* Transaction List */}
        <TransactionList />

        <Box display="flex" justifyContent="center" mb={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsAddTransactionOpen(true)}
          >
            Add Transaction
          </Button>
        </Box>
        <Dashboard
          transactions={transactions}
          onEdit={setSelectedTransaction}
          onDelete={handleDeleteTransaction}
        />
        {isAddTransactionOpen && (
          <AddTransaction
            onClose={() => setIsAddTransactionOpen(false)}
            onAdd={handleAddTransaction}
          />
        )}
        {selectedTransaction && (
          <EditTransaction
            transaction={selectedTransaction}
            onClose={() => setSelectedTransaction(null)}
            onEdit={handleEditTransaction}
          />
        )}
      </Container>
    </>
  );
};

export default Home;
