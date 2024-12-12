import React, { useState } from 'react';
import { Container, Alert, Box, TextField, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import MyImage from './login1.jpg'

const SignUp = () => {
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if passwords match
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form), // Pass form data to API
      });

      if (response.ok) {
        console.log('Sign-up successful:', form);
        router.push('/login'); // Redirect to login page
      } else {
        const error = await response.json();
        setError(error.message || 'Sign-up failed.');
      }
    } catch (error) {
      console.error('Sign-up error:', error);
      setError('An unexpected error occurred. Please try again later.');
    }
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
          Create Your Account
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ color: '#ccc' }}
        >
          Sign up to manage your finances effectively.
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
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
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
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
