import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Create the root React DOM node and render the App component inside it.
// React.StrictMode helps catch common problems during development.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
