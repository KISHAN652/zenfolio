import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-secondary py-16 md:py-24">
      <div className="container mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          <Badge variant="outline">About Me</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Who I Am
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Hello! I'm a dedicated and enthusiastic developer with a
              Bachelor's degree in Computer Applications. My journey in
              technology has been driven by a deep passion for building
              beautiful, functional, and user-centric web applications.
            </p>
            <p>
              I thrive on solving complex problems and continuously learning
              new technologies. When I'm not coding, you can find me exploring
              new hiking trails, reading a good book, or experimenting with new
              recipes in the kitchen.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Profile Picture"
              width={400}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint="profile portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
