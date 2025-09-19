// This line reads the variable from your .env file
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

// You can now use the GITHUB_TOKEN constant in your API calls
// For example, in an Axios request:
// axios.get('https://api.github.com/users/octocat', {
//   headers: {
//     'Authorization': `token ${GITHUB_TOKEN}`
//   }
// });