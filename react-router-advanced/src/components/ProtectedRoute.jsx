// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom'; // <-- Must import Navigate
import { useAuth } from '../context/AuthContext'; // <-- Must import useAuth

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // <-- Must check authentication
  
  // If not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // <-- Must use Navigate for redirect
  }
  
  return children;
};

export default ProtectedRoute;