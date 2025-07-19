import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-secondary py-20 md:py-28">
      <div className="container mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="relative h-[450px] w-[450px]">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"></div>
            <Image
              src="https://placehold.co/400x400.png"
              alt="Profile Picture"
              width={400}
              height={400}
              className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover shadow-2xl transition-transform duration-300 hover:scale-105"
              data-ai-hint="profile portrait"
            />
          </div>
        </div>
        <div className="space-y-6">
          <Badge variant="outline" className="text-sm">
            About Me
          </Badge>
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Who I Am
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
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
      </div>
    </section>
  );
}
