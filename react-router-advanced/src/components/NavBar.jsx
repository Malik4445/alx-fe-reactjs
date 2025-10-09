// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NavBar = () => {
  const { isAuthenticated, user } = useAuth();
  
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/blog/42" style={{ marginRight: '15px' }}>Dynamic Post (42)</Link>
      
      {isAuthenticated ? (
        <Link to="/profile" style={{ marginRight: '15px' }}>{user.name}'s Profile</Link>
      ) : (
        <Link to="/login" style={{ marginRight: '15px' }}>Login</Link>
      )}
    </nav>
  );
};

export default NavBar;