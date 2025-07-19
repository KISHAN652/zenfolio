"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
          <div className="text-center text-sm text-muted-foreground md:text-left">
            <p>&copy; {currentYear} John Doe. All Rights Reserved.</p>
            <p>Built with Next.js and Tailwind CSS.</p>
          </div>
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
      </div>
    </footer>
  );
}
