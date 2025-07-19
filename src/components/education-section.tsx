import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="w-full py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center space-y-4 text-center">
          <Badge variant="outline">Education</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            My Academic Background
          </h2>
        </div>
        <div className="flex justify-center">
          <Card className="w-full max-w-2xl shadow-md">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="grid gap-1">
                <CardTitle>
                  Bachelor of Computer Applications (BCA)
                </CardTitle>
                <p className="text-muted-foreground">
                  Marwadi University, Rajkot
                </p>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-muted-foreground" />
                <span>Graduated: May 2025</span>
              </div>
              <div className="flex items-center">
                <Star className="mr-2 h-5 w-5 text-muted-foreground" />
                <span>CGPA: 7.04 / 10.0</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
