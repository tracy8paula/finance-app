import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Personal Finance App
        </Typography>
        <Button color="inherit" href="/add-transaction">Add Transaction</Button>
        <Button color="inherit" href="/view-transactions">View Transactions</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
