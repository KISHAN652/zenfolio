import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star, School } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="w-full bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-center space-y-4 text-center">
          <Badge variant="outline" className="text-sm">
            Education
          </Badge>
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            My Academic Background
          </h2>
        </div>
        <div className="flex justify-center">
          <Card className="w-full max-w-3xl transform rounded-2xl border-transparent bg-secondary shadow-lg transition-all duration-300 hover:shadow-2xl">
            <CardHeader className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
              <School className="h-16 w-16 text-primary" />
              <div className="grid gap-1">
                <CardTitle className="font-headline text-2xl">
                  Bachelor of Computer Applications (BCA)
                </CardTitle>
                <p className="text-muted-foreground">
                  Marwadi University, Rajkot
                </p>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4 p-6 pt-0 md:pl-28">
              <div className="flex items-center">
                <Calendar className="mr-3 h-5 w-5 text-muted-foreground" />
                <span>Graduated: May 2025</span>
              </div>
              <div className="flex items-center">
                <Star className="mr-3 h-5 w-5 text-muted-foreground" />
                <span>CGPA: 7.04 / 10.0</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
