"use client"
import { useEffect, useRef } from "react"
import { MeshGradient } from "@paper-design/shaders-react"

export default function ShaderBackground({ children }) {
  const blobRef = useRef(null)
  const mouseTarget = useRef({ x: 0.5, y: 0.5 })
  const mouse = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      mouseTarget.current = {
        x: e.clientX / innerWidth,
        y: e.clientY / innerHeight,
      }
    }

    // ✅ Use passive listener for better performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    let animationFrame
    const animate = () => {
      // ⚙️ smoother interpolation (floaty motion)
      mouse.current.x += (mouseTarget.current.x - mouse.current.x) * 0.12
      mouse.current.y += (mouseTarget.current.y - mouse.current.y) * 0.12

      if (blobRef.current) {
        // Subtle, GPU-accelerated transform
        const translateX = (mouse.current.x - 0.5) * 150
        const translateY = (mouse.current.y - 0.5) * 100
        blobRef.current.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div
      className="min-h-screen relative overflow-hidden scroll-smooth "
      style={{ backgroundColor: "#0E0C15" }}
    >
      {/* SVG Filters */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 21 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/*  Layered Background Shaders */}
      {/* <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#00D2FE", "#1B1B2E", "#2E2A41", "#0E0C15"]}
        speed={0.15}
      /> */}
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-40"
        colors={["#0E0C15", "#00D2FE", "#2E2A41", "#1B1B2E"]}
        speed={0.25}
      />

      {/* 🌀 Dark Blob */}
      <div
        ref={blobRef}
        className="absolute w-[600px] h-[600px] max-sm:w-[300px] max-sm:h-[300px] rounded-full pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0) 70%)",
          filter: "blur(14px)",
          mixBlendMode: "overlay",
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* 💎 Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
