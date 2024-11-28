import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, TextField, Button } from '@mui/material';

const AddTransaction = ({ onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    const newTransaction = { name, amount: parseFloat(amount) };
    onAdd(newTransaction);
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogContent>
        <TextField
          label="Transaction Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Amount"
          type="number"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary">Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTransaction;