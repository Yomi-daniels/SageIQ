"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react" // lightweight icons
import Button from "./Button"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      // background toggle
      setScrolled(currentScroll > 20)

      // hide on scroll down, show on scroll up
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
  useEffect(() => {
  if (menuOpen) {
    document.documentElement.style.overflow = "hidden"; // lock <html>
    document.body.style.overflow = "hidden";            // lock <body>
  } else {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  return () => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  };
}, [menuOpen]);


  return (
    <header
      className={`w-full flex items-center justify-between px-6 md:px-8 py-4 fixed top-0 left-0 z-50 transition-all duration-300 
        ${scrolled ? "bg-[#0E0C15] shadow-md z-50" : "bg-transparent"} 
        ${hidden ? "-translate-y-full" : "translate-y-0 max-sm:border max-sm:border-gray-400 max-sm:rounded-full max-sm:mt-6 max-sm:w-[90%] max-sm:flex max-sm:ml-6 max-sm:bg-black max-sm:mx-auto z-50"} `}
    >
      {/* Logo */}
      <div className="flex items-center max-sm:mt-2">
        <div className="relative w-28 max-sm:w-12 h-12 max-sm:z-50">
          {/* Gradient glow */}
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
      <nav
        className={`hidden md:flex items-center gap-12 px-6 py-6  transition-all duration-300 z-50
          ${scrolled ? "bg-[#0E0C15]" : "bg-transparent"}
        `}
      >
        <a
          href="#"
          className={`${scrolled ? "text-white" : "text-white/80"} hover:text-siq-cyan text-sm transition`}
        >
          Home
        </a>
        <a
          href="#"
          className={`${scrolled ? "text-white" : "text-white/80"} hover:text-siq-cyan text-sm transition`}
        >
          Features
        </a>
        <a
          href="#"
          className={`${scrolled ? "text-white" : "text-white/80"} hover:text-siq-cyan text-sm transition`}
        >
          Pricing
        </a>
        <a
          href="#"
          className={`${scrolled ? "text-white" : "text-white/80"} hover:text-siq-cyan text-sm transition`}
        >
          Docs
        </a>
      </nav>

      {/* Right Button (Desktop only) */}
      <div className="hidden md:block">
        <button
          className={`px-5 py-2  font-medium text-sm transition ${
            scrolled
              ? "bg-white text-black hover:bg-gray-800 hover:text-white"
              : "bg-transparent border border-white/50 text-white hover:bg-white/90"
          }`}
        >
          Enroll Now
        </button>
      {/* <Button>Login</Button> */}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white z-50"
      >
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
            className="fixed inset-0 bg-black/95 left-[-2rem] top-[-2rem] h-[100vh] w-[110vw] flex flex-col items-center justify-center space-y-8 text-white text-[2rem] font-bold z-40"
          >
            {/* Mobile Logo with gradient */}
            <div className="relative w-24 h-24 mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-siq-cyan to-purple-600 opacity-70 blur-md"></div>
              <Image
                src="/sageBrandLogo.png"
                alt="SageIQ Logo"
                fill
                priority
                className="object-contain relative z-10"
              />
            </div>

            {/* Links */}
            <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-siq-cyan">
              Home
            </a>
            <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-siq-cyan">
              Features
            </a>
            <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-siq-cyan">
              Pricing
            </a>
            <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-siq-cyan">
              Docs
            </a>

            <button
              onClick={() => setMenuOpen(false)}
              className="px-5 py-2 rounded-full font-medium text-sm bg-white text-black hover:bg-gray-800 hover:text-white"
            >
              Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
