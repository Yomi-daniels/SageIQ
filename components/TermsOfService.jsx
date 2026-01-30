'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { X, FileText } from 'lucide-react' 
import { useTerms } from '@/context/TermsContext'

const TermsOfServiceModal = () => {
  const { isTermsOpen, closeTerms } = useTerms()
  const y = useMotionValue(0)
  const ySpring = useSpring(y, { stiffness: 200, damping: 30 })

  useEffect(() => {
    if (isTermsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isTermsOpen])

  return (
   <AnimatePresence>
      {isTermsOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeTerms}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-[60]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-[70] p-4 "
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl max-h-[85vh] overflow-y-scroll overflow-x-hidden "
            >
              {/* Glow Effect - Thicker Cyan */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-cyan-400/30 rounded-xl blur-2xl opacity-70" />

              {/* Main Card */}
              <motion.div style={{ y: ySpring }} className="relative glass-card rounded-xl border-2 border-cyan-400/30 overflow-hidden flex flex-col">
                {/* Animated Border */}
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none opacity-0"
                  style={{
                    background: 'linear-gradient(90deg, hsl(var(--primary)), transparent 40%, transparent 60%, hsl(var(--primary)))',
                    backgroundSize: '200% 100%',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '2px',
                  }}
                />

                {/* Header */}                 
                <div className="relative px-6 py-5 border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-300/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground">Terms of Service</h2>
                      <p className="text-sm text-muted-foreground">Please read carefully</p>
                    </div>
                  </div>
                  <button
                    onClick={closeTerms}
                    className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-cyan-500 hover:text-foreground hover:bg-secondary transition-all duration-200"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Content */}
                <div
                  className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-primary scrollbar-modal relative"
                  onScroll={(e) => {
                    const el = e.target
                    const max = el.scrollHeight - el.clientHeight
                    const progress = max ? el.scrollTop / max : 0
                    const offset = progress * 18
                    y.set(-offset)
                  }}
                >
                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Acceptance of Terms</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      By using Sage IQ you agree to these Terms. If you do not agree, please do not use the service.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">User Responsibilities</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You must provide accurate information and use the service lawfully. Prohibited actions include unauthorized access, harassment, or misuse of content.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Enrollment & Payments</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Enrollment terms, fees, and refund policies are presented during checkout. Report payment issues to support; recurring billing details are described at purchase.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Termination & Liability</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sage IQ may suspend or terminate accounts for violations. To the extent permitted by law, we are not liable for indirect, special, or consequential damages.
                    </p>
                  </section>

                  <section>
                    <p className="text-xs text-muted-foreground italic">
                      Last updated: January 30, 2026. Questions? Contact <a href="mailto:privacy@sageiq.com" className="text-primary hover:text-primary/80 underline">privacy@sageiq.com</a>.
                    </p>
                  </section>
                </div>

                {/* Footer */}
                <div className="relative px-6 py-4 bg-cyan-500 border-t border-primary/20 bg-gradient-to-r from-transparent to-primary/3">

                   <button
                    onClick={closeTerms}
                    className="w-8 h-8 text-right rounded-lg bg-white cursor-pointer flex items-center justify-center text-cyan-500 hover:text-foreground hover:bg-cyan-300 transition-all duration-200 "
                  >
                    <X size={18} />
                  </button>
                </div>
                </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default TermsOfServiceModal
