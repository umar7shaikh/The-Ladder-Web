// app/technical/page.tsx
import TechHomeHero from '@/components/technical/techhomecomponents/TechHomeHero';
import ImpactStats from '@/components/technical/techhomecomponents/ImpactStats';
import TServices from '@/components/technical/techhomecomponents/TServices';
import TWhyChooseUs from '@/components/technical/techhomecomponents/TWhyChooseUs';
import TTestimonials from '@/components/technical/techhomecomponents/TTestimonials';
import CTAHero from '@/components/technical/techhomecomponents/CTAHero';
import FAQSection from '@/components/technical/techhomecomponents/FAQSection';
import ContactSection from '@/components/technical/techhomecomponents/TContactSection';
import TechFooter from '@/components/technical/TechCommonComponents/TechFooter';

export default function TechnicalHome() {
  return (
    <>
      <TechHomeHero />
      <ImpactStats />
      <TServices />
      <TWhyChooseUs />
      <TTestimonials />
      <CTAHero />
      <FAQSection />
      <ContactSection />
      <TechFooter />
    </>
  );
}
