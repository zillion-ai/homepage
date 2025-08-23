import React from "react";

const Footer: React.FC = () => (
  <footer
    style={{
      textAlign: "center",
      padding: "2rem",
      marginTop: "2rem",
      borderTop: "1px solid #00ffe7",
      color: "#00ffe7",
      background: "#232946cc",
      borderRadius: "1.5rem 1.5rem 0 0",
      boxShadow: "0 -2px 16px #00ffe733",
      position: "relative",
      zIndex: 2,
    }}
  >
    &copy; {new Date().getFullYear()} zillion.ai. All rights reserved.
  </footer>
);

export default Footer;
