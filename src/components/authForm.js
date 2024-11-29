import React from 'react';

const AuthForm = ({ form, handleChange, handleSubmit, title, buttonText }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default AuthForm;
