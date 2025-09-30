import React from "react";

const RadialGlow = ({ size = 600, color = "#00D2FF", className = "" }) => {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: 0.6,
        filter: "blur(120px)",
      }}
    />
  );
};

export default RadialGlow;
