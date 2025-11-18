"use client";
import React, { useRef, useEffect } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import RadialGlow from "./RadialGlow";
import { motion, useInView, useAnimation } from "framer-motion";

export default function HeroScrollDemo() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.45 });
  const controls = useAnimation();

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    // Intersection Observer: detects when the video section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play when visible
            videoEl.play().catch(() => {});
          } else {
            // Pause when out of view
            videoEl.pause();
          }
        });
      },
      {
        threshold: 0.5, // at least 50% visible to trigger
      }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    controls.start(inView ? "show" : "hide");
  }, [inView, controls]);

  const titleVariants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    hide: { opacity: 0, y: 18, transition: { duration: 0.45, ease: "easeIn" } },
  };

  const videoVariants = {
    hidden: { opacity: 0, y: 56 },
    show: { opacity: 1, y: 0, transition: { duration: 1.05, ease: "easeOut", delay: 0.12 } },
    hide: { opacity: 0, y: 56, transition: { duration: 0.6, ease: "easeIn" } },
  };

 

  return (
    <div ref={sectionRef} className="relative flex flex-col overflow-hidden bg-black  py-32">

      <ContainerScroll
      
        titleComponent={
          <motion.div variants={titleVariants} initial="hidden" animate={controls}>
            <h1 className="text-4xl font-semibold text-white text-center">
             Here's what We are currently <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Working on
              </span>
            </h1>
          </motion.div>
        }
      >
        
        <motion.div variants={videoVariants} initial="hidden" animate={controls}>
          <video
            ref={videoRef}
            src="/videos/SageVideo.mp4"
            autoPlay={false}
            loop
           
            playsInline
            className="h-full w-full object-cover rounded-2xl max-sm:object-center "
          />
        </motion.div>
      </ContainerScroll>
               {/* Gradient glows */}
      <div className="relative max-sm:hidden">
        <RadialGlow className="top-[-60rem] left-[-4rem]" size={600} color="#00D2FF" />
        <RadialGlow className="bottom-[-5rem] right-[4rem]" size={500} color="#00D2FF" />
      </div>
    </div>
  );
}
