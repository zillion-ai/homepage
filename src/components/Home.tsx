import React from 'react';

// Neon Triangles Animation (cyber-anime vibe)
const NeonTriangles: React.FC = () => (
  <div style={{
    pointerEvents: "none",
    position: "fixed",
    top: 0, left: 0, width: "100vw", height: "100vh",
    zIndex: 0,
    overflow: "hidden"
  }}>
    {[...Array(18)].map((_, i) => {
      const size = 24 + Math.random() * 36;
      const color = ["#00ffe7", "#ff00c8", "#00b3ff", "#fff700"][i % 4];
      const left = Math.random() * 100;
      const duration = 5 + Math.random() * 6;
      const delay = Math.random() * 6;
      const rotate = Math.random() * 360;
      return (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${left}%`,
            top: `${Math.random() * 100}%`,
            width: size,
            height: size,
            opacity: 0.7,
            animation: `triangle-fall ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
            transform: `rotate(${rotate}deg)`,
            filter: "drop-shadow(0 0 8px " + color + ")"
          }}
        >
          <svg width={size} height={size} viewBox="0 0 32 32">
            <polygon
              points="16,2 30,30 2,30"
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinejoin="round"
              style={{ filter: "drop-shadow(0 0 6px " + color + ")" }}
            />
          </svg>
        </div>
      );
    })}
    <style>
      {`
        @keyframes triangle-fall {
          0% { transform: translateY(-10vh) scale(1) rotate(0deg);}
          100% { transform: translateY(110vh) scale(1.2) rotate(360deg);}
        }
      `}
    </style>
  </div>
);

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

    {/* Header */}
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "2rem",
      zIndex: 2,
      position: "relative"
    }}>
      <div style={{
        fontWeight: "bold",
        fontSize: "2.5rem",
        letterSpacing: "2px",
        fontFamily: "'Zen Maru Gothic', 'Comic Sans MS', cursive, sans-serif",
        color: "#00ffe7",
        textShadow: "0 0 12px #00ffe7, 2px 2px 8px #181c2f"
      }}>
        zillion.ai
      </div>
      <nav>
        <a href="#about" style={{ color: "#ff00c8", margin: "0 1rem", fontWeight: 600, fontSize: "1.1rem" }}>About</a>
        <a href="#features" style={{ color: "#00ffe7", margin: "0 1rem", fontWeight: 600, fontSize: "1.1rem" }}>Features</a>
        <a href="#community" style={{ color: "#fff700", margin: "0 1rem", fontWeight: 600, fontSize: "1.1rem" }}>Community</a>
      </nav>
    </header>

    {/* Hero Section */}
    <section style={{
      textAlign: "center",
      padding: "4rem 2rem 2rem 2rem",
      position: "relative",
      zIndex: 2
    }}>
      {/* Mascot Placeholder */}
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
      <button style={{
        padding: "1rem 2.5rem",
        fontSize: "1.3rem",
        borderRadius: "2rem",
        border: "none",
        background: "linear-gradient(90deg, #00ffe7 0%, #ff00c8 100%)",
        color: "#181c2f",
        cursor: "pointer",
        fontWeight: 700,
        boxShadow: "0 2px 12px #00ffe755",
        position: "relative",
        overflow: "hidden"
      }}>
        <span style={{
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%",
          background: "linear-gradient(120deg, #fff6 30%, transparent 70%)",
          opacity: 0.5,
          pointerEvents: "none",
          animation: "shine 2s infinite linear"
        }} />
        Explore Now
        <style>
          {`
            @keyframes shine {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
          `}
        </style>
      </button>
    </section>

    {/* About Section */}
    <section id="about" style={{
      padding: "2rem",
      maxWidth: "800px",
      margin: "2rem auto",
      background: "#232946cc",
      borderRadius: "1.5rem",
      boxShadow: "0 2px 16px #00ffe733"
    }}>
      <h2 style={{
        color: "#00ffe7",
        fontFamily: "'Zen Maru Gothic', 'Comic Sans MS', cursive, sans-serif"
      }}>About Us</h2>
      <p>
        zillion.ai is your gateway to the future of artificial intelligence, immersive gaming, and vibrant anime culture. Join us as we blend technology and creativity!
      </p>
    </section>

    {/* Features Section */}
    <section id="features" style={{
      padding: "2rem",
      maxWidth: "1000px",
      margin: "2rem auto",
      background: "#232946cc",
      borderRadius: "1.5rem",
      boxShadow: "0 2px 16px #00ffe733"
    }}>
      <h2 style={{
        color: "#00ffe7",
        fontFamily: "'Zen Maru Gothic', 'Comic Sans MS', cursive, sans-serif"
      }}>Our Features</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center"
      }}>
        <div style={{
          background: "#181c2f",
          borderRadius: "1rem",
          padding: "2rem",
          minWidth: "200px",
          flex: "1 1 250px",
          boxShadow: "0 2px 8px #00ffe733"
        }}>
          <h3 style={{ color: "#ff00c8" }}>AI Solutions</h3>
          <p>Cutting-edge AI tools and APIs for developers and creators.</p>
        </div>
        <div style={{
          background: "#232946",
          borderRadius: "1rem",
          padding: "2rem",
          minWidth: "200px",
          flex: "1 1 250px",
          boxShadow: "0 2px 8px #00ffe733"
        }}>
          <h3 style={{ color: "#00ffe7" }}>Gaming</h3>
          <p>Innovative gaming experiences powered by AI.</p>
        </div>
        <div style={{
          background: "#181c2f",
          borderRadius: "1rem",
          padding: "2rem",
          minWidth: "200px",
          flex: "1 1 250px",
          boxShadow: "0 2px 8px #00ffe733"
        }}>
          <h3 style={{ color: "#fff700" }}>Anime Community</h3>
          <p>Connect with fans and creators in our anime hub.</p>
        </div>
      </div>
    </section>

    {/* Community Section */}
    <section id="community" style={{
      padding: "2rem",
      maxWidth: "800px",
      margin: "2rem auto",
      background: "#232946cc",
      borderRadius: "1.5rem",
      boxShadow: "0 2px 16px #00ffe733"
    }}>
      <h2 style={{
        color: "#00ffe7",
        fontFamily: "'Zen Maru Gothic', 'Comic Sans MS', cursive, sans-serif"
      }}>Join Our Community</h2>
      <p>
        Stay updated on Discord, WeChat, and more. Be part of the zillion.ai journey!
      </p>
      <div>
        <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#00ffe7", marginRight: "1rem", fontWeight: 600 }}>Discord</a>
        <a href="#" style={{ color: "#ff00c8", fontWeight: 600 }}>WeChat</a>
      </div>
    </section>

    {/* Footer */}
    <footer style={{
      textAlign: "center",
      padding: "2rem",
      marginTop: "2rem",
      borderTop: "1px solid #00ffe7",
      color: "#00ffe7",
      background: "#232946cc",
      borderRadius: "1.5rem 1.5rem 0 0",
      boxShadow: "0 -2px 16px #00ffe733"
    }}>
      &copy; {new Date().getFullYear()} zillion.ai. All rights reserved.
    </footer>
  </div>
);

export default Home;
