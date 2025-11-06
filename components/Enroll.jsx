import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Loader2, CheckCircle, CheckCircle2, Check, CheckIcon } from "lucide-react"
const Enroll = ({ showForm, setShowForm }) => {
   const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  trainingInterest: "",
  customTraining: "",
  experience: "",
  message: "",
})

      const [isSubmitting, setIsSubmitting] = useState(false)
      const [submitStatus, setSubmitStatus] = useState("idle")
      const [progress, setProgress] = useState(0)
    
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
    <div>
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
              <div className="relative w-full max-w-lg bg-[#0E0C15]  rounded-2xl shadow-[0_0_30px_#00D2FF33] overflow-hidden">
     <div
  className="absolute inset-0 rounded-3xl border-[5px] border-transparent animate-borderMove pointer-events-none"
  style={{
    background: "linear-gradient(90deg, #16EFFF, transparent, #16EFFF)",
    backgroundSize: "300% 300%",
    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    padding: "2px",
  }}
></div>

                {/* Header */}
                <div className="sticky top-0 flex items-center justify-between p-5  border-b border-[#00D2FF]/30">
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
                      <CheckIcon size={64} className="text-[#00D2FF] mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-white mb-2">Enrollment Successful!</h3>
                      <p className="text-gray-400">Thank you for enrolling, our team will reach out soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white placeholder-gray-500" />
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white placeholder-gray-500" />
                      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white placeholder-gray-500" />
                    {/* Training Interest */}
<select
  name="trainingInterest"
  value={formData.trainingInterest}
  onChange={handleChange}
  required
  className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white"
>
  <option value="">Select a training</option>
  <option value="web">Web Development</option>
  <option value="data">Data Science</option>
  <option value="ai">AI & Machine Learning</option>
  <option value="other">Other (specify below)</option>
</select>

{/* If 'Other' is selected, show custom input */}
{formData.trainingInterest === "other" && (
  <input
    type="text"
    name="customTraining"
    value={formData.customTraining || ""}
    onChange={handleChange}
    placeholder="Enter your specialty (e.g. Cybersecurity, UI/UX, etc.)"
    className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white placeholder-gray-500 mt-2"
  />
)}

                      <select name="experience" value={formData.experience} onChange={handleChange} required className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white">
                        <option value="">Select level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message (optional)" rows={3} className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white placeholder-gray-500 resize-none" />

                      <button type="submit" disabled={isSubmitting} className="w-full py-3 mt-6 bg-white text-black font-semibold rounded-lg hover:bg-[#00D2FF]/80 transition flex items-center justify-center gap-2">
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

export default Enroll
