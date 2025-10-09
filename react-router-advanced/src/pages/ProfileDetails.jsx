// src/pages/ProfileDetails.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

const ProfileDetails = () => {
  const { user } = useAuth();
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc' }}>
      <h4>Profile Details (Nested Route)</h4>
      <p>User ID: {user.id}</p>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default ProfileDetails;