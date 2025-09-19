import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);
    try {
  const data = await fetchUserData(username, location, minRepos);
      setUsers(data.items);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4">
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="GitHub username"
          className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="number"
          min="0"
          value={minRepos}
          onChange={e => setMinRepos(e.target.value)}
          placeholder="Minimum repositories (optional)"
          className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Search</button>
      </form>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid gap-4">
        {users && users.length > 0 && users.map(user => (
          <div key={user.id} className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700 p-4 rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Profile</a>
            </div>
          </div>
        ))}
      </div>
      {users && users.length === 0 && !loading && !error && (
        <p className="text-center text-gray-500">No users found.</p>
      )}
    </div>
  );
};

export default Search;
