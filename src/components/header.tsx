"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Code, Menu, Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      let currentSection = "home";
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2">
          <Code className="h-8 w-8 text-primary" />
          <span className="font-headline text-xl font-bold">Kishan Sondager</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === link.href.substring(1)
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" size="icon" asChild>
            <Link href="#" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="#" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="#" target="_blank" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
        </div>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-8 p-6">
              <Link href="#home" className="flex items-center gap-2">
                <Code className="h-8 w-8 text-primary" />
                <span className="font-headline text-xl font-bold">Kishan Sondager</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      activeSection === link.href.substring(1)
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-4">
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
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
