import React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Cormorant_Garamond } from "next/font/google"

import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-playfair",
})

const inter = dmSans; // Declare inter variable
const playfair = cormorant; // Declare playfair variable

export const metadata: Metadata = {
  title: "Soko Gin | A Craft Spirit Born of African Heritage",
  description:
    "Soko Gin is a luxury craft spirit rooted in African heritage. Discover our story, explore our botanicals, and experience the spirit of Soko.",
}

export const viewport: Viewport = {
  themeColor: "#f0ebe3",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
