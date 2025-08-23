import React from "react";
import Nav from "./Nav";

const Header: React.FC = () => (
  <header style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem",
    zIndex: 2,
    position: "relative"
  }}>
    <div style={{
      fontWeight: "bold",
      fontSize: "2.5rem",
      letterSpacing: "2px",
      fontFamily: "'Zen Maru Gothic', 'Comic Sans MS', cursive, sans-serif",
      color: "#00ffe7",
      textShadow: "0 0 12px #00ffe7, 2px 2px 8px #181c2f"
    }}>
      zillion.ai
    </div>
    <Nav />
  </header>
);

export default Header;
