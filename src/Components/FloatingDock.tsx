// src/components/FloatingDock.tsx
import React from "react";
import "./FloatingDock.css";

interface FloatingDockProps {
  onHome?: () => void;
  onAgenda?: () => void;
  onUpload?: () => void;
  onChat?: () => void;
  onSettings?: () => void;
  username?: string;
  avatarUrl?: string;
}

const FloatingDock: React.FC<FloatingDockProps> = ({
  onHome,
  onAgenda,
  onUpload,
  onChat,
  onSettings,
  username,
  avatarUrl,
}) => {
  return (
    <div className="dock-container">
      <div className="floating-dock">
        <button className="dock-btn" title="Home" onClick={onHome}>
          🏠
        </button>

        <button className="dock-btn" title="Agenda" onClick={onAgenda}>
          📅
        </button>

        <button className="dock-btn upload" title="Upload" onClick={onUpload}>
          +
        </button>

        <button className="dock-btn" title="Chat" onClick={onChat}>
          💬
        </button>

        {username && avatarUrl && (
          <button className="dock-btn profile-btn" title={username}>
            <img src={avatarUrl} alt="Avatar" />
          </button>
        )}

        <button className="dock-btn" title="Settings" onClick={onSettings}>
          ⚙️
        </button>
      </div>
    </div>
  );
};

export default FloatingDock;
