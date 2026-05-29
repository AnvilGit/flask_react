// Base URL for the Flask backend API.
const API_URL = "http://localhost:5000";

// Load the list of users from the backend.
export async function getUsers() {
  const response = await fetch(`${API_URL}/api/users`);
  if (!response.ok) {
    throw new Error("Failed to load users");
  }

  const data = await response.json();
  return data.users || [];
}

// Load a backend status message to confirm the API is reachable.
export async function getMessage() {
  const response = await fetch(`${API_URL}/api/message`);
  if (!response.ok) {
    throw new Error("Failed to load message");
  }
  return response.json();
}

// Load one user by ID from the backend.
export async function getUserById(id) {
  const response = await fetch(`${API_URL}/api/users/${id}`);
  if (!response.ok) {
    throw new Error("Failed to load user");
  }
  return response.json();
}
