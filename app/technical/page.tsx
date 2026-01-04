// app/technical/page.tsx
import TechHomeHero from '@/components/technical/techhomecomponents/TechHomeHero';
import ImpactStats from '@/components/technical/techhomecomponents/ImpactStats';
import TServices from '@/components/technical/techhomecomponents/TServices';

export default function TechnicalHome() {
  return (
    <>
      <TechHomeHero />
      <ImpactStats />
      <TServices />
    </>
  );
}
