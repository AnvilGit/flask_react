import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserListPage from "./pages/UserList";

// The main React app component. It chooses which page to display and renders the shared UI chrome.
function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ marginBottom: "24px" }}>
        <h1>Flask React Demo</h1>
        <p>A simple frontend connected to a Flask backend.</p>
      </header>

      <Navbar activePage={currentPage} onNavigate={setCurrentPage} />

      <main>
        {currentPage === "home" ? <Home /> : <UserListPage />}
      </main>
    </div>
  );
}

export default App;
