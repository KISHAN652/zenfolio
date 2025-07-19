import { Card, CardContent } from "@/components/ui/card";
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
  { name: "HTML5", icon: <CodeXml className="h-12 w-12 text-primary" /> },
  { name: "CSS3", icon: <Paintbrush className="h-12 w-12 text-primary" /> },
  { name: "JavaScript", icon: <Code className="h-12 w-12 text-primary" /> },
  { name: "Python", icon: <Code className="h-12 w-12 text-primary" /> },
  { name: "React", icon: <Code className="h-12 w-12 text-primary" /> },
  { name: "Next.js", icon: <Code className="h-12 w-12 text-primary" /> },
  { name: "Git", icon: <GitMerge className="h-12 w-12 text-primary" /> },
  { name: "Tailwind CSS", icon: <Wind className="h-12 w-12 text-primary" /> },
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-center space-y-4 text-center">
          <Badge variant="outline" className="text-sm">
            Skills
          </Badge>
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Technologies I Work With
          </h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            I have experience with a range of modern web technologies, from
            front-end to back-end.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="group flex transform flex-col items-center justify-center rounded-2xl border-transparent bg-secondary p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-primary/10 hover:shadow-2xl"
            >
              <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
                <div className="rounded-full bg-background p-4 transition-colors duration-300 group-hover:bg-primary/20">
                  {skill.icon}
                </div>
                <p className="text-lg font-semibold">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
