// app/marketing/page.tsx (Updated)
import HomeHero from '@/components/marketing/homecomponents/HomeHero';
import WhoWeAre from '@/components/marketing/homecomponents/WhoWeAre';
import WhyChooseUs from '@/components/marketing/homecomponents/WhyChooseUs';
import OurServices from '@/components/marketing/homecomponents/OurServices';
import WhyLadder from '@/components/marketing/homecomponents/WhyLadder';
import HowWeWork from '@/components/marketing/homecomponents/HowWeWork';
import ClientShowcase from '@/components/marketing/homecomponents/ClientShowcase';
import CustomerTestimonials from '@/components/marketing/homecomponents/CustomerTestimonials';
import CTASection from '@/components/marketing/homecomponents/CTASection';
import MarketFooter from '@/components/marketing/CommonComponents/MarketFooter';

export default function MarketingHome() {
  return (
    <>
      <HomeHero />
      <WhoWeAre />
      <WhyChooseUs />
      <OurServices />
      <WhyLadder />
      <HowWeWork />
      <ClientShowcase />
      <CustomerTestimonials />
      <CTASection />
      <MarketFooter />
    </>
  );
}
