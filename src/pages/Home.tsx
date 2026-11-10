import HeroSection from '../components/HeroSection';
import SustainabilitySection from '../components/SustainabilitySection';
import CategoriesSection from '../components/CategoriesSection';
import StatsSection from '../components/StatsSection';
import { HomeIntroduction } from '../components/CatalogContent';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { language } = useLanguage();
  return (
    <>
      <HeroSection />
      <SustainabilitySection />
      <StatsSection />
      <CategoriesSection />
      <HomeIntroduction language={language} />
    </>
  );
}
