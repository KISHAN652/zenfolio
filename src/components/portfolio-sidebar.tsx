"use client";
import React from "react";
import Link from "next/link";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Code,
  Home,
  User,
  GraduationCap,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
  FileText,
  Shapes,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const navLinks = [
  { href: "#home", label: "Home", icon: <Home /> },
  { href: "#about", label: "About", icon: <User /> },
  { href: "#skills", label: "Skills", icon: <Shapes /> },
  { href: "#projects", label: "Projects", icon: <Briefcase /> },
  { href: "#education", label: "Education", icon: <GraduationCap /> },
  { href: "#contact", label: "Contact", icon: <Mail /> },
];

export function PortfolioSidebar() {
  const [activeSection, setActiveSection] = React.useState("home");

  React.useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";
      navLinks.forEach((link) => {
        const section = document.getElementById(link.href.substring(1));
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2">
          <Code className="h-7 w-7 text-primary" />
          <span className="font-headline text-xl font-bold group-data-[collapsible=icon]:hidden">
            Kishan Sondager
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navLinks.map((link) => (
            <SidebarMenuItem key={link.href}>
              <Link href={link.href} passHref legacyBehavior>
                <SidebarMenuButton
                  isActive={activeSection === link.href.substring(1)}
                  tooltip={link.label}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-col gap-2 p-2 group-data-[collapsible=icon]:items-center">
          <Button asChild className="w-full">
            <a href="/placeholder-resume.pdf" download>
              <FileText />
              <span className="group-data-[collapsible=icon]:hidden">
                Resume
              </span>
            </a>
          </Button>
          <div className="flex justify-center gap-2 group-data-[collapsible=icon]:flex-col">
            <Button variant="outline" size="icon" asChild>
              <Link href="#" target="_blank" aria-label="GitHub">
                <Github />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="#" target="_blank" aria-label="LinkedIn">
                <Linkedin />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="#" target="_blank" aria-label="Twitter">
                <Twitter />
              </Link>
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
