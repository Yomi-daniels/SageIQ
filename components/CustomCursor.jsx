"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnterCard = () => setIsVisible(true);
    const handleMouseLeaveCard = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    // Show only when hovering over elements with .card-hover-zone
    document.querySelectorAll(".card-hover-zone").forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnterCard);
      card.addEventListener("mouseleave", handleMouseLeaveCard);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll(".card-hover-zone").forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnterCard);
        card.removeEventListener("mouseleave", handleMouseLeaveCard);
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-100 ease-out ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div className="relative flex items-center justify-center w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 border border-cyan-300/50 backdrop-blur-md text-white text-sm font-semibold">
        Click Here
      </div>
    </div>
  );
}
