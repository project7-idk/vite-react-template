import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-tab">Home</div>
        <div className="nav-tab">Shorts</div>

        {/* Search Pill */}
        <div
          className={`search-pill ${searchFocused ? "focused" : ""}`}
        >
          <div className="separator-line"></div>
          <input
            type="text"
            placeholder="Search"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          <div className="search-icon">🔍</div>
        </div>
      </nav>
    </div>
  );
};

export default App;
