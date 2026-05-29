import { useEffect, useState } from "react";
import { getMessage } from "../services/api";

function Home() {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMessage()
      .then((data) => {
        setMessage(data);
      })
      .catch(() => {
        setError("Unable to reach backend.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <h2>Welcome to the Flask React Demo</h2>
      <p>This demo app shows how the React frontend can load data from a Flask backend.</p>

      {loading && <p>Loading backend status...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {message && (
        <div style={{ marginTop: "20px", padding: "16px", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h3>Backend status</h3>
          <p><strong>Message:</strong> {message.message}</p>
          <p><strong>App name:</strong> {message.appName}</p>
          <p><strong>Version:</strong> {message.version}</p>
          <p><strong>Status:</strong> {message.status}</p>
        </div>
      )}

      <div style={{ marginTop: "24px" }}>
        <h3>What you can do</h3>
        <ul>
          <li>View live user data fetched from the backend.</li>
          <li>See a small API-driven page layout with React.</li>
          <li>Extend the project with authentication and new endpoints.</li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
