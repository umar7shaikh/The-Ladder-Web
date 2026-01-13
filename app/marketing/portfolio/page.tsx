import HeroSection from '@/components/portfolio/hero/HeroSection';
import DansJamSection from '@/components/portfolio/projects/DansJamSection';
import LowCode from '@/components/portfolio/projects/LowCode';
import Project3 from '@/components/portfolio/projects/Project3';
import Project4 from '@/components/portfolio/projects/Project4';
import Project5 from '@/components/portfolio/projects/Project5';
import Project6 from '@/components/portfolio/projects/Project6';
import Project7 from '@/components/portfolio/projects/Project7';
import Project8 from '@/components/portfolio/projects/Project8';
import Project9 from '@/components/portfolio/projects/Project9';
import Project10 from '@/components/portfolio/projects/Project10';
import Project11 from '@/components/portfolio/projects/Project11';
import Project12 from '@/components/portfolio/projects/Project12';
import Project13 from '@/components/portfolio/projects/Project13';
import Project14 from '@/components/portfolio/projects/Project14';
import Project15 from '@/components/portfolio/projects/Project15';
import Project16 from '@/components/portfolio/projects/Project16';
import ContactSection from '@/components/portfolio/contact/ContactSection';

export default function PortfolioPage() {
  
  return (
    <div className="bg-black">
      <HeroSection />
      <div id="projects">
        <Project3 />
        <LowCode />
        <DansJamSection />
        <Project4 />
        <Project5 />
        <Project6 />
        <Project7 />
        <Project8 />
        <Project9 />
        <Project10 />
        <Project11 />
        <Project12 />
        <Project13 />
        <Project14 />
        <Project15 />
        <Project16 />
      </div>
      <ContactSection />
    </div>
  );
}
