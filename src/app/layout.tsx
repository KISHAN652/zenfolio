import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Kishan Sondager",
  description: "A modern portfolio for a modern developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-body bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
