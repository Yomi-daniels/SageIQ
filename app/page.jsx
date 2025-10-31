"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import PulsingCircle from "@/components/pulsing-circle"
import ShaderBackground from "@/components/shader-background"
import ButtonSvg from "@/components/uisvg/ButtonSvg"
import About from "@/components/About"
import {GlowingEffectDemo} from "@/components/glowing-effect-demo"
import StickyScrollRevealDemo from "@/components/sticky-scroll-reveal-demo"
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo"
import HeroScrollDemo from "@/components/container-scroll-animation-demo"
import Footer from "@/components/footer"
import FAQ from "@/components/faq"
import Testimonial from "@/components/testimonial"
import Contact from "@/components/contact"

export default function ShaderShowcase() {;
  return (
    <div>
      <div className="h-full relative ">
        {/* Place Header at top level so it can overlay all page sections */}
        <Header />
        <ShaderBackground>
          <section id="/">
            <HeroContent />
          </section>
        </ShaderBackground>
      </div>
    <section id="About"><About/>
      <AppleCardsCarouselDemo/>
      </section>
    
    
      <div id="services"><HeroScrollDemo/></div> 
       <FAQ/>
       <Testimonial/>
       <Contact/>
    <Footer/>
    </div>

    
  )
}
