"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingText = () => {
  const texts = [
    "Connecting intelligence",
    "AI is generating insights",
    "Processing smart ideas",
    "Loading innovations",
    "Almost ready",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    const speed = deleting ? 40 : 85;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < currentText.length) {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (deleting && charIndex > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!deleting && charIndex === currentText.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full flex justify-center"
    >
      {/* Premium glow effect (cyan-dominant) */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="absolute w-80 h-20 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" aria-hidden />
      </div>

      {/* Main badge capsule */}
      <div role="status" aria-live="polite" className="relative flex flex-nowrap items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-black/70 to-black/50 border border-cyan-400/40 shadow-[0_0_20px_rgba(34,211,238,0.15)] backdrop-blur-sm group">

        {/* Premium spinner with glow */}
        <div className="relative w-5 h-5 flex-shrink-0">
          <div className="absolute inset-0 rounded-full border border-cyan-400/20 group-hover:border-cyan-400/30 transition-colors" />
          <div className="absolute inset-0 rounded-full border-t-2 border-cyan-400 motion-safe:animate-spin motion-reduce:animate-none" style={{ filter: "drop-shadow(0 0 4px rgba(34, 211, 238, 0.5))" }} />
        </div>

        {/* Typing text with glow */}
        <span className="flex-1 text-white text-sm font-semibold tracking-wide min-w-[150px] whitespace-nowrap">
          <span className="sr-only">Status:</span>
          <span className="bg-gradient-to-r from-white via-white to-cyan-200 bg-clip-text text-transparent">{displayedText}</span>
          <span className="ml-1 text-cyan-300 motion-reduce:opacity-100 animate-pulse">_</span>
        </span>


      </div>

      {/* Animated progress bar with glow */}
      <div className="absolute -bottom-3 w-[75%] h-1 rounded-full bg-white/5 shadow-lg">
        <motion.div 
          className="h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-loading-bar rounded-full"
          style={{ filter: "drop-shadow(0 0 6px rgba(34, 211, 238, 0.6))" }}
        />
      </div>
    </motion.div> 
  );
};

export default LoadingText;
