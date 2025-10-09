// src/pages/Profile.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { logout } = useAuth();
  
  return (
    <div style={{ border: '2px solid #333', padding: '20px' }}>
      <h2>User Profile (Protected Area)</h2>
      
      {/* Nested Route Navigation */}
      <nav style={{ marginBottom: '15px' }}>
        <Link to="/profile/details" style={{ marginRight: '15px' }}>Details</Link>
        <Link to="/profile/settings">Settings</Link>
      </nav>
      
      {/* The Outlet renders the nested route component (Details or Settings) */}
      <Outlet /> 

      <button onClick={logout} style={{ marginTop: '20px' }}>Log Out</button>
    </div>
  );
};

export default Profile;