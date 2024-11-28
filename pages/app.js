import React from 'react';
import { Router, Routes, Route } from 'next/router';
import LandingPage from './LandingPage';
import Dashboard from './dashboard';
import Incomes from './incomes';
import Expenses from './expenses';
import Reports from './reports';
import AccountDetails from './AccountDetails';
import SignUp from './SignUp';
import Login from './Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/incomes" element={<Incomes />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/account-details" element={<AccountDetails />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
