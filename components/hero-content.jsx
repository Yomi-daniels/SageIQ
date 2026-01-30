"use client"
import { ScrollParallax } from "react-just-parallax"
import { heroIcons } from "@/app/Data";
import Button from "@/components/Button"
import Generating from "@/components/Generating"
import BackgroundCircles from "@/components/BackgroundCircles"
import Notification from "@/components/Notification"
import CardStack from "@/components/CardStack"
import Image from "next/image";
import RadialGlow from "./RadialGlow";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion'
import LoadingText from "@/components/ui/loadingText.jsx";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-50 bg-cyan-950 max-sm:hidden" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-70 bg-cyan-800 max-sm:hidden" />
    </>
  );
};

export default function HeroContent() {
  //  Add scrollToSection function here
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // adjust offset for header height
        behavior: "smooth",
      });
    } else {
      console.warn(`Section "${id}" not found`);
    }
  };
  
  // Framer Motion variants
  const container = {
    hidden: {},
    show: {
      transition: {
        // longer stagger so each text part has breathing room
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 18, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        // spring for a subtle "pop" effect
        type: 'spring',
        stiffness: 260,
        damping: 22,
        duration: 0.6,
      },
    },
  }

  // image comes from bottom to top and is delayed so it follows the text
  const imageAnim = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: 'easeOut', delay: 0.6 },
    },
  }
  

  // ref for scroll-based transforms
  const containerRef = useRef(null)

  // use framer-motion scroll hooks to fade the hero as the user scrolls away
  // map the section's start->start to progress 0 so the hero is fully visible on load
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  // make the fade subtler: spread it out (0 -> 0.8) and don't go fully transparent (end at 0.25)
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25])

  return (
    <motion.section ref={containerRef} style={{ opacity }} className="relative w-full h-[140vh] max-sm:h-[100dvh] flex flex-col justify-between items-center text-center pt-32 pb-16 overflow-hidden">
      {/* Text Content */}
  <motion.div className="relative max-w-3xl mx-auto px-4 z-10 flex flex-col items-center justify-center" variants={container} initial="hidden" animate="show">
        {/* AI Generating Badge */}
        <motion.div
          variants={item}
          className="inline-flex flex-col items-center px-5 py-3 rounded-xl mb-6 relative"
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient animate-pulse-to-r from-transparent via-white/20 to-transparent rounded-e-lg" />
          <LoadingText />
        </motion.div>

        {/* Main Heading */}
  <motion.h1 variants={item} className="text-[3.5rem] relative lg:w-[1200px] md:max-w-[1200px] max-sm:max-w-[1200px] max-sm:text-[2.5rem] text-white mb-6 font-heading font-[100] leading-[1]">
          Smarter Decisions. Faster Solutions. <br />
          <span className="font-bold">Powered by AI with </span>
          <span className="inline-block relative text-cyan-400 font-bold">
            SageIQ{" "}
            <Image
              src="/curve.png"
              className="absolute top-full left-0 w-full xl:-mt-2"
              width={624}
              height={28}
              alt="Curve"
              loading="lazy"
            />
          </span>
  </motion.h1>

        {/* Subtext */}
        <motion.p variants={item} className="body-1 text-white/70 mb-8">
          Unlock the future of intelligence. Our platform helps businesses
          automate processes, gain insights, and scale confidently with
          AI-driven solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={() => scrollToSection("services")}
            className="px-8 py-3 bg-transparent border border-[#16EFFF] text-[#16EFFF] font-body font-medium text-sm transition-all duration-200 hover:bg-[#16EFFF] hover:text-white cursor-pointer"
          >
            Learn More
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-[#16EFFF] text-black font-body font-medium text-sm transition-all duration-200 hover:bg-white/90 cursor-pointer"
          >
            Get Started
          </button>
        </motion.div>
      </motion.div>

      {/* Hero Image */}
      <motion.div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 flex flex-col justify-center items-center" initial="hidden" animate="show" variants={imageAnim}>
        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
          <div className="relative bg-n-8 rounded-[1rem]">
            <div className="h-[500px] w-[1018px] bg-n-10 rounded-t-[0.9rem] z-30 relative overflow-auto" />
            <Image
              src="/hero-image.png"
              alt="AI"
              fill
              style={{ objectFit: "contain" }}
              loading="lazy"
              quality={75}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            />
          </div>
          <Gradient />
        </div>
        <BackgroundCircles />
      </motion.div>

      {/* Gradient Glows */}
      <div className="z-40 max-sm:hidden">
        <RadialGlow className="top-[-6rem] left-[-8rem]" size={600} color="#00D2FF" />
        <RadialGlow className="bottom-[-5rem] right-[-6rem]" size={500} color="#00D2FF" />
      </div>
    </motion.section>
  );
}
