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

    {/* Floating Dock */}
    <div className="floating-dock">
      <button className="dock-btn" title="Home">🏠</button>
      <button className="dock-btn" title="Agenda">📅</button>
      <button className="dock-btn upload" title="Upload">＋</button>
      <button className="dock-btn" title="Chat">💬</button>
      <button className="dock-btn" title="Settings">⚙️</button>
    </div>
  </div>
);

export default app;
