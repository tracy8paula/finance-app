import { useRouter } from 'next/router';
import { Grid2, Paper, Typography, Box } from '@mui/material';

const sections = [
  { name: 'Incomes', path: '/incomes' },
  { name: 'Expenses', path: '/expenses' },
  { name: 'Reports', path: '/reports' },
  { name: 'AccountDetails', path: '/account-details' },
];

export default function Dashboard() {
  const router = useRouter();

  const handleNavigation = (path) => {
    if (path) {
      router.push(path);
    } else {
      console.error('Invalid path:', path); 
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
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid2 container spacing={3} justifyContent="center">
          {sections.map((section, index) => (
            <Grid2 item key={index}>
              <Paper
                elevation={3}
                sx={{
                  width: '150px',
                  height: '150px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#01365d',
                  color: '#f5f5dc',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: '#02527a',
                  },
                }}
                onClick={() => handleNavigation(section.path)}
              >
                <Typography variant="h6" align="center">
                  {section.name}
                </Typography>
              </Paper>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
}
