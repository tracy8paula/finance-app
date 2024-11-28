import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, Box, Button } from '@mui/material';
import AddTransaction from '../src/components/addTransaction';
import EditTransaction from '../src/components/editTransactions';
import TransactionForm from '../src/components/transactionForm';
import TransactionList from '../src/components/transactionList';
import { getTransactions, createTransaction } from '../src/api/financeApi';
import Navbar from '@/components/navbar';

const Expenses = () => {
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
        `http://localhost:5000/transactions/${updatedTransaction.id}`,
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
        `http://localhost:5000/transactions/${id}`,
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
    <Container
      sx={{
        backgroundColor: '#001f3f',
        color: '#f5f5dc',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <Navbar></Navbar>
      <Typography variant="h4" align="center" gutterBottom>
        Expenses
      </Typography>
      <Box>
        <Paper sx={{ padding: '1rem', backgroundColor: '#003366', marginBottom: '1rem' }}>
          <Typography variant="body1">Detailed expenses data goes here.</Typography>
        </Paper>
      </Box>

      {/* Transaction Form */}
      <TransactionForm />

      {/* Transaction List */}
      <TransactionList transactions={transactions} onEdit={setSelectedTransaction} onDelete={handleDeleteTransaction} />

      <Box display="flex" justifyContent="center" mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsAddTransactionOpen(true)}
        >
          Add Transaction
        </Button>
      </Box>

      {/* Add Transaction Modal */}
      {isAddTransactionOpen && (
        <AddTransaction
          onClose={() => setIsAddTransactionOpen(false)}
          onAdd={handleAddTransaction}
        />
      )}

      {/* Edit Transaction Modal */}
      {selectedTransaction && (
        <EditTransaction
          transaction={selectedTransaction}
          onClose={() => setSelectedTransaction(null)}
          onEdit={handleEditTransaction}
        />
      )}
    </Container>
  );
};

export default Expenses;
