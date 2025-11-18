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
  title: "Sage IQ - Smart AI Automation Platform",
  description:
    "Sage IQ helps you automate tasks, generate ideas, and streamline your workflow using the power of AI.",
  openGraph: {
    title: "Sage IQ - Smart AI Automation Platform",
    description:
      "Automate tasks, generate content, and make data-driven decisions with Sage IQ — your personal AI assistant for business growth.",
    url: "https://sageiq.com", // replace with your actual domain
    siteName: "Sage IQ",
    images: [
      {
        url: "public\sagelogo.png", // add your image inside the /public folder
        width: 1200,
        height: 630,
        alt: "Sage IQ Preview",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  )
}
