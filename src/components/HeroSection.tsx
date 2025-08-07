import { Button } from "@/components/ui/button";
import { Shield, Users, Award, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-firefighter.jpg";
import { useTranslation } from "@/contexts/TranslationContext";

const HeroSection = () => {
  const { t } = useTranslation();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-primary-foreground pt-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            {t('hero.title')}{" "}
            <span className="text-accent">{t('hero.titleAccent')}</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 font-semibold shadow-lg"
              onClick={() => scrollToSection("about")}
            >
              {t('hero.whoWeAre')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 font-semibold backdrop-blur-sm"
              onClick={() => scrollToSection("services")}
            >
              {t('hero.joinUs')}
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50,000+</div>
              <div className="text-primary-foreground/80">{t('hero.stats.members')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/80">{t('hero.stats.affiliates')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">85%</div>
              <div className="text-primary-foreground/80">{t('hero.stats.population')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;