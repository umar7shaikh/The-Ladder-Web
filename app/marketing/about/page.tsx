import AboutHero from "@/components/marketing/aboutcomponents/AboutHero";
import AboutWhoWeAre from "@/components/marketing/aboutcomponents/AboutWhoWeAre";
import MissionVision from "@/components/marketing/aboutcomponents/MissionVision";
import CoreValues from "@/components/marketing/aboutcomponents/CoreValues";
import CTASection from "@/components/marketing/homecomponents/CTASection";
import ClientShowcase from "@/components/marketing/homecomponents/ClientShowcase";
import MarketFooter from "@/components/marketing/CommonComponents/MarketFooter";
export default function MarketingAbout() {
  return (
    <>
      <AboutHero />
      <AboutWhoWeAre />
      <MissionVision />
      <CoreValues />
      <CTASection />
      <ClientShowcase />
      <MarketFooter />

    </>
  );
}
