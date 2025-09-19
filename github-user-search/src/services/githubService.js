import axios from 'axios';

const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: GITHUB_TOKEN ? `token ${GITHUB_TOKEN}` : undefined
    }
  });
  return response.data;
};
