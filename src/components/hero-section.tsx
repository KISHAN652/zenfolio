import { Button } from "@/components/ui/button";
import { Download, MoveRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full bg-background py-24 md:py-32 lg:py-40"
    >
      <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="space-y-4">
            <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                Kishan Sondager
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              A Passionate Frontend Developer Crafting Modern Web Experiences.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="rounded-full shadow-lg">
              <a href="/placeholder-resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full shadow-lg"
            >
              <Link href="#contact">
                Get in Touch
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
