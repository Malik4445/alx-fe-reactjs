import React, { useState } from 'react';

const RegistrationForm = () => {
  // 1. State Management for each field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // 2. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default browser form submission

    // Basic Validation Check
    if (!username || !email || !password) {
      setError('All fields are mandatory!');
      setSuccess('');
      return; // Stop execution if validation fails
    }

    setError('');
    
    // In a real application, you would send this data to the mock API endpoint
    const formData = { username, email, password };
    console.log('Controlled Form Data:', formData);
    
    setSuccess('Registration successful (Controlled Component)!');

    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="form-container">
      <h2>Controlled Component Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            // Controlled component: value is set by state
            value={username}
            // Controlled component: onChange updates the state
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Register</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default RegistrationForm;