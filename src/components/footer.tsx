import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary py-8">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex items-center gap-6">
                        <Link href="#" target="_blank" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-primary">
                            <Github className="h-6 w-6" />
                        </Link>
                        <Link href="#" target="_blank" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary">
                            <Linkedin className="h-6 w-6" />
                        </Link>
                        <Link href="#" target="_blank" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-primary">
                            <Twitter className="h-6 w-6" />
                        </Link>
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Kishan Sondager. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
