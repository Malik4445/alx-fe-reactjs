import axios from 'axios';

const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

// Advanced search for users using GitHub Search API
export const fetchAdvancedUsers = async (username, location, minRepos) => {
  let query = '';
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;
  query = query.trim();
  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`, {
    headers: {
      Authorization: GITHUB_TOKEN ? `token ${GITHUB_TOKEN}` : undefined
    }
  });
  return response.data;
};
