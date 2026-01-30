'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { usePrivacy } from '@/context/PrivacyContext'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const { openPrivacy } = usePrivacy()

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    // Store acceptance in localStorage and set a cookie
    localStorage.setItem('cookieConsent', 'accepted')
    document.cookie = 'cookieConsent=accepted; path=/; max-age=' + (365 * 24 * 60 * 60) // 1 year
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 to-slate-800 border-t border-cyan-500/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">We use cookies</h3>
            <p className="text-sm text-gray-300">
              We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking accept, you agree to this use of cookies.
              <button onClick={openPrivacy} className="text-cyan-400 hover:text-cyan-300 ml-1 underline cursor-pointer bg-none border-none font-inherit">
                Learn more
              </button>
            </p>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button
            onClick={handleAccept}
            className="flex-1 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            className="flex-1 px-6 py-2 bg-slate-700 hover:bg-slate-600 text-gray-200 font-semibold rounded-lg transition-all duration-200 border border-slate-600"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  )
}
