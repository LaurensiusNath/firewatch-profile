import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-firefighter.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Fire Training &
            <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent"> HSE Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in">
            Professional fire safety training and health, safety & environmental consulting services. 
            Building safer communities through expert education and cutting-edge training programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection("services")}
            >
              Explore Training Programs
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Get Consultation
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-card/20 transition-all duration-300">
              <Users className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary-foreground">500+</div>
              <div className="text-primary-foreground/80">Trainees</div>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-card/20 transition-all duration-300">
              <Award className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary-foreground">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-card/20 transition-all duration-300">
              <Shield className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary-foreground">98%</div>
              <div className="text-primary-foreground/80">Success Rate</div>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-card/20 transition-all duration-300">
              <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary-foreground">24/7</div>
              <div className="text-primary-foreground/80">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;