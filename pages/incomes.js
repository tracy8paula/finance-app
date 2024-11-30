import React, { useState, useEffect } from 'react';
import { Button, TextField, List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import { fetchData, postData } from '../src/api/financeApi';

const Incomes = () => {
  const [income, setIncome] = useState('');
  const [incomes, setIncomes] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);

  // Fetch all incomes and calculate the total balance
  const loadIncomes = async () => {
    try {
      const response = await fetchData('incomes');
      setIncomes(response);
      const balance = response.reduce((sum, inc) => sum + parseFloat(inc.amount), 0);
      setTotalBalance(balance);
    } catch (error) {
      console.error('Error fetching incomes:', error);
    }
  };

  useEffect(() => {
    loadIncomes();
  }, []);

  // Add a new income
  const addIncome = async () => {
    try {
      const response = await postData('incomes', { amount: parseFloat(income) });
      if (response) {
        setIncomes([...incomes, response]);
        setTotalBalance(totalBalance + parseFloat(income));
        setIncome('');
      }
    } catch (error) {
      console.error('Error adding income:', error);
    }
  };

  // Delete an income
  const deleteIncome = async (incomeId) => {
    try {
      await fetchData(`incomes/${incomeId}`, { method: 'DELETE' });
      const updatedIncomes = incomes.filter((inc) => inc.id !== incomeId);
      setIncomes(updatedIncomes);
      const newBalance = updatedIncomes.reduce((sum, inc) => sum + parseFloat(inc.amount), 0);
      setTotalBalance(newBalance);
    } catch (error) {
      console.error('Error deleting income:', error);
    }
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Incomes
      </Typography>

      {/* Total Balance Display */}
      <Box
        sx={{
          backgroundColor: '#01365d',
          color: '#f5f5dc',
          padding: '1rem',
          textAlign: 'center',
          borderRadius: '8px',
          marginBottom: '2rem',
        }}
      >
        <Typography variant="h6">Total Balance: ${totalBalance.toFixed(2)}</Typography>
      </Box>

      {/* Input and Buttons */}
      <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <TextField
          label="Income Amount"
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={addIncome}>
          Add Income
        </Button>
      </Box>

      {/* Income List */}
      <List>
        {incomes.map((inc) => (
          <ListItem
            key={inc.id}
            sx={{
              backgroundColor: '#01365d',
              color: '#f5f5dc',
              borderRadius: '8px',
              marginBottom: '0.5rem',
              padding: '1rem',
            }}
          >
            <ListItemText
              primary={`Income: ${inc.amount}`}
              secondary={`ID: ${inc.id}`}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => deleteIncome(inc.id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Incomes;
