"use client"

import Image from "next/image"
import Link from "next/link"
import { usePrivacy } from "@/context/PrivacyContext"
import { useTerms } from "@/context/TermsContext"
import { useCookie } from "@/context/CookieContext"

export default function Footer() {
  const { openPrivacy } = usePrivacy()
  const { openTerms } = useTerms()
  const { openCookie } = useCookie()
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id) => {
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
  }

  return (
    <footer className="border-t border-[#16EFFF]/40 bg-black">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div
              onClick={scrollToTop}
              className="relative w-36 h-14 cursor-pointer mb-4"
            >
              <Image
                src="/sageBrandLogo.png"
                alt="SageIQ Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              SageIQ helps businesses and individuals learn, grow, and scale
              with modern digital solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={scrollToTop}
                  className="text-sm text-white/60 hover:text-[#16EFFF] transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("About")}
                  className="text-sm text-white/60 hover:text-[#16EFFF] transition"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-white/60 hover:text-[#16EFFF] transition"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-white/60 hover:text-[#16EFFF] transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-[#16EFFF] transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-[#16EFFF] transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-[#16EFFF] transition">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={openPrivacy} className="text-sm text-white/60 hover:text-[#16EFFF] transition cursor-pointer bg-none border-none font-inherit">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={openTerms} className="text-sm text-white/60 hover:text-[#16EFFF] transition cursor-pointer bg-none border-none font-inherit">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={openCookie} className="text-sm text-white/60 hover:text-[#16EFFF] transition cursor-pointer bg-none border-none font-inherit">
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#16EFFF]/30 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {currentYear} SageIQ. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="text-sm text-white/60 hover:text-[#16EFFF] transition">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-white/60 hover:text-[#16EFFF] transition">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-white/60 hover:text-[#16EFFF] transition">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}