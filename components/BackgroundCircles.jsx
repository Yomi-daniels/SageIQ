"use client"

import { useEffect, useState } from "react"
import { MouseParallax } from "react-just-parallax"
import Image from "next/image"

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  )
}

const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="absolute -top-[25.375rem] left-1/2 w-[78rem] aspect-square border border-white/5 rounded-full -translate-x-1/2">
      <Rings />

      {/* Moving Orbs */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        {/* Orb 1 */}
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
          <div
            className={`-mt-36 -ml-1 w-10 h-10 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-1"
            }`}
          >
            <Image
              src="/nanobot1.png"
              alt="orb"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        {/* Orb 2 */}
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
          <div
            className={`-mt-32 -ml-2 w-12 h-12 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-1"
            }`}
          >
            <Image
              src="/nanobot2.png"
              alt="orb"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        </div>

        {/* Orb 3 */}
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
          <div
            className={`mt-[12rem] -ml-1 w-14 h-14 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-1"
            }`}
          >
            <Image
               src="/nanobot2.png"
              alt="orb"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
        </div>

        {/* Orb 4 */}
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
          <div
            className={`mt-52 -ml-2 w-16 h-16 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-1"
            }`}
          >
            <Image
              src="/nanobot1.png"
              alt="orb"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        </div>

        {/* Orb 5 */}
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
          <div
            className={`-mt-3 -ml-3 w-20 h-20 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-1"
            }`}
          >
            <Image
              src="/nanobot2.png"
              alt="orb"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </MouseParallax>
    </div>
  )
}

export default BackgroundCircles
