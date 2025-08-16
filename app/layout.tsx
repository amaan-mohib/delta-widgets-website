import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Delta Widgets - Ultimate Widget Maker for Windows",
  description:
    "Create beautiful, dynamic desktop widgets without coding. Drag-and-drop builder, custom templates, and real-time data integration.",
  generator: "v0.app",
  icons: {
    icon: "/delta-widgets-icon.png",
    shortcut: "/delta-widgets-icon.png",
    apple: "/delta-widgets-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <head>
        <style>{`
html {
  font-family: "Segoe UI", ${inter.style.fontFamily}, system-ui, -apple-system, sans-serif;
  --font-sans: "Segoe UI", var(--font-inter), system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
        `}</style>
      </head>
      <body
        {children}
        <Analytics />
      </body>
    </html>
  )
}
