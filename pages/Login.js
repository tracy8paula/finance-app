import React, { useState } from 'react';
import { Container, Alert, Box, TextField, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import AuthForm from '../src/components/authForm'; 
import { loginUser } from '../src/api/financeApi';
import MyImage from './login2.jpg'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState(''); // For error messages
  const router = useRouter();

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser(form); 
      if (response?.message === 'User logged in') {
        console.log('Login successful:', response);
      } else {
        setError(`Login failed: ${response?.message || 'Unknown error'}`);
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An unexpected error occurred. Please try again later.');
    }
    router.push('/dashboard'); 
  };

  return (
    <Container
      sx={{
        backgroundImage: `url(${MyImage.src})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#f5f5dc',
        minHeight: '100vh',
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          sx={{ color: '#f5f5dc', fontWeight: 'bold' }}
        >
          Welcome Back
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ color: '#ccc' }}
        >
          Please log in to continue.
        </Typography>
        {error && (
          <Alert severity="error" sx={{ marginBottom: '1rem' }}>
            {error}
          </Alert>
        )}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <TextField
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            InputProps={{
              style: {
                backgroundColor: '#fff',
                borderRadius: '4px',
              },
            }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            InputProps={{
              style: {
                backgroundColor: '#fff',
                borderRadius: '4px',
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{
              backgroundColor: '#1976d2',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
