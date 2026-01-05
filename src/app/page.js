import SpotlightEffect from '@/components/SpotlightEffect';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MERNStackSection from '@/components/MERNStackSection';
import ArchitectureSection from '@/components/ArchitectureSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <SpotlightEffect />
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <MERNStackSection />
        <ArchitectureSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}