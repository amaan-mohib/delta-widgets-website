"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";

const AD_CLIENT = "ca-pub-5662195530056920";

// Transition / redirect screens with no publisher content. AdSense must not load
// here per the "Google-served ads on screens without publisher-content" policy.
const NO_AD_PATHS = ["/download"];

export function AdSense() {
  const pathname = usePathname();
  const isDownloadTransition = useSearchParams().get("download") === "true";

  if (NO_AD_PATHS.includes(pathname) || isDownloadTransition) {
    return null;
  }

  return (
    <Script
      id="adsbygoogle-init"
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`}
    />
  );
}
