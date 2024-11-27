import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';

const Dashboard = ({ transactions, onEdit, onDelete }) => {
  return (
    <Box mt={3}>
      <Typography variant="h5">Transactions</Typography>
      {transactions.map(transaction => (
        <Card key={transaction.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{transaction.name}</Typography>
            <Typography variant="body2">Amount: ${transaction.amount}</Typography>
            <Button onClick={() => onEdit(transaction)} variant="contained" color="primary">Edit</Button>
            <Button onClick={() => onDelete(transaction.id)} variant="outlined" color="secondary">Delete</Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Dashboard;
