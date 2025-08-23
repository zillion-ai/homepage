import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => (
  <nav>
    <a
      href="#about"
      style={{ color: "#ff00c8", margin: "0 1rem", fontWeight: 600, fontSize: "1.1rem" }}
    >
      About
    </a>
    <a
      href="#features"
      style={{ color: "#00ffe7", margin: "0 1rem", fontWeight: 600, fontSize: "1.1rem" }}
    >
      Features
    </a>
    <a
      href="#community"
      style={{ color: "#fff700", margin: "0 1rem", fontWeight: 600, fontSize: "1.1rem" }}
    >
      Community
    </a>
    <Link
      to="/careers"
      style={{ color: "#00ffe7", margin: "0 1rem", fontWeight: 600, fontSize: "1.1rem" }}
    >
      Careers
    </Link>
  </nav>
);

export default Nav;
