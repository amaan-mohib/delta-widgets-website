import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ScreenshotsSection } from "@/components/screenshots-section";
import { WidgetsGallery } from "@/components/widgets-gallery";
import { MarketplaceCta } from "@/components/marketplace-cta";
import { DownloadSection } from "@/components/download-section";
import { SponsorSection } from "@/components/sponsor-section";
import { FaqSection } from "@/components/faq-section";
import { APP_NAME, WEBSITE_URL } from "@/lib/utils";

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: APP_NAME,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Windows 10, Windows 11",
  description:
    "A free, open-source no-code desktop widget maker for Windows. Build widgets with a drag-and-drop editor, custom HTML, or embedded URLs.",
  url: WEBSITE_URL,
  downloadUrl: `${WEBSITE_URL}/download`,
  license: "https://www.gnu.org/licenses/gpl-3.0.html",
  author: { "@type": "Person", name: "Amaan Mohib" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default async function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
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
