import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Star, School } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 py-20 lg:py-24">
      <div className="space-y-4">
        <h2 className="text-center font-headline text-3xl font-bold uppercase tracking-wider text-primary sm:text-4xl">
          Education
        </h2>
        <div className="flex justify-center pt-8">
          <div className="gradient-border-card rounded-lg w-full max-w-lg">
             <Card className="mt-0 w-full transform rounded-lg border-none bg-transparent shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/20 backdrop-blur-none">
              <CardHeader className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                <School className="h-10 w-10 shrink-0 text-primary" />
                <div className="grid gap-1">
                  <CardTitle className="font-headline text-xl sm:text-2xl">
                    Bachelor of Computer Applications (BCA)
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Marwadi University, Rajkot
                  </p>
                </div>
              </CardHeader>
              <CardContent className="grid gap-2 pt-0 sm:pl-16">
                <div className="flex items-center justify-center text-sm text-muted-foreground sm:justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Graduated: May 2025</span>
                </div>
                <div className="flex items-center justify-center text-sm text-muted-foreground sm:justify-start">
                  <Star className="mr-2 h-4 w-4" />
                  <span>CGPA: 7.04 / 10.0</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
