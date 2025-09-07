import { useContext } from 'react';
import { UserContext } from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);
  
  if (!userData) {
    // If userData is undefined, return null or a loading message
    return <p>User data not found. Please ensure the provider is set up correctly.</p>;
  }

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;