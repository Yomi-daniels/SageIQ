import React from "react";
import Image from "next/image";
import RadialGlow from "./RadialGlow";
import {GlowingEffectDemo} from "@/components/glowing-effect-demo"
const Services = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#0E0C15] flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
          <div className="relative flex flex-col items-center text-center">
            <h2 className="text-[48px] font-[100] mb-6 leading-[1.2] max-sm:text-[1.5rem]">
              You don’t have to <span className="font-bold">know</span> it all, <br />
              We will <span className="font-bold">equip</span> you with all you need.
            </h2>
            <button className=" px-8 py-3 bg-white/90 text-black font-body font-medium text-sm transition-all duration-200 hover:bg-[#16EFFF] cursor-pointer mb-16">
              Enroll Now
            </button>
        </div>
      {/* Background Gradient Glow */}
      <RadialGlow className="top-[-10rem] left-[-10rem]" size={700} color="#16EFFF" />
      <RadialGlow className="bottom-[-8rem] right-[-8rem]" size={600} color="#16EFFF" />
      

      {/* Background container behind cards */}
      <div className=" relative  max-w-7xl h-[100%] mx-auto rounded-3xl bg-black p-[4rem]" >
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
      </div>
    </div>
  );
};

export default Services;
