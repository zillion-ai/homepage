import React from "react";

const GradientButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button style={{
    padding: "1rem 2.5rem",
    fontSize: "1.3rem",
    borderRadius: "2rem",
    border: "none",
    background: "linear-gradient(90deg, #00ffe7 0%, #ff00c8 100%)",
    color: "#181c2f",
    cursor: "pointer",
    fontWeight: 700,
    boxShadow: "0 2px 12px #00ffe755",
    position: "relative",
    overflow: "hidden"
  }}>
    <span style={{
      position: "absolute",
      top: 0, left: 0, width: "100%", height: "100%",
      background: "linear-gradient(120deg, #fff6 30%, transparent 70%)",
      opacity: 0.5,
      pointerEvents: "none",
      animation: "shine 2s infinite linear"
    }} />
    {children}
    <style>
      {`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}
    </style>
  </button>
);

export default GradientButton;
