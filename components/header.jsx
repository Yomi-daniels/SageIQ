"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrolled(currentScroll > 20)
      if (currentScroll > lastScrollY && currentScroll > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastScrollY(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [menuOpen])

  // Smooth scroll handler
  const scrollToSection = (id) => {
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // adjust offset for header height
        behavior: "smooth",
      })
    }
  }

  // Scroll to top when logo clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <div className="w-full relative z-50">
      <header
        className={`w-full flex items-center justify-between px-6 md:px-8 py-4 fixed top-0 left-0 z-50 transition-all duration-300
        ${scrolled ? "bg-[#0E0C15]/90 shadow-lg backdrop-blur-md" : "bg-transparent"}
        ${hidden ? "-translate-y-full" : "translate-y-0 max-sm:border max-sm:border-gray-400 max-sm:rounded-full max-sm:mt-6 max-sm:w-[90%] max-sm:flex max-sm:ml-6 max-sm:bg-black max-sm:mx-auto"}`}
      >
        {/* Logo */}
        <div className="flex items-center max-sm:mt-2 cursor-pointer" onClick={scrollToTop}>
          <div className="relative w-28 max-sm:w-12 h-12 max-sm:z-50">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr opacity-70 blur-md"></div>
            <Image
              src="/sageBrandLogo.png"
              alt="SageIQ Logo"
              fill
              priority
              className="object-contain relative z-10"
            />
          </div>
        </div>
        {/* Desktop Nav */}
        <nav className={`hidden relative md:flex items-center gap-12 px-6 py-6 transition-all duration-300 z-[100000] cursor-pointer`}>
          <button onClick={() => scrollToTop()} className="text-white/80 cursor-pointer   hover:text-[#00D2FF] text-sm transition">Home</button>
          <button onClick={() => scrollToSection("About")} className="text-white/80 cursor-pointer  hover:text-[#00D2FF] text-sm transition">About</button>
          <button onClick={() => scrollToSection("services")} className="text-white/80 cursor-pointer hover:text-[#00D2FF] text-sm transition">Services</button>
          <button onClick={() => scrollToSection("contact")} className="text-white/80 cursor-pointer hover:text-[#00D2FF] text-sm transition">Contact</button>
        </nav>
        {/* Desktop Button */}
        <div className="hidden md:block">
          <button
            className={`px-5 py-2 font-medium text-sm rounded-md transition ${
              scrolled
                ? "bg-white text-black hover:bg-gray-800 hover:text-white"
                : "bg-transparent border border-white/50 text-white hover:bg-white/90"
            }`}
          >
            Enroll Now
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white z-50">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 w-[100vw] h-[110vh] top-[-35%] left-[-7%] bg-black/90 flex flex-col items-center justify-center space-y-8 text-white text-[2rem] font-bold z-40"
            >
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr  opacity-70 blur-md"></div>
                <Image
                  src="/sageBrandLogo.png"
                  alt="SageIQ Logo"
                  fill
                  priority
                  className="object-contain relative z-10"
                  onClick={scrollToTop}
                />
              </div>
              <button onClick={scrollToTop} className="hover:text-[#00D2FF]">Home</button>
              <button onClick={() => scrollToSection("About")} className="hover:text-[#00D2FF]">About</button>
              <button onClick={() => scrollToSection("services")} className="hover:text-[#00D2FF]">Services</button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-[#00D2FF]">Contact</button>
              <button
                onClick={() => setMenuOpen(false)}
                className="px-5 py-2 rounded-full font-medium text-sm bg-white text-black hover:bg-gray-800 hover:text-white"
              >
                Enroll Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  )
}
