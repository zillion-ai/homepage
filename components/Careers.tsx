import React from "react";
import NeonTriangles from "../components/NeonTriangles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CareersHeader from "../components/CareersHeader";
import JobList from "../components/JobList";

const Careers: React.FC = () => (
  <div
    style={{
      fontFamily: "'Noto Sans JP', 'Comic Sans MS', cursive, sans-serif",
      background: "linear-gradient(135deg, #181c2f 0%, #2b2e4a 100%)",
      minHeight: "100vh",
      color: "#e0e6f7",
      position: "relative",
      zIndex: 1,
      overflow: "hidden",
    }}
  >
    <NeonTriangles />
    <Header />
    <CareersHeader />
    <JobList />
    <Footer />
  </div>
);

export default Careers;
