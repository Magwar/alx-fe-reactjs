import { useState } from 'react';
import axios from 'axios';
import { searchUsers } from "../services/githubService";


const BASE_URL = 'https://api.github.com/search/users';
const TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

function fetchUserData() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!keyword.trim()) return;

  setLoading(true);
  setError("");
  setResults([]);

  try {
    const data = await searchUsers({ keyword, location, minRepos });
    setResults(data);
  } catch (err) {
    console.error(err);
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Advanced GitHub User Search</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />

        <input
          type="text"
          placeholder="Location (e.g. Kenya)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />

        <input
          type="number"
          placeholder="Minimum public repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 border p-4 rounded shadow"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <p className="text-gray-700">
                {user.location || "Location not available"}
              </p>
              <p className="text-gray-700">Public Repos: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-500 underline"
                rel="noreferrer"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default fetchUserData;