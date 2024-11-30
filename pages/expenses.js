import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, Box, Button } from '@mui/material';
import TransactionForm from '../src/components/transactionForm';
import { getTransactions, createTransaction } from '../src/api/financeApi';
import  Navbar from '../src/components/navbar';

const Expenses = () => {
  const [transactions, setTransactions] = useState([]);
  const [isListRequested, setIsListRequested] = useState(false);

  // Add new transaction
  const handleAddTransaction = async (transaction) => {
    try {
      const newTransaction = await createTransaction(transaction);
      console.log('Transaction added successfully:', newTransaction);
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  // Fetch transaction list
  const handleRequestList = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
      setIsListRequested(true);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  return (
    <Container
      sx={{
        backgroundColor: '#001f3f',
        color: '#f5f5dc',
        minHeight: '100vh',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Navbar
        sx={{
          '& a': {
            color: '#f5f5dc',
            textDecoration: 'none',
          },
          '& a:hover': {
            backgroundColor: '#003366',
            color: '#ffffff',
            borderRadius: '5px',
            padding: '5px',
          },
        }}
      />
      <Typography variant="h4" align="center" gutterBottom>
        Expenses
      </Typography>

      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
          padding: '1rem',
          margin: '1rem auto',
        }}
      >
        <Paper
          sx={{
            padding: '1rem',
            backgroundColor: '#003366',
            color: '#f5f5dc',
            marginBottom: '1rem',
          }}
        >
          <Typography variant="body1" align="center">
            Record your expenses by filling out the transaction form below.
          </Typography>
        </Paper>

        {/* Transaction Form */}
        <TransactionForm onSubmit={handleAddTransaction} />

        {/* Request List Button */}
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleRequestList}
          >
            Request List
          </Button>
        </Box>
      </Box>

      {/* Display Transactions if Requested */}
      {isListRequested && (
        <Box
          sx={{
            width: '100%',
            maxWidth: '600px',
            margin: '1rem auto',
            backgroundColor: '#003366',
            padding: '1rem',
            borderRadius: '5px',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Transactions List
          </Typography>
          {transactions.length > 0 ? (
            <ul>
              {transactions.map((transaction) => (
                <li key={transaction.id}>
                  {transaction.description} - ${transaction.amount}
                </li>
              ))}
            </ul>
          ) : (
            <Typography>No transactions found.</Typography>
          )}
        </Box>
      )}
    </Container>
  );
};

export default Expenses;
