import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Flame,
  Shield,
  HardHat,
  Users,
  Building,
  Wrench,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react";

const ServicesSection = () => {
  const trainings = [
    {
      icon: Flame,
      title: "Fire Fighter Training Academy",
      description:
        "Comprehensive certification programs for aspiring fire fighters, including physical training, emergency response, and technical skills development.",
      duration: "12-16 weeks",
      certification: "NFPA Certified",
      level: "Entry Level",
      featured: true,
    },
    {
      icon: Shield,
      title: "Emergency Medical Services",
      description:
        "Advanced EMS training programs for fire fighters and emergency medical personnel, including paramedic certification and continuing education.",
      duration: "6-12 months",
      certification: "NREMT Certified",
      level: "Professional",
      featured: false,
    },
    {
      icon: HardHat,
      title: "Hazmat Operations",
      description:
        "Specialized hazardous materials response training covering identification, containment, and safe handling of dangerous substances.",
      duration: "40 hours",
      certification: "OSHA Certified",
      level: "Advanced",
      featured: false,
    },
    {
      icon: Users,
      title: "Leadership Development",
      description:
        "Command and leadership training for fire officers, including incident command, personnel management, and strategic planning.",
      duration: "5-8 weeks",
      certification: "FESHE Certified",
      level: "Leadership",
      featured: true,
    },
    {
      icon: Building,
      title: "Fire Prevention & Inspection",
      description:
        "Code enforcement and fire prevention training programs for inspectors and prevention specialists.",
      duration: "3-6 weeks",
      certification: "ICC Certified",
      level: "Specialist",
      featured: false,
    },
    {
      icon: Wrench,
      title: "Technical Rescue Operations",
      description:
        "Specialized rescue training including rope rescue, confined space, trench rescue, and vehicle extrication techniques.",
      duration: "2-4 weeks",
      certification: "NFPA Certified",
      level: "Technical",
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="inline-block bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-accent/30 text-sm font-semibold tracking-wider text-accent mb-4">
            PROFESSIONAL DEVELOPMENT
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Training <span className="text-accent">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive training and certification programs designed to
            advance fire fighter skills, safety knowledge, and professional
            development at every career level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((training, index) => (
            <Card
              key={index}
              className={`transition-all duration-300 group border-0 ${
                training.featured
                  ? "bg-card shadow-card relative"
                  : "bg-card hover:shadow-card hover:ring-2 hover:ring-accent"
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-start gap-4 mb-4">
                  <div
                    className={`p-4 rounded-xl w-fit ${
                      training.featured
                        ? "bg-accent shadow-accent"
                        : "bg-accent/80 group-hover:bg-accent group-hover:shadow-accent"
                    } transition-all duration-300`}
                  >
                    <training.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  {training.featured && (
                    <Badge
                      variant="destructive"
                      className="h-fit text-sm font-medium relative overflow-hidden absolute top-10 right-7 "
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full h-full animate-glow-sweep"></div>
                      <span className="relative z-10">Featured</span>
                    </Badge>
                  )}
                </div>
                <CardTitle
                  className={`text-xl ${
                    training.featured
                      ? "text-foreground"
                      : "text-foreground group-hover:text-accent"
                  } transition-colors`}
                >
                  {training.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{training.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock
                      className={`h-4 w-4 ${
                        training.featured ? "text-accent" : "text-accent"
                      }`}
                    />
                    <span className="text-foreground">
                      Duration: {training.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award
                      className={`h-4 w-4 ${
                        training.featured ? "text-accent" : "text-accent"
                      }`}
                    />
                    <span className="text-foreground">
                      {training.certification}
                    </span>
                  </div>
                  <Badge variant="secondary">{training.level}</Badge>
                </div>

                <Button
                  className={`w-full mt-6 transition-all duration-300 ${
                    training.featured
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                      : "bg-accent hover:bg-accent/90 text-accent-foreground hover:shadow-accent"
                  }`}
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {training.featured ? "Enroll Now" : "Learn More"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-primary rounded-2xl p-12 text-primary-foreground">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Advance Your Career?
          </h3>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Join thousands of fire fighters who have advanced their careers
            through our professional training programs. Contact us today to
            discuss enrollment and certification pathways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Information
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
