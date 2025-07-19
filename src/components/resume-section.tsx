import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function ResumeSection() {
  return (
    <section id="resume" className="py-12 lg:py-16">
      <div className="flex flex-col items-center text-center">
        <div className="gradient-border-card rounded-xl p-8 max-w-2xl w-full">
            <div className="bg-transparent">
                <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
                Download My Resume
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                Interested in my work? Click the button below to download a PDF
                version of my resume and learn more about my skills and experience.
                </p>
                <Button
                asChild
                size="lg"
                className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105"
                >
                <a href="/placeholder-resume.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                </a>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
