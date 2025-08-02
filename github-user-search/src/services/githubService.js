import github from "./github";

export async function fetchUserData(username) {
  try {
    const response = await github.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
}