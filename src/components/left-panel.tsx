"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function LeftPanel() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "about";
      navLinks.forEach((link) => {
        const section = document.getElementById(link.href.substring(1));
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            currentSection = link.href.substring(1);
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-10 hidden h-screen w-full flex-col bg-secondary p-12 lg:flex lg:w-2/5 xl:w-1/3">
      <div className="flex h-full flex-col justify-between">
        <div>
          <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground">
            <Link href="#">Kishan Sondager</Link>
          </h1>
          <h2 className="mt-3 font-headline text-xl font-medium text-muted-foreground">
            A Passionate Frontend Developer
          </h2>
          <p className="mt-4 max-w-xs text-muted-foreground">
            I build accessible, inclusive products and digital experiences for
            the web.
          </p>

          <nav className="mt-12 hidden md:block">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "group flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:text-foreground",
                      activeSection === link.href.substring(1) &&
                        "text-foreground"
                    )}
                  >
                    <span
                      className={cn(
                        "h-px w-8 bg-muted-foreground transition-all duration-300 group-hover:w-16 group-hover:bg-foreground",
                        activeSection === link.href.substring(1) &&
                          "w-16 bg-foreground"
                      )}
                    ></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <Button size="lg" asChild className="rounded-full shadow-lg w-fit">
            <a href="/placeholder-resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              target="_blank"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              target="_blank"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              target="_blank"
              aria-label="Twitter"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
