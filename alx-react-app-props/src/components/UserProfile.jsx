// src/components/UserProfile.jsx

import { useContext } from 'react';
import { UserContext } from '../UserContext';

function UserProfile() {
  const userData = useContext(UserContext);
  
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#007bff', fontSize: '24px' }}>{userData.name}</h2>
      <p style={{ color: '#555' }}>Age: <span style={{ fontWeight: 'bold' }}>{userData.age}</span></p>
      <p style={{ fontStyle: 'italic' }}>Bio: {userData.bio}</p>
    </div>
  );
}

export default UserProfile;