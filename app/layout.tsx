import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Delta Widgets - Ultimate Widget Maker for Windows",
  description:
    "Create beautiful, dynamic desktop widgets without coding. Drag-and-drop builder, custom templates, and real-time data integration.",
  generator: "v0.app",
  keywords: [
    "widgets",
    "windows",
    "desktop",
    "customization",
    "drag-and-drop",
    "templates",
    "open-source",
  ],
  authors: [{ name: "Amaan Mohib" }],
  creator: "Amaan Mohib",
  publisher: "Delta Widgets",
  icons: {
    icon: "/delta-widgets-icon.png",
    shortcut: "/delta-widgets-icon.png",
    apple: "/delta-widgets-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://delta-widgets.vercel.app",
    siteName: "Delta Widgets",
    title: "Delta Widgets - Ultimate Widget Maker for Windows",
    description:
      "Create beautiful, dynamic desktop widgets without coding. Drag-and-drop builder, custom templates, and real-time data integration.",
    images: [
      {
        url: "/delta-widgets-icon.png",
        width: 512,
        height: 512,
        alt: "Delta Widgets Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@amaan_mohib",
    creator: "@amaan_mohib",
    title: "Delta Widgets - Ultimate Widget Maker for Windows",
    description:
      "Create beautiful, dynamic desktop widgets without coding. Drag-and-drop builder, custom templates, and real-time data integration.",
    images: ["/delta-widgets-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
