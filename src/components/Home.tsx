import React from 'react';

const Home: React.FC = () => (
  <div style={{ fontFamily: "sans-serif", background: "linear-gradient(135deg, #232526 0%, #414345 100%)", minHeight: "100vh", color: "#fff" }}>
    {/* Header */}
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem" }}>
      <div style={{ fontWeight: "bold", fontSize: "2rem", letterSpacing: "2px" }}>zillion.ai</div>
      <nav>
        <a href="#about" style={{ color: "#fff", margin: "0 1rem" }}>About</a>
        <a href="#features" style={{ color: "#fff", margin: "0 1rem" }}>Features</a>
        <a href="#community" style={{ color: "#fff", margin: "0 1rem" }}>Community</a>
      </nav>
    </header>

    {/* Hero Section */}
    <section style={{ textAlign: "center", padding: "4rem 2rem" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Welcome to zillion.ai</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
        AI, Gaming, and Anime—unleashed.
      </p>
      <button style={{
        padding: "1rem 2rem",
        fontSize: "1.2rem",
        borderRadius: "2rem",
        border: "none",
        background: "linear-gradient(90deg, #8f6ed5 0%, #3f51b5 100%)",
        color: "#fff",
        cursor: "pointer"
      }}>
        Explore Now
      </button>
    </section>

    {/* About Section */}
    <section id="about" style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>About Us</h2>
      <p>
        zillion.ai is your gateway to the future of artificial intelligence, immersive gaming, and vibrant anime culture. Join us as we blend technology and creativity!
      </p>
    </section>

    {/* Features Section */}
    <section id="features" style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h2>Our Features</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
        <div style={{ background: "#333", borderRadius: "1rem", padding: "2rem", minWidth: "200px", flex: "1 1 250px" }}>
          <h3>AI Solutions</h3>
          <p>Cutting-edge AI tools and APIs for developers and creators.</p>
        </div>
        <div style={{ background: "#333", borderRadius: "1rem", padding: "2rem", minWidth: "200px", flex: "1 1 250px" }}>
          <h3>Gaming</h3>
          <p>Innovative gaming experiences powered by AI.</p>
        </div>
        <div style={{ background: "#333", borderRadius: "1rem", padding: "2rem", minWidth: "200px", flex: "1 1 250px" }}>
          <h3>Anime Community</h3>
          <p>Connect with fans and creators in our anime hub.</p>
        </div>
      </div>
    </section>

    {/* Community Section */}
    <section id="community" style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Join Our Community</h2>
      <p>
        Stay updated on Discord, WeChat, and more. Be part of the zillion.ai journey!
      </p>
      <div>
        <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#8f6ed5", marginRight: "1rem" }}>Discord</a>
        <a href="#" style={{ color: "#8f6ed5" }}>WeChat</a>
      </div>
    </section>

    {/* Footer */}
    <footer style={{ textAlign: "center", padding: "2rem", marginTop: "2rem", borderTop: "1px solid #444" }}>
      &copy; {new Date().getFullYear()} zillion.ai. All rights reserved.
    </footer>
  </div>
);

export default Home;
