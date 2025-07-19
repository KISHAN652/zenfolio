import { Card, CardContent } from "@/components/ui/card";
import {
  CodeXml,
  Paintbrush,
  Code,
} from "lucide-react";

const skills = [
  { name: "HTML5", icon: <CodeXml className="h-10 w-10" /> },
  { name: "CSS3", icon: <Paintbrush className="h-10 w-10" /> },
  { name: "JavaScript", icon: <Code className="h-10 w-10" /> },
  {
    name: "Python",
    icon: (
      <svg
        className="h-10 w-10"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <title>Python</title>
        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM9.336 6.342c.823 0 1.5.677 1.5 1.5s-.677 1.5-1.5 1.5-1.5-.677-1.5-1.5.677-1.5 1.5-1.5zm6.336 11.316c.823 0 1.5.677 1.5 1.5s-.677 1.5-1.5 1.5-1.5-.677-1.5-1.5.677-1.5 1.5-1.5zm-6.07-5.118c2.253.007 4.773 1.48 4.773 4.25v2.25h-3V16.5c0-1.12-.473-2.25-1.773-2.25v-1.5zm5.533-5.543c-2.253-.007-4.773-1.48-4.773-4.25V3h3v2.25c0 1.12.473 2.25 1.773 2.25v1.5z" />
      </svg>
    ),
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 lg:py-24">
      <div className="space-y-4">
        <h2 className="font-headline text-3xl font-bold uppercase tracking-wider text-primary">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4 md:gap-6">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="group flex transform flex-col items-center justify-center rounded-lg border-2 border-transparent bg-secondary p-4 text-center transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-lg"
            >
              <CardContent className="flex flex-col items-center justify-center gap-3 p-0 text-primary transition-colors duration-300 group-hover:text-primary">
                {skill.icon}
                <p className="text-md font-semibold text-foreground">
                  {skill.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
