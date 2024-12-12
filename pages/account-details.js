import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import  Navbar from '../src/components/navbar';

// const getUserDetails = () => {
//   const user = {
//     username: 'me',
//     email: 'me@example.com',
//     password: 'hashedPassword123', 
//   };
//   return user;
// };

const AccountDetails = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const user = setUserDetails();

    if (user) {
      setUserDetails(user);
    } else {
      alert('You are not logged in!');
    }
  }, []);

  if (!userDetails) {
    return (
      <Container
        sx={{
          backgroundColor: '#001f3f',
          color: '#f5f5dc',
          minHeight: '100vh',
          padding: '2rem',
        }}
      >
        <Navbar />
        <Typography variant="h4" align="center" gutterBottom>
          Loading or Failed to Load Account Details...
        </Typography>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        backgroundColor: '#001f3f',
        color: '#f5f5dc',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <Navbar />
      <Typography variant="h4" align="center" gutterBottom>
        Account Details
      </Typography>
      <Box>
        <Paper sx={{ padding: '1rem', backgroundColor: '#003366' }}>
          <Typography variant="body1">
            <strong>Username:</strong> {userDetails.username}
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> {userDetails.email}
          </Typography>
          <Typography variant="body1">
            <strong>Password (hashed):</strong> {userDetails.password}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default AccountDetails;
