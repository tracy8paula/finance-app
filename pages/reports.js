import React, { useState } from 'react';
import { Container, Typography, Paper, Box, Button } from '@mui/material';
import Navbar from '@/components/navbar';
import TransactionList from '@/components/transactionList'; 
import { getTransactions } from '@/api/financeApi'; 

const Reports = () => {
  const [transactions, setTransactions] = useState([]);
  const [showTransactions, setShowTransactions] = useState(false);

  // Fetch transactions when button is clicked
  const handleRequestList = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
      setShowTransactions(true); // Show the transaction list
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
      }}
    >
      <Navbar />
      <Typography variant="h4" align="center" gutterBottom>
        Financial Reports
      </Typography>
      <Box>
        <Paper sx={{ padding: '1rem', backgroundColor: '#003366', marginBottom: '1rem' }}>
          <Typography variant="body1">
            Here you can view financial reports with graphs and periodic charts.
          </Typography>
        </Paper>
      </Box>

      {/* Request List Button */}
      <Box display="flex" justifyContent="center" mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRequestList}
          sx={{
            backgroundColor: '#003366',
            color: '#f5f5dc',
            '&:hover': { backgroundColor: '#005092' },
          }}
        >
          Request List
        </Button>
      </Box>

      {/* Display Transaction List */}
      {showTransactions && (
        <Box>
          <TransactionList transactions={transactions} />
        </Box>
      )}
    </Container>
  );
};

export default Reports;
