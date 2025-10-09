// src/pages/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    // Redirect to the profile after login
    navigate('/profile'); 
  };

  return (
    <div>
      <h2>Login Page</h2>
      {isAuthenticated ? (
        <p>You are already logged in!</p>
      ) : (
        <button onClick={handleLogin}>Log In</button>
      )}
    </div>
  );
};

export default Login;