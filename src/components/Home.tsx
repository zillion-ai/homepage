import React from "react";
import NeonTriangles from "../components/NeonTriangles";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home: React.FC = () => (
  <div style={{
    fontFamily: "'Noto Sans JP', 'Comic Sans MS', cursive, sans-serif",
    background: "linear-gradient(135deg, #181c2f 0%, #2b2e4a 100%)",
    minHeight: "100vh",
    color: "#e0e6f7",
    position: "relative",
    zIndex: 1,
    overflow: "hidden"
  }}>
    <NeonTriangles />
    <Header />
    <Hero />
    <Footer />
  </div>
);

export default Home;
