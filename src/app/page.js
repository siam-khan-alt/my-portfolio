import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import EducationSection from '@/components/EducationSection';
export default function Home() {
  return (
    <main className="">
      
      <HeroSection />
      <AboutSection />
      <EducationSection/>
      <ProjectsSection />
      <ContactSection />
     
    </main>
  );
}