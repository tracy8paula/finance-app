import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#003366' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap', // Allows items to wrap on small screens
          gap: '10px', // Adds spacing between items
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '10px', // Spacing between buttons
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Button
            sx={{
              color: '#f5f5dc', // Brighter beige text color
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#006699', // Slightly lighter blue for hover
                color: '#ffffff', // White text on hover
                borderRadius: '5px',
              },
            }}
          >
            <Link href="/">Home</Link>
          </Button>
          <Button
            sx={{
              color: '#f5f5dc',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#006699',
                color: '#ffffff',
                borderRadius: '5px',
              },
            }}
          >
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button
            sx={{
              color: '#f5f5dc',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#006699',
                color: '#ffffff',
                borderRadius: '5px',
              },
            }}
          >
            <Link href="/incomes">Incomes</Link>
          </Button>
          <Button
            sx={{
              color: '#f5f5dc',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#006699',
                color: '#ffffff',
                borderRadius: '5px',
              },
            }}
          >
            <Link href="/expenses">Expenses</Link>
          </Button>
          <Button
            sx={{
              color: '#f5f5dc',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#006699',
                color: '#ffffff',
                borderRadius: '5px',
              },
            }}
          >
            <Link href="/reports">Reports</Link>
          </Button>
          <Button
            sx={{
              color: '#f5f5dc',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#006699',
                color: '#ffffff',
                borderRadius: '5px',
              },
            }}
          >
            <Link href="/account-details">Account Details</Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
