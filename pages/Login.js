import React, { useState } from 'react';
import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import AuthForm from '../src/components/authForm'; 
import { loginUser } from '@/api/financeApi';

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
      const response = await fetch('/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
         
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        <loginUser/>
        console.log('Login successful:', data);
        router.push(dashboard.js);
        
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An unexpected error occurred. Please try again later.');
    }
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
      {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>} {/* Display error */}
      <AuthForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        title="Log In"
        buttonText="Log In"
      />
    </Container>
  );
};

export default Login;
