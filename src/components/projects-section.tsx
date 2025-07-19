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
];

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 lg:py-24">
      <div className="space-y-4">
        <h2 className="font-headline text-3xl font-bold uppercase tracking-wider text-primary">
          Projects
        </h2>
        <div className="grid gap-8 pt-4 sm:grid-cols-1">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group flex transform flex-col overflow-hidden rounded-lg border-2 border-transparent bg-secondary shadow-sm transition-all duration-300 hover:border-primary hover:shadow-lg lg:flex-row"
            >
              <div className="relative lg:w-1/3">
                 <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
              </div>
              <div className="flex flex-1 flex-col">
                <CardContent className="flex-grow p-6">
                  <CardTitle className="mb-2 font-headline text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-4 p-6 pt-0">
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
