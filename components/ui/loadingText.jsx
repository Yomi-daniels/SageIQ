"use client";

import React, { useEffect, useState } from "react";

const LoadingText = () => {
  const texts = [
    "AI is generating...",
    "AI has generated...",
    "Innovations loading...",
    "Images loading...",
    "Startup loading...",
    "Processing creativity...",
    "Smart ideas incoming...",
    "Almost ready..."
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let typingSpeed = deleting ? 50 : 100; // adjust typing/deleting speed

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < currentText.length) {
        // typing
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (deleting && charIndex > 0) {
        // deleting
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!deleting && charIndex === currentText.length) {
        // pause before deleting
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && charIndex === 0) {
        // move to next text
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, texts]);

  return (
    <span className="text-white/90 text-sm font-medium relative z-10 font-body mb-2 tracking-wide">
      {displayedText}
      <span className="animate-pulse text-cyan-400 ml-[2px]">|</span>
    </span>
  );
};

export default LoadingText;
