import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Container, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-chartjs-2'), { ssr: false });

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const Reports = () => {
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/reports');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Update state with the fetched data
        setChartData({
          labels: data.labels || ['Category 1', 'Category 2', 'Category 3'],
          datasets: [
            {
              label: 'Expenses',
              data: data.values || [300, 500, 200], // Default mock values
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        });
      } catch (err) {
        console.error('Error fetching reports:', err);
        setError('Failed to load data. Please try again later.');
        // Fallback mock data
        setChartData({
          labels: ['Mock Category 1', 'Mock Category 2', 'Mock Category 3'],
          datasets: [
            {
              label: 'Expenses',
              data: [100, 200, 300],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        });
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <Container
        sx={{
          backgroundColor: '#001f3f',
          color: '#f5f5dc',
          minHeight: '100vh',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" color="error">
          {error}
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
      <Typography variant="h4" align="center" gutterBottom>
        Weekly Financial Report
      </Typography>
      {chartData && <Pie data={chartData} />}
    </Container>
  );
};

export default Reports;
