import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

// UserList is a reusable component that fetches user data and displays it as cards.
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch(() => {
        setError("Could not load users from the backend.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!users.length) {
    return <p>No users are available at the moment.</p>;
  }

  return (
    <div style={{ display: "grid", gap: "16px", marginTop: "16px" }}>
      {users.map((user) => (
        <article key={user.id} style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "16px" }}>
          <h3>{user.name}</h3>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Department:</strong> {user.department}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Status:</strong> {user.status}</p>
        </article>
      ))}
    </div>
  );
}

export default UserList;
