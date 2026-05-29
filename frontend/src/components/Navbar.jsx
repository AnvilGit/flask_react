// Navbar renders the top navigation buttons.
function Navbar({ activePage, onNavigate }) {
  return (
    <nav style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
      <button
        style={{ padding: "8px 16px", cursor: "pointer" }}
        type="button"
        onClick={() => onNavigate("home")}
        aria-pressed={activePage === "home"}
      >
        Home
      </button>
      <button
        style={{ padding: "8px 16px", cursor: "pointer" }}
        type="button"
        onClick={() => onNavigate("users")}
        aria-pressed={activePage === "users"}
      >
        User Directory
      </button>
    </nav>
  );
}

export default Navbar;
