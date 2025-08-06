import { Button } from "@/components/ui/button";
import { Shield, Users, Award, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-firefighter.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background with Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 to-primary/95" />
        {/* Professional Pattern Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-primary-foreground pt-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            FIGHTING FOR THOSE ON 
            <span className="block text-accent">THE FRONTLINES</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-4xl">
            The Fire Training HSE Association represents one of the largest and most influential fire safety 
            training organizations. We are committed to advancing the rights, safety, and future of fire fighters, 
            emergency medical workers, and rescue workers across the United States and Canada.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 font-semibold"
              onClick={() => scrollToSection("about")}
            >
              WHO WE ARE
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 font-semibold transition-all duration-300"
              onClick={() => scrollToSection("services")}
            >
              JOIN US
            </Button>
          </div>

        </div>
      </div>

      {/* Commitment Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary-dark/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center text-primary-foreground">
            <h3 className="text-sm font-semibold tracking-wider text-accent mb-4">OUR COMMITMENT</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">OVER A CENTURY OF SERVICE</h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-4xl mx-auto">
              The Fire Training HSE Association represents over 50,000 full-time professional fire fighters 
              and emergency medical workers in 500+ affiliates across the United States and Canada. 
              Our members proudly protect more than 85% of the population of our two great nations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;