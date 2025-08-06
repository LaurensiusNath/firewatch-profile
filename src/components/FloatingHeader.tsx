import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Flame, Phone, Mail, Search, Globe } from "lucide-react";

const FloatingHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-accent text-accent-foreground py-2 px-4 text-center text-sm">
        <p className="font-medium">Professional Fire Safety Training & HSE Services | <span className="font-semibold">Call 24/7: +1 (555) 123-4567</span></p>
      </div>

      {/* Main Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-primary/95 backdrop-blur-lg shadow-professional" 
            : "bg-primary"
        }`}
        style={{ top: isScrolled ? '0' : '40px' }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="bg-accent p-2 rounded-lg">
                <Flame className="h-8 w-8 text-accent-foreground" />
              </div>
              <div className="text-primary-foreground">
                <h1 className="text-2xl font-bold">FIRE TRAINING HSE</h1>
                <p className="text-sm text-primary-foreground/80">International Association of Fire Safety</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-6 text-primary-foreground">
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-accent transition-colors font-medium"
                >
                  ADVOCACY
                </button>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-accent transition-colors font-medium"
                >
                  HEALTH & SAFETY
                </button>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-accent transition-colors font-medium"
                >
                  TRAINING
                </button>
                <button 
                  onClick={() => scrollToSection("team")}
                  className="hover:text-accent transition-colors font-medium"
                >
                  EVENTS
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-accent transition-colors font-medium"
                >
                  NEWSROOM
                </button>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-primary-foreground/80">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">EN/FR/ES</span>
                </div>
                <Button 
                  size="sm"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Search className="h-4 w-4 mr-1" />
                  Search
                </Button>
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  MEMBERS
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-accent text-accent-foreground"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 p-4 bg-primary-dark rounded-xl">
              <div className="flex flex-col space-y-4 text-primary-foreground">
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-left hover:text-accent transition-colors font-medium"
                >
                  ADVOCACY
                </button>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-left hover:text-accent transition-colors font-medium"
                >
                  HEALTH & SAFETY
                </button>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-left hover:text-accent transition-colors font-medium"
                >
                  TRAINING
                </button>
                <button 
                  onClick={() => scrollToSection("team")}
                  className="text-left hover:text-accent transition-colors font-medium"
                >
                  EVENTS
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-left hover:text-accent transition-colors font-medium"
                >
                  NEWSROOM
                </button>
                <div className="pt-4 border-t border-primary-foreground/20">
                  <Button 
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    MEMBERS
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default FloatingHeader;