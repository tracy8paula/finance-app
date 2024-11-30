import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTransaction } from '../api/financeApi';

const TransactionForm = () => {
  const [form, setForm] = useState({ description: '', amount: '', type: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTransaction(form); // Call the API
    alert('Transaction added!');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, maxWidth: 400, mx: 'auto' }}>
      <TextField
        label="Description"
        name="description"
        value={form.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Amount"
        name="amount"
        value={form.amount}
        onChange={handleChange}
        type="number"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Transaction
      </Button>
    </Box>
  );
};

export default TransactionForm;
