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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  )
}
