import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import Navbar from '@/components/navbar';
const AccountDetails = () => {
  return (
    <Container
      sx={{
        backgroundColor: '#001f3f',
        color: '#f5f5dc',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <Navbar></Navbar>
      <Typography variant="h4" align="center" gutterBottom>
        Account Details
      </Typography>
      <Box>
        <Paper sx={{ padding: '1rem', backgroundColor: '#003366' }}>
          <Typography variant="body1">Your account details will be displayed here.</Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default AccountDetails;
