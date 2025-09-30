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

    window.addEventListener("mousemove", handleMouseMove)

    let animationFrame
    const animate = () => {
      // ⚡️ Much faster follow (was 0.35 → now 0.6)
      mouse.current.x += (mouseTarget.current.x - mouse.current.x) * 0.6
      mouse.current.y += (mouseTarget.current.y - mouse.current.y) * 0.6

      if (blobRef.current) {
        const translateX = (mouse.current.x - 0.5) * 300 // more responsive range
        const translateY = (mouse.current.y - 0.5) * 200
        blobRef.current.style.transform = `translate(${translateX}px, ${translateY}px)`
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
      className="min-h-screen relative overflow-hidden "
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

      {/* Background Shaders */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={[
          "#00D2FF", "#0E0C15", "#0E0C15",
          "#1B1B2E", "#2E2A41", "#0E0C15", "#00D2FF",
        ]}
        speed={0.35}
        style={{ filter: "blur(0px)" }}
      />

  <MeshGradient
  className="absolute inset-0 w-[100vw] h-[140vh] max-sm:h-[100vh] opacity-60"
  colors={["#0E0C15", "#0E0C15", "#2E2A41", "#0E0C15", "#0E0C15"]}
  speed={0.25}
  wireframe="true"   // ✅ Pass as string instead of boolean
  style={{ filter: "blur(0px)" }}
/>


      {/* ⚡️ Dark Blob that follows cursor FAST */}
      <div
        ref={blobRef}
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 70%)",
          filter: "blur(10px)",
          mixBlendMode: "overlay",
        }}
      ></div>

      {/* Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
