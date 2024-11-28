import Link from 'next/link';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#001f3f' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Finance App
        </Typography>
        <Link href="/" passHref>
          <a style={{ color: '#f5f5dc', marginRight: '1rem' }}>Home</a>
        </Link>
        <Link href="/dashboard" passHref>
          <a style={{ color: '#f5f5dc', marginRight: '1rem' }}>Dashboard</a>
        </Link>
        <Link href="/reports" passHref>
          <a style={{ color: '#f5f5dc' }}>Reports</a>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
