"use client";

import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ScreenshotsSection } from "@/components/screenshots-section";
import { WidgetsGallery } from "@/components/widgets-gallery";
import { MarketplaceCta } from "@/components/marketplace-cta";
import { DownloadSection } from "@/components/download-section";
import { SponsorSection } from "@/components/sponsor-section";
import { FaqSection } from "@/components/faq-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <WidgetsGallery />
      <MarketplaceCta />
      <DownloadSection />
      <SponsorSection />
      <FaqSection />
    </main>
  );
}
