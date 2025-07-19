import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { EducationSection } from "@/components/education-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSidebar } from "@/components/portfolio-sidebar";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { Sidebar, SidebarInset } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <>
      <PortfolioSidebar />
      <SidebarInset>
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
          <Footer />
        </main>
      </SidebarInset>
    </>
  );
}
