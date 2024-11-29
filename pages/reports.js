import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Pie } from 'react-chartjs-2';

const Reports = () => {
  const [data, setData] = useState({ incomes: 0, expenses: 0 });

  const generateReport = async () => {
    const response = await fetch('/reports/:userId');
    const reportData = await response.json();
    setData(reportData);
  };

  const chartData = {
    labels: ['Incomes', 'Expenses'],
    datasets: [
      {
        data: [data.incomes, data.expenses],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div>
      <h1>Financial Reports</h1>
      <Button onClick={generateReport}>Generate Financial Report</Button>
      <Pie data={chartData} />
    </div>
  );
};

export default Reports;
