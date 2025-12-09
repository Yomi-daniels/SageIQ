"use client"

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import RadialGlow from "./RadialGlow";
import { GlowingEffectDemo } from "@/components/glowing-effect-demo";
import { motion, useInView, useAnimation } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });
  const controls = useAnimation();

  // detect small screens and adjust animation magnitudes/durations
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    // when the section enters view start show animation; on mobile always show
    if (isMobile) {
      controls.start("show");
    } else {
      controls.start(inView ? "show" : "hide");
    }
  }, [inView, controls, isMobile]);

  const textYOffset = isMobile ? 18 : 36;
  const imageYOffset = isMobile ? 28 : 56;
  const textDuration = isMobile ? 0.5 : 0.7;
  const imageDuration = isMobile ? 0.8 : 1.05;
  const imageDelay = isMobile ? 0.08 : 0.2;

  const textVariants = {
    hidden: { opacity: 0, y: textYOffset },
    show: { opacity: 1, y: 0, transition: { duration: textDuration, ease: "easeOut" } },
    hide: { opacity: 0, y: textYOffset, transition: { duration: Math.max(0.35, textDuration / 1.5), ease: "easeIn" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: imageYOffset },
    show: { opacity: 1, y: 0, transition: { duration: imageDuration, ease:"easeOut", delay: imageDelay } },
    hide: { opacity: 0, y: imageYOffset, transition: { duration: Math.max(0.4, imageDuration / 1.6), ease: "easeIn" } },
  };

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen bg-[#0E0C15] flex flex-col items-center justify-center px-6 py-16 overflow-hidden"
    >
      <motion.div variants={textVariants} initial={isMobile ? "show" : "hidden"} animate={controls} className="relative flex flex-col items-center text-center">
        <h2 className="text-[48px] font-[100] mb-6 leading-[1.2] max-sm:font-[200] max-sm:text-[1.7rem] text-white max-sm:z-10">
          You don’t have to <span className="font-bold">know</span> it all, <br />
          We will <span className="font-bold">equip</span> you with all you need.
        </h2>
        <button className=" px-8 py-3 bg-white/90 text-black font-body font-medium text-sm transition-all duration-200 hover:bg-[#16EFFF] cursor-pointer mb-16 max-sm:z-10">
          Enroll Now
        </button>
      </motion.div>
      {/* Background Gradient Glow */}
      <RadialGlow className="top-[-10rem] left-[-10rem]" size={700} color="#16EFFF" />
      <RadialGlow className="bottom-[-8rem] right-[-8rem]" size={600} color="#16EFFF" />

      {/* Background container behind cards */}
  <motion.div variants={imageVariants} initial={isMobile ? "show" : "hidden"} animate={controls} className=" relative  max-w-7xl h-[100%] mx-auto rounded-3xl bg-black p-[4rem] max-sm:p-[1.5rem]" >
        {/* Animated border line */}
        <div className="absolute inset-0 rounded-3xl border-[5px] border-transparent animate-borderMove" 
             style={{
               background: "linear-gradient(90deg, #16EFFF, transparent, #16EFFF)",
               backgroundSize: "300% 300%",
               WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
               WebkitMaskComposite: "xor",
               maskComposite: "exclude",
               padding: "2px"
             }}>
        </div>
        {/* Bento Grid */}
        <GlowingEffectDemo />
      </motion.div>
    </div>
  );
};

export default About;
