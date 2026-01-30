'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { X, Cookie } from 'lucide-react' 
import { useCookie } from '@/context/CookieContext'

const CookiePolicyModal = () => {
  const { isCookieOpen, closeCookie } = useCookie()
  const y = useMotionValue(0)
  const ySpring = useSpring(y, { stiffness: 200, damping: 30 })

  useEffect(() => {
    if (isCookieOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isCookieOpen])

  return (
    <AnimatePresence>
      {isCookieOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCookie}
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
                <div className="relative px-6 py-5 border-b border-primary/20 bg-gradient-to-r from-primary/3 to-transparent flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-300/10 flex items-center justify-center">
                      <Cookie className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground">Cookie Policy</h2>
                      <p className="text-sm text-muted-foreground">How we use cookies</p>
                    </div>
                  </div>
                  <button
                    onClick={closeCookie}
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
                    <h3 className="text-lg font-semibold text-foreground mb-3">What Are Cookies?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Cookies are small files stored on your device that help the site remember preferences and understand usage patterns.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Cookies We Use</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We use essential cookies for core functionality, analytics cookies to understand usage, and preference cookies to remember your settings.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Managing Cookies</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You can control cookies through your browser settings or via our consent banner. Disabling some cookies may affect site functionality.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Third Parties</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Some cookies are set by third-party services (analytics, ads). Review their privacy policies for more details.
                    </p>
                  </section>

                  <section>
                    <p className="text-xs text-muted-foreground italic">
                      Last updated: January 30, 2026. For cookie questions contact <a href="mailto:privacy@sageiq.com" className="text-primary hover:text-primary/80 underline">privacy@sageiq.com</a>.
                    </p>
                  </section>
                </div> 

                {/* Footer */}
                <div className="relative px-6 py-4 bg-cyan-500 border-t border-primary/20 bg-gradient-to-r from-transparent to-primary/3">

                   <button
                    onClick={closeCookie}
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

export default CookiePolicyModal
