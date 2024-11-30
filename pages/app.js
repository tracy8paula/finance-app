import React from 'react';
import { Router, Routes, Route } from 'next/router';
import Navbar from '../src/components/navbar';
import LandingPage from '../pages/index';
import Dashboard from '../pages/dashboard';
import Incomes from '../pages/incomes';
import Expenses from '../pages/expenses';
import Reports from '../pages/reports';
import AccountDetails from './account-details';
import Login from '../pages/login';
import SignUp from '../pages/sign-up';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/incomes' element={<Incomes />} />
        <Route path='/expenses' element={<Expenses />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/account-details' element={<AccountDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
