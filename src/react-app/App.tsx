// src/App.tsx
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [mode, setMode] = useState<"light" | "dark">(
    (localStorage.getItem("mode") as "light" | "dark") || "dark"
  );

  useEffect(() => {
    document.documentElement.className = mode;
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <div className="app">
      <button
        className="mode-toggle"
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      >
        {mode === "dark" ? "☀️" : "🌙"}
      </button>

      <h1>Project7</h1>
      <p>Welcome to your study helper</p>
    </div>
  );
}

export default App;
