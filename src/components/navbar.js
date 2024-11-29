import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#003366' }}>
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        <Button color="inherit" component={Link} to="/incomes">Incomes</Button>
        <Button color="inherit" component={Link} to="/expenses">Expenses</Button>
        <Button color="inherit" component={Link} to="/reports">Reports</Button>
        <Button color="inherit" component={Link} to="/account-details">Account Details</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
