import { useRouter } from 'next/router';
import { Button, Container, Typography, Box } from '@mui/material';

export default function LandingPage() {
  const router = useRouter(); 

  return (
    <Container
      sx={{
        textAlign: 'center',
        backgroundColor: '#001f3f',
        color: '#f5f5dc',
        padding: '2rem',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to the Personal Finance App
      </Typography>
      <Typography variant="h5" paragraph>
        Manage your finances with ease, track expenses, incomes, and generate insightful reports.
      </Typography>
      <Box sx={{ margin: '2rem' }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#001f3f', color: '#f5f5dc', margin: '1rem' }}
          onClick={() => router.push('/sign-up')} // Correct usage
        >
          Get Started
        </Button>

        <Button
          variant="contained"
          sx={{ backgroundColor: '#001f3f', color: '#f5f5dc', margin: '1rem' }}
          onClick={() => router.push('/login')} 
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}
