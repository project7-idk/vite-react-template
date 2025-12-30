import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fff", minHeight: "100vh" }}>
      
      {/* Header */}
      <header style={{ display: "flex", alignItems: "center", padding: "1rem 2rem", backgroundColor: "#FF0000", color: "#fff" }}>
        <div style={{ fontWeight: "bold", fontSize: "1.5rem", display: "flex", alignItems: "center" }}>
          {/* Play Button Icon */}
          <div style={{
            width: "24px",
            height: "24px",
            backgroundColor: "#fff",
            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
            marginRight: "0.5rem"
          }}></div>
          SocialHub
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav style={{ display: "flex", justifyContent: "center", gap: "2rem", margin: "1rem 0", fontWeight: "bold", color: "#FF0000" }}>
        <div>Home</div>
        <div>Trending</div>
        <div>Subscriptions</div>
      </nav>

      {/* Hero / Feed Preview */}
      <main style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem", padding: "0 2rem" }}>
        {[1,2,3,4,5,6].map((item) => (
          <div key={item} style={{ width: "200px", height: "120px", backgroundColor: "#eee", borderRadius: "8px", position: "relative" }}>
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "40px",
              height: "40px",
              backgroundColor: "#FF0000",
              clipPath: "polygon(0 0, 100% 50%, 0 100%)"
            }}></div>
          </div>
        ))}
      </main>

      {/* CTA Button */}
      <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
        <button style={{
          backgroundColor: "#FF0000",
          color: "#fff",
          border: "none",
          padding: "0.75rem 1.5rem",
          borderRadius: "4px",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Explore Feed
        </button>
      </div>
    </div>
  );
};

export default App;
