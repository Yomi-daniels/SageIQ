"use client"

import { useState } from "react"

import { motion, AnimatePresence } from "framer-motion"
import { X, Loader2, CheckCircle } from "lucide-react"



export function EnrollmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    trainingInterest: "",
    experience: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [progress, setProgress] = useState(0)

  const handleChange = () => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setProgress(0)

    // Simulate progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + 10 : prev))
    }, 200)

    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Submission failed")

      clearInterval(progressInterval)
      setProgress(100)
      setSubmitStatus("success")

      setTimeout(() => {
        onClose()
        setSubmitStatus("idle")
        setProgress(0)
      }, 2000)
    } catch (error) {
      console.error("Error:", error)
      clearInterval(progressInterval)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-[70] p-4"
          >
            <div className="relative w-full max-w-lg bg-[#0E0C15] border border-[#00D2FF]/40 rounded-2xl shadow-[0_0_30px_#00D2FF33] overflow-hidden">
              {/* Header */}
              <div className="sticky top-0 flex items-center justify-between p-5 bg-[#0E0C15]/90 border-b border-[#00D2FF]/30">
                <h2 className="text-2xl font-semibold text-white">
                  Training Enrollment
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-[#00D2FF] transition"
                >
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

              {/* Content */}
              <div className="p-6">
                {submitStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <CheckCircle
                      size={64}
                      className="text-[#00D2FF] mx-auto mb-4 animate-bounce"
                    />
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Enrollment Successful!
                    </h3>
                    <p className="text-gray-400">
                      Thank you for enrolling — our team will reach out soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm text-gray-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00D2FF] transition"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00D2FF] transition"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 801 234 5678"
                        className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00D2FF] transition"
                      />
                    </div>

                    {/* Training Interest */}
                    <div>
                      <label className="block text-sm text-gray-300 mb-1">
                        Training Interest *
                      </label>
                      <select
                        name="trainingInterest"
                        value={formData.trainingInterest}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white focus:outline-none focus:border-[#00D2FF] transition"
                      >
                        <option value="">Select a training</option>
                        <option value="web-development">Web Development</option>
                        <option value="data-science">Data Science</option>
                        <option value="ai-ml">AI & Machine Learning</option>
                        <option value="cloud-computing">Cloud Computing</option>
                      </select>
                    </div>

                    {/* Experience */}
                    <div>
                      <label className="block text-sm text-gray-300 mb-1">
                        Experience Level *
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white focus:outline-none focus:border-[#00D2FF] transition"
                      >
                        <option value="">Select level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm text-gray-300 mb-1">
                        Additional Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your goals..."
                        rows={3}
                        className="w-full px-4 py-2 bg-[#1A1825] border border-[#00D2FF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00D2FF] transition resize-none"
                      />
                    </div>

                    {/* Error Message */}
                    {submitStatus === "error" && (
                      <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 mt-6 bg-[#00D2FF] text-black font-semibold rounded-lg hover:bg-[#00D2FF]/80 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          AI is generating...
                        </>
                      ) : (
                        "Enroll Now"
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
  )
}
