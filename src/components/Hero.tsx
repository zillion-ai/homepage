import React from "react";
import GradientButton from "./GradientButton";

const Hero: React.FC = () => (
  <section style={{
    textAlign: "center",
    padding: "4rem 2rem 2rem 2rem",
    position: "relative",
    zIndex: 2
  }}>
    <div style={{
      margin: "0 auto 1.5rem auto",
      width: 120,
      height: 120,
      borderRadius: "50%",
      background: "linear-gradient(135deg, #232946 60%, #00ffe7 100%)",
      boxShadow: "0 4px 24px #00ffe755",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "4rem",
      color: "#ff00c8"
    }}>
      <span role="img" aria-label="mascot">🤖</span>
    </div>
    <h1 style={{
      fontSize: "3rem",
      marginBottom: "1rem",
      fontFamily: "'Zen Maru Gothic', 'Comic Sans MS', cursive, sans-serif",
      color: "#00ffe7",
      textShadow: "0 0 12px #00ffe7, 2px 2px 8px #181c2f"
    }}>
      Welcome to zillion.ai
    </h1>
    <p style={{
      fontSize: "1.5rem",
      marginBottom: "2rem",
      color: "#ff00c8",
      fontWeight: 500
    }}>
      AI, Gaming, and Anime—unleashed.
    </p>
    <GradientButton>Explore Now</GradientButton>
  </section>
);

export default Hero;
