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
// import heroBackground from "../assets/hero-background.jpg";

export const Gradient = () => {

  
  return (
    
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-50 bg-cyan-950 max-sm:hidden" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-70 bg-cyan-800 max-sm:hidden" />
    </>
  );
};

export default function HeroContent() {
  
  return (
    
    <section className="relative w-full h-[140vh] max-sm:h-[100dvh] flex flex-col justify-between items-center text-center pt-32 pb-16 font- overflow-hidden">
      {/* Text Content */}
      <div className="relative max-w-3xl mx-auto px-4 z-10 flex flex-col items-center justify-center ">
        {/* Badge */}
        <div
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm mb-6 relative"
          style={{ filter: "url(#glass-effect)" }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-sm font-light relative z-10 font-body">
            ✨ AI Meets Innovation
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-[3.5rem] relative lg:w-[1200px] md:max-w-[1200px] max-sm:max-w-[1200px] max-sm:text-[2.5rem] text-white mb-6 font-heading font-[100] leading-[1]">
       Smarter Decisions. Faster Solutions. <br /><span className="font-bold">Powered by AI with </span>
        
            <span className="inline-block relative text-cyan-400 font-bold">
              SageIQ {" "}
              <img
                src="/curve.png"
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
        </h1>

        {/* Subtext */}
        <p className="body-1 text-white/70 mb-8">
          Unlock the future of intelligence. Our platform helps businesses
          automate processes, gain insights, and scale confidently with
          AI-driven solutions.
        </p>

        {/* Buttons */}
          {/* <Button href="/pricing" white={true} className="mr-4">
           Learn More
          </Button> */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button className="px-8 py-3 bg-transparent border border-[#16EFFF] text-[#16EFFF] font-body font-medium text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            Learn More
          </button>
          <button className="px-8 py-3 bg-[#16EFFF] text-black font-body font-medium text-sm transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>

      {/* Hero Image */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24  flex flex-col justify-center items-center">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[500px] w-[1018px] bg-n-10 rounded-t-[0.9rem] z-30 relative overflow-auto" />

              {/* <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src="/sagerobot.png"
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1018}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

              

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Ai Solutions"
                  />
                </ScrollParallax>
              </div> */}
              {/* <CardStack /> */}
                <Image src="/Group 22.png" alt="AI" className="w-full h-full " fill objectFit="contain" />
            </div>

            <Gradient />
          </div>
          {/* <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src="/hero-background.jpg"
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div> */}
          <BackgroundCircles />
        </div>
      {/* <div className="w-full max-w-[600px] mx-auto -mt-20">
        <img
          src="/LandingPageImg.png"
          alt="AI Robot"
          className="w-full h-auto rounded-2xl border border-white/20 shadow-lg"
        />
      </div> */}
            {/* Gradient glows */}
      <div className="z-40 max-sm:hidden">
        <RadialGlow className="top-[-6rem] left-[-8rem] " size={600} color="#00D2FF" />
        <RadialGlow className="bottom-[-5rem] right-[-6rem] " size={500} color="#00D2FF" />
      </div>
    </section>
  )
}
