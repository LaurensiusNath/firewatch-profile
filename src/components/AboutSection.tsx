import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Users, Scale, DollarSign, Building, ShieldCheck, Bandage, HeartPulse } from "lucide-react";
import safetyEquipment from "@/assets/safety-equipment.jpg";

const AboutSection = () => {
  const priorities = [
    {
      icon: ShieldCheck,
      title: "Safety & Protection",
      description: "Fire fighters have a dangerous job. We work to make it safer. Learn what tools, resources, and support are available to protect you and your family.",
      link: "safety-protection"
    },
    {
      icon: HeartPulse,
      title: "Presumptive Health",
      description: "Fire fighters are at a greater risk for cancer, heart and lung disease, and behavioral health conditions. Find out what presumptive coverage is available.",
      link: "presumptive-health"
    },
    {
      icon: Users,
      title: "Cancer Awareness",
      description: "Job-related cancer is the leading cause of line-of-duty deaths in the fire service. Learn what we are doing to combat this deadly disease.",
      link: "cancer-awareness"
    },
    {
      icon: Scale,
      title: "Collective Bargaining",
      description: "Every worker deserves a voice at the table. Learn what the union is doing to secure local, state, and federal collective bargaining.",
      link: "collective-bargaining"
    },
    {
      icon: DollarSign,
      title: "Pay & Benefits",
      description: "Navigating pension systems and choosing benefits can be daunting. Our union is here to help, offering assistance for members and affiliate leaders.",
      link: "pay-benefits"
    },
    {
      icon: Building,
      title: "Training Excellence",
      description: "Professional development and training programs that meet the highest industry standards for fire safety and emergency response education.",
      link: "training-excellence"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="inline-block bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-accent/30 text-sm font-semibold tracking-wider text-accent mb-4">
            OUR PRIORITIES
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Matters Most to <span className="text-accent">Fire Fighters</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to fire fighter safety, health, and professional advancement drives everything we do. 
            These are the core areas where we focus our advocacy, training, and support efforts.
          </p>
        </div>

        {/* Priorities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {priorities.map((priority, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300 group border-0 bg-card hover:ring-2 hover:ring-accent">
              <CardContent className="p-8">
                <div className="bg-accent p-4 rounded-xl w-fit mb-6 group-hover:shadow-accent transition-all duration-300">
                  <priority.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {priority.title}
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">{priority.description}</p>
                <Button 
                  variant="outline" 
                  className="text-accent border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
            To advance the rights, safety, and future of fire fighters, emergency medical workers, and rescue workers 
            through comprehensive training, advocacy, and professional development programs that serve communities 
            across the United States and Canada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;