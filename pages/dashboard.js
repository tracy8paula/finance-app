import { useRouter } from 'next/router';
import { Grid2, Paper, Typography, Box } from '@mui/material';

const sections = [
  { name: 'Incomes', path: '/incomes' },
  { name: 'Expenses', path: '/expenses' },
  { name: 'Reports', path: '/reports' },
  { name: 'Account Details', path: '/AccountDetails' },
];

export default function Dashboard() {
  const router = useRouter();

  const handleNavigation = (path) => {
    if (path) {
      router.push(path); 
    } else {
      console.error('Invalid path:', path); // Log invalid path for debugging
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#001f3f',
        color: '#f5f5dc',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Dashboard
      </Typography>
      <Grid2 container spacing={4}>
        {sections.map((section) => (
          <Grid2 item xs={12} sm={6} md={3} key={sections.name}>
            <Paper
              onClick={() => handleNavigation(sections.path)} 
              elevation={3}
              sx={{
                padding: '2rem',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: '#001f3f',
                color: '#f5f5dc',
                '&:hover': { backgroundColor: '#003366' },
              }}
            >
              <Typography variant="h6">{sections.name}</Typography>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}
