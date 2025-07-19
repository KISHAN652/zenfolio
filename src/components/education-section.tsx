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
        <h2 className="font-headline text-3xl font-bold uppercase tracking-wider text-primary">
          Education
        </h2>
        <Card className="mt-4 transform rounded-lg border-2 border-transparent bg-secondary shadow-sm transition-all duration-300 hover:border-primary hover:shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <School className="h-10 w-10 text-primary" />
            <div className="grid gap-1">
              <CardTitle className="font-headline text-xl">
                Bachelor of Computer Applications (BCA)
              </CardTitle>
              <p className="text-muted-foreground">
                Marwadi University, Rajkot
              </p>
            </div>
          </CardHeader>
          <CardContent className="grid gap-2 pl-16 pt-0">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Graduated: May 2025</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Star className="mr-2 h-4 w-4" />
              <span>CGPA: 7.04 / 10.0</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
