"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      const sections = document.querySelectorAll("main section[id]");
      sections.forEach((section) => {
        const sectionEl = section as HTMLElement;
        const sectionTop = sectionEl.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          currentSection = sectionEl.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-lg border-b border-border/30">
      <div className="container mx-auto flex h-20 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="font-headline text-2xl font-bold text-primary">
          KS
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg font-medium text-muted-foreground transition-colors hover:text-primary",
                activeSection === link.href.substring(1) && "text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon" aria-label="Toggle Menu">
            <Menu className={cn("h-6 w-6 transition-transform duration-300", isMenuOpen ? "rotate-90 scale-0" : "rotate-0 scale-100")} />
             <X className={cn("h-6 w-6 absolute transition-transform duration-300", isMenuOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0")} />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-background/80 backdrop-blur-lg md:hidden">
          <nav className="flex h-full flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-3xl font-medium text-muted-foreground transition-colors hover:text-primary",
                  activeSection === link.href.substring(1) && "text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
