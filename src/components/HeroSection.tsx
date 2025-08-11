import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary-dark" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      >
        {/* Pastikan nama file ini sesuai dengan video Anda di folder /public */}
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-primary-foreground pt-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-tight tracking-tight">
            FIGHTING FOR THOSE ON{" "}
            <span className="text-accent">THE FRONTLINES</span>
          </h1>
          
          <p className="text-lg md:text-2xl lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            The Fire Training HSE Association represents one of the largest and most influential fire safety 
            training organizations, advancing the rights and safety of firefighters across North America.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 font-semibold shadow-lg"
              onClick={() => scrollToSection("about")}
            >
              WHO WE ARE
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 font-semibold backdrop-blur-sm"
              onClick={() => scrollToSection("services")}
            >
              JOIN US
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50,000+</div>
              <div className="text-primary-foreground/80">Professional Members</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/80">Affiliate Organizations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">85%</div>
              <div className="text-primary-foreground/80">Population Protected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;