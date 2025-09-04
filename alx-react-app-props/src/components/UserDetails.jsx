// src/UserDetails.jsx

import { useContext } from 'react';
import { UserContext } from '../UserContext';

function UserDetails() {
  // Use useContext to get the data from the provider
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;