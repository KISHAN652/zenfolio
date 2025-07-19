import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CodeXml,
  Paintbrush,
  Code,
  GitMerge,
  Database,
  Server,
  Wind,
} from "lucide-react";

const skills = [
  { name: "HTML5", icon: <CodeXml className="h-10 w-10 text-primary" /> },
  { name: "CSS3", icon: <Paintbrush className="h-10 w-10 text-primary" /> },
  { name: "JavaScript", icon: <Code className="h-10 w-10 text-primary" /> },
  { name: "Python", icon: <Code className="h-10 w-10 text-primary" /> },
  { name: "React", icon: <Code className="h-10 w-10 text-primary" /> },
  { name: "Next.js", icon: <Code className="h-10 w-10 text-primary" /> },
  { name: "Git", icon: <GitMerge className="h-10 w-10 text-primary" /> },
  { name: "Tailwind CSS", icon: <Wind className="h-10 w-10 text-primary" /> },
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center space-y-4 text-center">
          <Badge variant="outline">Skills</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Technologies I Work With
          </h2>
          <p className="max-w-[700px] text-muted-foreground">
            I have experience with a range of modern web technologies, from
            front-end to back-end.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4">{skill.icon}</div>
              <p className="font-semibold">{skill.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
