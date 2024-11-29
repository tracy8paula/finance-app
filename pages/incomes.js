import React from 'react';
import { Button, TextField, List, ListItem, ListItemText } from '@mui/material';

const Incomes = () => {
  const [income, setIncome] = useState('');
  const [incomes, setIncomes] = useState([]);

  const addIncome = async () => {
    const response = await fetch('/incomes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: income }),
    });
    const data = await response.json();
    if (data.success) {
      setIncomes([...incomes, data.income]);
      setIncome('');
    }
  };

  const deleteZeroIncomes = async () => {
    await fetch('/incomes/:incomeId', { method: 'DELETE' });
    setIncomes(incomes.filter(inc => inc.amount > 0));
  };

  return (
    <div>
      <h1>Incomes</h1>
      <TextField
        label="Income Amount"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <Button onClick={addIncome}>Add Income</Button>
      <Button onClick={deleteZeroIncomes}>Delete Zero Incomes</Button>
      <List>
        {incomes.map((inc, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={`Amount: ${inc.amount}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Incomes;
