import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Shield, HardHat, Users, Building, Wrench, Clock, Award } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Flame,
      title: "Fire Safety Training",
      description: "Comprehensive fire safety education covering prevention, suppression, and emergency evacuation procedures.",
      features: ["Fire extinguisher training", "Evacuation procedures", "Fire prevention", "Emergency response"],
      duration: "1-3 days",
      level: "All Levels"
    },
    {
      icon: Shield,
      title: "HSE Consulting",
      description: "Professional health, safety, and environmental consulting services for workplace safety compliance.",
      features: ["Risk assessment", "Safety audits", "Compliance training", "Policy development"],
      duration: "Ongoing",
      level: "Corporate"
    },
    {
      icon: HardHat,
      title: "Industrial Safety",
      description: "Specialized training for industrial environments focusing on hazard identification and control.",
      features: ["Hazard analysis", "Safety protocols", "Equipment training", "Emergency drills"],
      duration: "2-5 days",
      level: "Professional"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Emergency response leadership training for supervisors and safety coordinators.",
      features: ["Crisis management", "Team coordination", "Decision making", "Communication"],
      duration: "3-5 days",
      level: "Advanced"
    },
    {
      icon: Building,
      title: "Building Safety",
      description: "Comprehensive building safety assessments and evacuation planning services.",
      features: ["Building codes", "Safety systems", "Evacuation plans", "Compliance check"],
      duration: "1-2 days",
      level: "Facility Managers"
    },
    {
      icon: Wrench,
      title: "Equipment Training",
      description: "Hands-on training with firefighting and safety equipment for maximum effectiveness.",
      features: ["Equipment operation", "Maintenance", "Safety checks", "Best practices"],
      duration: "1-2 days",
      level: "Technical"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Training <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive fire safety and HSE training programs designed to meet industry standards 
            and provide practical, life-saving skills for professionals and organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-fire transition-all duration-300 group border-0 bg-card">
              <CardHeader className="pb-4">
                <div className="bg-gradient-fire p-4 rounded-xl w-fit group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-foreground">Duration: {service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-foreground">Level: {service.level}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full mt-6 bg-gradient-fire hover:shadow-glow transition-all duration-300"
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-fire rounded-2xl p-8 text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">Ready to Enhance Your Safety Skills?</h3>
          <p className="text-xl mb-6 text-primary-foreground/90">
            Contact us today to discuss custom training solutions for your organization
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;