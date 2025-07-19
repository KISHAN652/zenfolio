import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Project One",
    description:
      "A brief description of this cool project. It solves a real-world problem using modern technologies.",
    image: "https://placehold.co/600x400.png",
    imageHint: "web application screenshot",
    tags: ["React", "Next.js", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Two",
    description:
      "Another fantastic project that showcases skills in back-end development and database management.",
    image: "https://placehold.co/600x400.png",
    imageHint: "dashboard analytics",
    tags: ["Python", "Django", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Three",
    description:
      "This project focuses on beautiful UI/UX design and creating a seamless user experience.",
    image: "https://placehold.co/600x400.png",
    imageHint: "mobile app design",
    tags: ["Figma", "UI/UX", "JavaScript"],
    github: "#",
    demo: "#",
  },
   {
    title: "Project Four",
    description:
      "A mobile application designed to streamline daily tasks and improve productivity.",
    image: "https://placehold.co/600x400.png",
    imageHint: "productivity app",
    tags: ["React Native", "Firebase", "Redux"],
    github: "#",
    demo: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 lg:py-24">
      <div className="space-y-4">
        <h2 className="text-center font-headline text-3xl font-bold uppercase tracking-wider text-primary sm:text-4xl">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2">
          {projects.map((project) => (
             <Card
              key={project.title}
              className="group gradient-border-card flex transform flex-col overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="rounded-lg">
                <div className="overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <CardHeader className="p-0">
                    <CardTitle className="mb-2 font-headline text-xl sm:text-2xl">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-0">
                    <CardDescription className="mb-4 text-base text-muted-foreground">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-secondary/80 text-secondary-foreground"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="mt-6 flex justify-end gap-2 sm:gap-4 p-0">
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                    <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
