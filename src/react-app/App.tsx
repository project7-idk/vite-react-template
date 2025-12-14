import { useState, useEffect } from "react";
import FloatingDock from "./Components/FloatingDock";
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

      <FloatingDock
        onHome={() => console.log("Go home")}
        onAgenda={() => console.log("Go to agenda")}
        onUpload={() => console.log("Upload")}
        onChat={() => console.log("Chat")}
        onSettings={() => console.log("Settings")}
        username="Ben"
        avatarUrl="https://placehold.co/40x40"
      />
    </div>
  );
}

export default App;
