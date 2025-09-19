const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

// You can now use the GITHUB_TOKEN constant in your API calls
// For example, in an Axios request:
// axios.get('https://api.github.com/users/octocat', {
//   headers: {
//     'Authorization': `token ${GITHUB_TOKEN}`
//   }
// });
import axios from 'axios';

// This line reads the variable from your .env file
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

// Example function to fetch a GitHub user
export const fetchGitHubUser = async (username) => {
	const response = await axios.get(`https://api.github.com/users/${username}`, {
		headers: {
			Authorization: `token ${GITHUB_TOKEN}`
		}
	});
	return response.data;
};