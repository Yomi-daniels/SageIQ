"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Loader2, CheckCircle } from "lucide-react"
import Enroll from "@/components/Enroll"

export default function Header() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    trainingInterest: "",
    experience: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle")
  const [progress, setProgress] = useState(0)
  const [showForm, setShowForm] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Simulate progress bar during submission
  useEffect(() => {
    let timer
    if (isSubmitting) {
      setProgress(0)
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer)
            return 100
          }
          return prev + 10
        })
      }, 200)
    }
    return () => clearInterval(timer)
  }, [isSubmitting])

  // Scroll behavior
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrolled(currentScroll > 20)
      setHidden(currentScroll > lastScrollY && currentScroll > 80)
      setLastScrollY(currentScroll)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    document.body.style.overflow = menuOpen || showForm ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [menuOpen, showForm])

  const scrollToSection = (id) => {
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMenuOpen(false)
  }

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await new Promise((res) => setTimeout(res, 2500)) // simulate API
      setSubmitStatus("success")
      setIsSubmitting(false)

      // Delay close with fade-out
      setTimeout(() => {
        setFadeOut(true)
        setTimeout(() => {
          setShowForm(false)
          setFadeOut(false)
          setSubmitStatus("idle")
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            trainingInterest: "",
            experience: "",
            message: "",
          })
        }, 600) // wait for fade animation to complete
      }, 2500)
    } catch {
      setSubmitStatus("error")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full relative z-50">
      {/* HEADER */}
      <motion.header
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`w-full flex items-center justify-between px-6 md:px-8 py-4 fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0E0C15]/90 shadow-lg backdrop-blur-md" : "bg-transparent"} ${!hidden ? "max-sm:border max-sm:border-gray-400 max-sm:rounded-full max-sm:mt-6 max-sm:w-[90%] max-sm:flex max-sm:ml-6 max-sm:bg-black max-sm:mx-auto" : ""}`}
      >
        {/* Logo */}
        <div className="flex items-center max-sm:mt-2 cursor-pointer" onClick={scrollToTop}>
          <div className="relative w-28 max-sm:w-12 h-12 max-sm:z-50">
            <Image src="/sageBrandLogo.png" alt="SageIQ Logo" fill priority className="object-contain relative z-10" />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12 px-6 py-6 transition-all duration-300 cursor-pointer">
          <button onClick={scrollToTop} className="text-white/80 hover:text-[#00D2FF] text-sm transition">Home</button>
          <button onClick={() => scrollToSection("About")} className="text-white/80 hover:text-[#00D2FF] text-sm transition">About</button>
          <button onClick={() => scrollToSection("services")} className="text-white/80 hover:text-[#00D2FF] text-sm transition">Services</button>
          <button onClick={() => scrollToSection("contact")} className="text-white/80 hover:text-[#00D2FF] text-sm transition">Contact</button>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button
            onClick={() => setShowForm(true)}
            className={`px-5 py-2 font-medium text-sm transition cursor-pointer ${
              scrolled
                ? "bg-white text-black hover:bg-gray-800 hover:text-white"
                : "bg-transparent border border-white/50 text-white hover:bg-[#00D2FF]"
            }`}
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white z-50">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
  </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center space-y-8 text-white text-[2rem] font-bold z-40"
          >
            <div className="relative w-24 h-24 mb-6">
              <Image src="/sageBrandLogo.png" alt="Logo" fill priority className="object-contain" onClick={scrollToTop} />
            </div>
            <button onClick={scrollToTop} className="hover:text-[#00D2FF]">Home</button>
            <button onClick={() => scrollToSection("About")} className="hover:text-[#00D2FF]">About</button>
            <button onClick={() => scrollToSection("services")} className="hover:text-[#00D2FF]">Services</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-[#00D2FF]">Contact</button>
            <button
              onClick={() => { setMenuOpen(false); setShowForm(true) }}
              className="px-5 py-2 rounded-full font-medium text-sm bg-white text-black hover:bg-text-cyan-400 hover:text-white"
            >
              Enroll Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
 {/* ENROLL FORM MODAL */}
<Enroll showForm={showForm} setShowForm={setShowForm} />

           
    </div>
  )
}
