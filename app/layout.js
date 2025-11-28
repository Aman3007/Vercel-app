import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "AI Automation Platform | Automate  with AI",
  description:
    "Transform your workflow with intelligent automation. Save time, reduce costs, and scale your business effortlessly with our AI-powered platform.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <Analytics />
      </body>
    </html>
  )
}
