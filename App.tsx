import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Careers from "./components/Careers";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
  </Router>
);

export default App;
