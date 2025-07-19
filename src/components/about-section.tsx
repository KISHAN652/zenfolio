import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
        <div className="flex justify-center lg:col-span-1 lg:justify-start">
          <Image
            src="https://placehold.co/400x400.png"
            alt="Kishan Sondager"
            width={400}
            height={400}
            className="h-48 w-48 rounded-full object-cover shadow-lg sm:h-64 sm:w-64"
            data-ai-hint="profile picture"
            priority
          />
        </div>
        <div className="lg:col-span-2 text-center lg:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Kishan Sondager
          </h1>
          <h2 className="mt-2 font-headline text-xl font-medium text-primary sm:text-2xl">
            A Passionate Frontend Developer
          </h2>
          <div className="mt-6 space-y-4 text-base text-muted-foreground sm:text-lg">
            <p>
              Hello! I'm a dedicated and enthusiastic developer with a
              Bachelor's degree in Computer Applications. My journey in
              technology has been driven by a deep passion for building
              beautiful, functional, and user-centric web applications.
            </p>
            <p>
              I build accessible, inclusive products and digital experiences
              for the web. I thrive on solving complex problems and
              continuously learning new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
