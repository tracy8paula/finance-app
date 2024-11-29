import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#003366' }}>
      <Toolbar>
        <Button color="inherit">
          <Link href="/">Home</Link>
        </Button>
        <Button color="inherit">
          <Link href="/dashboard">Dashboard</Link>
        </Button>
        <Button color="inherit">
          <Link href="/incomes">Incomes</Link>
        </Button>
        <Button color="inherit">
          <Link href="/expenses">Expenses</Link>
        </Button>
        <Button color="inherit">
          <Link href="/reports">Reports</Link>
        </Button>
        <Button color="inherit">
          <Link href="/account-details">Account Details</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
