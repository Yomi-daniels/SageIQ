"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Loader2, CheckCircle } from "lucide-react"

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
      <header
        className={`w-full flex items-center justify-between px-6 md:px-8 py-4 fixed top-0 left-0 z-50 transition-all duration-300
        ${scrolled ? "bg-[#0E0C15]/90 shadow-lg backdrop-blur-md" : "bg-transparent"}
        ${hidden ? "-translate-y-full" : "translate-y-0 max-sm:border max-sm:border-gray-400 max-sm:rounded-full max-sm:mt-6 max-sm:w-[90%] max-sm:flex max-sm:ml-6 max-sm:bg-black max-sm:mx-auto"}`}
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
      </header>

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
              className="px-5 py-2 rounded-full font-medium text-sm bg-white text-black hover:bg-[#00D2FF] hover:text-white"
            >
              Enroll Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ENROLL FORM MODAL */}
      <AnimatePresence>
        {showForm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: fadeOut ? 0 : 1, y: fadeOut ? 40 : 0, scale: fadeOut ? 0.95 : 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed inset-0 flex items-center justify-center z-[70] p-4"
            >
              <div className="relative w-full max-w-lg bg-[#0E0C15] border border-[#00D2FF]/40 rounded-2xl shadow-[0_0_30px_#00D2FF33] overflow-hidden">
                {/* Header */}
                <div className="sticky top-0 flex items-center justify-between p-5 bg-[#0E0C15]/90 border-b border-[#00D2FF]/30">
                  <h2 className="text-2xl font-semibold text-white">Training Enrollment</h2>
                  <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-[#00D2FF] transition">
                    <X size={24} />
                  </button>
                </div>

                {/* Progress Bar */}
                {isSubmitting && (
                  <div className="h-1 w-full bg-[#0E0C15]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "easeInOut", duration: 0.3 }}
                      className="h-1 bg-[#00D2FF]"
                    />
                  </div>
                )}

                {/* Form Content */}
                <div className="p-6">
                  {submitStatus === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-10"
                    >
                      <CheckCircle size={64} className="text-[#00D2FF] mx-auto mb-4 animate-bounce" />
                      <h3 className="text-lg font-semibold text-white mb-2">Enrollment Successful!</h3>
                      <p className="text-gray-400">Thank you for enrolling — our team will reach out soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white placeholder-gray-500" />
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white placeholder-gray-500" />
                      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white placeholder-gray-500" />
                      <select name="trainingInterest" value={formData.trainingInterest} onChange={handleChange} required className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white">
                        <option value="">Select a training</option>
                        <option value="web">Web Development</option>
                        <option value="data">Data Science</option>
                        <option value="ai">AI & Machine Learning</option>
                      </select>
                      <select name="experience" value={formData.experience} onChange={handleChange} required className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white">
                        <option value="">Select level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message (optional)" rows={3} className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white placeholder-gray-500 resize-none" />

                      <button type="submit" disabled={isSubmitting} className="w-full py-3 mt-6 bg-[#00D2FF] text-black font-semibold rounded-lg hover:bg-[#00D2FF]/80 transition flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            AI is generating...
                          </>
                        ) : (
                          "Submit Enrollment"
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
