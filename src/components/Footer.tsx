import React from "react";

const Footer: React.FC = () => (
  <footer
    style={{
      textAlign: "center",
      padding: "clamp(1rem, 4vw, 2rem)",
      marginTop: "clamp(1rem, 5vw, 2rem)",
      borderTop: "1px solid #00ffe7",
      color: "#00ffe7",
      background: "#232946cc",
      borderRadius: "1.5rem 1.5rem 0 0",
      boxShadow: "0 -2px 16px #00ffe733",
      position: "relative",
      zIndex: 2,
      fontSize: "clamp(0.8rem, 3vw, 1rem)",
    }}
  >
    &copy; {new Date().getFullYear()} zillion.ai. All rights reserved.
  </footer>
);

export default Footer;
