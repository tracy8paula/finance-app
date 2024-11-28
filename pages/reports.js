import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const Reports = () => {
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
        Financial Reports
      </Typography>
      <Box>
        <Paper sx={{ padding: '1rem', backgroundColor: '#003366' }}>
          <Typography variant="body1">
            Here you can view financial reports with graphs and periodic charts.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Reports;
