"use client";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ScreenshotsSection } from "@/components/screenshots-section";
import { WidgetsGallery } from "@/components/widgets-gallery";
import { MarketplaceCta } from "@/components/marketplace-cta";
import { DownloadSection } from "@/components/download-section";
import { SponsorSection } from "@/components/sponsor-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
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
      <Footer />
    </div>
  );
}
