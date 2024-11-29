import React, { useState } from 'react';
import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import AuthForm from '../src/components/authForm';

const SignUp = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const router = useRouter();

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/signup', {
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
        console.error('Sign-up failed:', error.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Sign-up error:', error);
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
      <AuthForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        title="Sign Up"
        buttonText="Sign Up"
      />
    </Container>
  );
};

export default SignUp;
