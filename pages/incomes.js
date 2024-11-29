import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import Navbar from '../src/components/navbar';

const Incomes = () => {
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
        Incomes
      </Typography>
      <Box>
        <Paper sx={{ padding: '1rem', backgroundColor: '#003366' }}>
          <Typography variant="body1">Detailed incomes data goes here.</Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Incomes;
