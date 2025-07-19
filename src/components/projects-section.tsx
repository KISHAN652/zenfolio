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
    <section id="projects" className="w-full bg-secondary py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-center space-y-4 text-center">
          <Badge variant="outline" className="text-sm">
            Projects
          </Badge>
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            My Creative Works
          </h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Here are a few projects I've worked on recently.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group flex transform flex-col overflow-hidden rounded-2xl border-transparent bg-background shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="mb-2 font-headline text-2xl">
                  {project.title}
                </CardTitle>
                <div className="mb-4 flex flex-wrap gap-2">
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
                <CardDescription>{project.description}</CardDescription>
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
