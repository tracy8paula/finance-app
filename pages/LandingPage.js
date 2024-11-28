import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useRouter } from 'next/router';

const LandingPage = () => {
  const router = useRouter();

  return (
    <Container
      sx={{
        textAlign: 'center',
        backgroundColor: '#001f3f',
        color: '#f5f5dc',
        padding: '2rem',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to the Personal Finance App
      </Typography>
      <Typography variant="h5" paragraph>
        Manage your finances with ease, track expenses, incomes, and generate
        insightful reports.
      </Typography>
      <Box sx={{ margin: '2rem' }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#001f3f', color: '#f5f5dc', margin: '1rem' }}
          onClick={() => router('/sign-up')}
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          sx={{ color: '#001f3f', borderColor: '#001f3f', margin: '1rem' }}
          onClick={() => navigate('/login')}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
