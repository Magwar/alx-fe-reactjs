import axios from "axios";

const BASE_URL = "https://api.github.com";
const TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function searchUsers({ keyword, location, minRepos }) {
  let query = `${keyword.trim()} in:login`;
  if (location) query += ` location:${location.trim()}`;
  if (minRepos) query += ` repos:>=${minRepos.trim()}`;

  const searchUrl = `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`;

  try {
    const searchResponse = await axios.get(searchUrl, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    const users = searchResponse.data.items || [];

    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        const userResponse = await axios.get(
          `${BASE_URL}/users/${user.login}`,
          {
            headers: { Authorization: `Bearer ${TOKEN}` },
          }
        );
        return userResponse.data;
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error("Search error:", error);
    throw error;
  }
}