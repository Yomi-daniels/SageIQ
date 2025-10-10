"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const lastUpdateRef = useRef(0);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  // Memoize breakpoints so they're not recalculated every scroll
  const cardsBreakpoints = useMemo(
    () => content.map((_, index) => index / cardLength),
    [content, cardLength]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Throttle updates - only update every 16ms (60fps max)
    const now = Date.now();
    if (now - lastUpdateRef.current < 16) return;
    lastUpdateRef.current = now;

    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    
    // Only update if changed
    if (closestBreakpointIndex !== activeCard) {
      setActiveCard(closestBreakpointIndex);
    }
  });

  // background and gradients
  const backgroundColors = ["#0f172a", "#000000", "#171717"];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const backgroundGradient = useMemo(
    () => linearGradients[activeCard % linearGradients.length],
    [activeCard]
  );

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      ref={ref}
      className="relative flex h-[80vh] justify-center space-x-12 overflow-y-auto hide-scrollbar rounded-xl p-10 shadow-xl"
      style={{ scrollBehavior: "auto" }} // Remove scroll-smooth to avoid conflict
    >
      {/* Left side content (scrollable) */}
      <div className="relative flex items-start px-4">
        <div className="max-w-xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className={`my-24 transition-opacity duration-500 ${
                activeCard === index ? "opacity-100" : "opacity-40"
              }`}
            >
              {/* Only animate the active card */}
              {activeCard === index ? (
                <>
                  <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-3xl font-extrabold text-white"
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="mt-6 max-w-sm text-lg text-slate-300"
                  >
                    {item.description}
                  </motion.p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-extrabold text-white opacity-30">
                    {item.title}
                  </h2>
                  <p className="mt-6 max-w-sm text-lg text-slate-300 opacity-30">
                    {item.description}
                  </p>
                </>
              )}
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Right side sticky preview */}
      <motion.div
        key={activeCard}
        style={{ background: backgroundGradient }}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "sticky top-16 hidden h-72 w-96 overflow-hidden rounded-xl shadow-2xl lg:block transform-gpu",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};