import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const baseStyle = "font-semibold text-lg";
  const spacing = isMobile ? "block py-3 text-center" : "inline-block mx-4";

  return (
    <nav>
      <a href="#about" className={`${baseStyle} ${spacing} text-pink-500`}>
        About
      </a>
      <a href="#features" className={`${baseStyle} ${spacing} text-cyan-400`}>
        Features
      </a>
      <a href="#community" className={`${baseStyle} ${spacing} text-yellow-400`}>
        Community
      </a>
      <Link to="/careers" className={`${baseStyle} ${spacing} text-cyan-400`}>
        Careers
      </Link>
    </nav>
  );
};

export default Nav;
