import React from "react";

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

export default NeonTriangles;
