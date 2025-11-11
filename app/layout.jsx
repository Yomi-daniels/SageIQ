import "./globals.css"
import { Inter, Sora } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
})
export const metadata = {
  title: "SAGEIQ - AI Telecom Training Platform",
  description:
    "Join TelecomX — where you learn cutting-edge telecom and AI skills with practical, real-world training experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  )
}
