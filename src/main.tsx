import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

function Main() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <React.StrictMode>
      <div
        className={`min-h-screen ${isDarkMode ? "bg-slate-950" : "bg-white"}`}
      >
        <App isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
