import ServicesHero from "@/components/marketing/servicescomponents/ServicesHero";
import ServiceFlow from "@/components/marketing/servicescomponents/ServiceFlow";
import ServiceDetails from "@/components/marketing/servicescomponents/ServiceDetails";
import TargetedAds from "@/components/marketing/servicescomponents/TargetedAds";
import FeatureGrid from "@/components/marketing/servicescomponents/FeatureGrid";
import CTASection from "@/components/marketing/homecomponents/CTASection";
import MarketFooter from "@/components/marketing/CommonComponents/MarketFooter";


export default function MarketingServices() {
  return (
    <>
      <ServicesHero />
      <ServiceFlow />
      <ServiceDetails />
      <TargetedAds />
      <FeatureGrid />
      <CTASection />
      <MarketFooter />
      

    </>
  );
}
