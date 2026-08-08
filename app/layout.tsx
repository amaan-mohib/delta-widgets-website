import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "./providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { APP_NAME, WEBSITE_CANONICAL_URL, WEBSITE_URL } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME} - Ultimate Widget Maker for Windows`,
  },
  description:
    "Create beautiful, dynamic desktop widgets without coding. Drag-and-drop builder, custom templates, and real-time data integration.",
  keywords: [
    "widgets",
    "windows",
    "desktop",
    "customization",
    "drag-and-drop",
    "templates",
    "open-source",
    "media-widget",
    "date-and-time-widget",
  ],
  authors: [{ name: "Amaan Mohib" }],
  creator: "Amaan Mohib",
  publisher: APP_NAME,
  metadataBase: new URL(WEBSITE_URL),
  alternates: { canonical: WEBSITE_CANONICAL_URL + "/" },
  icons: {
    icon: "/delta-widgets-icon.png",
    shortcut: "/delta-widgets-icon.png",
    apple: "/delta-widgets-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: WEBSITE_URL,
    siteName: APP_NAME,
    title: `${APP_NAME} - Ultimate Widget Maker for Windows`,
    description:
      "Create beautiful, dynamic desktop widgets without coding. Drag-and-drop builder, custom templates, and real-time data integration.",
    images: [
      {
        url: "/delta-widgets-icon.png",
        width: 512,
        height: 512,
        alt: `${APP_NAME} Logo`,
      },
      {
        url: "/images/design-mode/ss-1.png",
        alt: `${APP_NAME} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@amaan_mohib",
    creator: "@amaan_mohib",
    title: `${APP_NAME} - Ultimate Widget Maker for Windows`,
    description:
      "Create beautiful, dynamic desktop widgets without coding. Drag-and-drop builder, custom templates, and real-time data integration.",
    images: ["/delta-widgets-icon.png", "/images/design-mode/ss-1.png"],
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5662195530056920"
          crossOrigin="anonymous"></script>
      </head>
      <body>
        <Providers>
          <div className="min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
