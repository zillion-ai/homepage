import React, { useState } from "react";
import Nav from "./Nav";

const Header: React.FC = () => {
  const [menuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-6 relative z-20">
      {/* Logo */}
      <div
        className="font-bold text-3xl sm:text-4xl tracking-wider"
        style={{
          fontFamily: "'Zen Maru Gothic', 'Comic Sans MS', cursive, sans-serif",
          color: "#00ffe7",
          textShadow: "0 0 12px #00ffe7, 2px 2px 8px #181c2f",
        }}
      >
        zillion.ai
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:block">
        <Nav />
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#181c2f] shadow-lg md:hidden">
          <Nav isMobile />
        </div>
      )}
    </header>
  );
};

export default Header;
