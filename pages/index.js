import { useRouter } from 'next/router';
import { Button, Container, Typography, Box } from '@mui/material';

export default function LandingPage() {
  const router = useRouter();

  return (
    <Container
      sx={{
        backgroundColor: '#01365d',
        color: '#f5f5dc',
        minHeight: '100vh',
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 'bold' }}
      >
        Welcome to the Personal Finance App
      </Typography>
      <Typography
        variant="h5"
        paragraph
        sx={{ marginBottom: '2rem' }}
      >
        Manage your finances with ease, track expenses, incomes, and generate insightful reports.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => router.push('/sign-up')}
          sx={{
            backgroundColor: '#1976d2',
            color: '#fff',
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          Get Started
        </Button>

        <Button
          variant="outlined"
          size="large"
          onClick={() => router.push('/login')}
          sx={{
            color: '#f5f5dc',
            borderColor: '#f5f5dc',
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}
