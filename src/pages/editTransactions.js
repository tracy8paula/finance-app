import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, TextField, Button } from '@mui/material';

const EditTransaction = ({ transaction, onClose, onEdit }) => {
  const [name, setName] = useState(transaction.name);
  const [amount, setAmount] = useState(transaction.amount);

  const handleSubmit = () => {
    const updatedTransaction = { ...transaction, name, amount };
    onEdit(updatedTransaction);
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
        <Button onClick={handleSubmit} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTransaction;
