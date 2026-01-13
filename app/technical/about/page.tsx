import type { Metadata } from "next";
import TechAboutHero from "@/components/technical/aboutcomponents/TechAboutHero";
import TechAboutWhoWeAre from "@/components/technical/aboutcomponents/TechAboutWhoWeAre";
import TechMissionVision from "@/components/technical/aboutcomponents/TechMissionVision";
import TechCoreValues from "@/components/technical/aboutcomponents/TechCoreValues";
import CTAHero from "@/components/technical/techhomecomponents/CTAHero";
import ContactSection from "@/components/technical/techhomecomponents/TContactSection";
import TechFooter from "@/components/technical/TechCommonComponents/TechFooter";

export const metadata: Metadata = {
  title: "About The Ladder Tech | AI, Automation & Solutions",
  description: "Learn about The Ladder Tech's mission, vision, and expertise in delivering cutting-edge technical solutions for enterprise transformation.",
  openGraph: {
    title: "About The Ladder Tech",
    description: "Enterprise technical solutions and expertise",
    url: "https://theladder.com/technical/about",
    type: "website",
  },
};

export default function TechnicalAbout() {
  return (
    <>
      <TechAboutHero />
      <TechAboutWhoWeAre />
      <TechMissionVision />
      <TechCoreValues />
      <CTAHero />
      <ContactSection />
      <TechFooter />
    </>
  );
}
