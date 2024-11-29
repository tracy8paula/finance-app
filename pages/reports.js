import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Container, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-chartjs-2'), { ssr: false });


Chart.register(ArcElement, Tooltip, Legend);

const Reports = () => {
  const data = {
    labels: ['Incomes', 'Expenses'],
    datasets: [
      {
        data: [500, 300],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
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
        Weekly Financial Report
      </Typography>
      <Pie data={data} />
    </Container>
  );
};

export default Reports;
