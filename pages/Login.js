import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useRouter } from 'next/router';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Login form submitted:', form);
    router('/dashboard');
  };

  return (
    <Container
      sx={{
        backgroundColor: '#001f3f',
        color: '#f5f5dc',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Log In
      </Typography>
      <Box sx={{ maxWidth: 400, margin: 'auto' }}>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ marginTop: '1rem', backgroundColor: '#003366', color: '#f5f5dc' }}
          onClick={handleSubmit}
        >
          Log In
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
