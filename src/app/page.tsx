import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { EducationSection } from "@/components/education-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { LeftPanel } from "@/components/left-panel";

export default function Home() {
  return (
    <div className="relative antialiased">
      <div className="lg:flex lg:min-h-screen">
        <LeftPanel />
        <main
          id="content"
          className="flex-1 lg:pl-[40%] xl:pl-[33.3333%]"
        >
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
