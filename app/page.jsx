"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import PulsingCircle from "@/components/pulsing-circle"
import ShaderBackground from "@/components/shader-background"
import ButtonSvg from "@/components/uisvg/ButtonSvg"
import Services from "@/components/Services"
import About from "@/components/About"
import {GlowingEffectDemo} from "@/components/glowing-effect-demo"
import StickyScrollRevealDemo from "@/components/sticky-scroll-reveal-demo"

export default function ShaderShowcase() {
  return (
    <div>
      <div className="h-full relative">
        <ShaderBackground>
          <Header />
        
          <HeroContent />
          {/* <PulsingCircle /> */}
        </ShaderBackground>
      </div>
    {/* <About/> */}
      <Services/>
      <StickyScrollRevealDemo/>
         {/* <About/> */}
      {/* <GlowingEffectDemo /> */}
    </div>

    
  )
}
