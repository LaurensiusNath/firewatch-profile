import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone, Mail, Globe } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const FloatingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, setLanguage, t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroBottom - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'id', name: 'Bahasa', flag: '🇮🇩' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ];

  const trainingPrograms = [
    { key: 'basic', label: t('header.training.basic') },
    { key: 'advanced', label: t('header.training.advanced') },
    { key: 'medical', label: t('header.training.medical') },
    { key: 'hazmat', label: t('header.training.hazmat') }
  ];

  const services = [
    { key: 'consulting', label: t('header.services.consulting') },
    { key: 'certification', label: t('header.services.certification') },
    { key: 'equipment', label: t('header.services.equipment') }
  ];

  // Static header (before scroll)
  if (!isScrolled) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary-dark border-b border-primary-foreground/10">
        {/* Top Contact Bar */}
        <div className="bg-primary-dark/90 py-2 px-6">
          <div className="container mx-auto flex justify-between items-center text-sm text-primary-foreground/80">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{t('header.phone')}: +1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{t('header.email')}: info@firetraining.org</span>
              </div>
            </div>
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'language' ? null : 'language')}
                className="flex items-center space-x-2 px-3 py-1 rounded hover:bg-primary-foreground/10 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>{languages.find(l => l.code === language)?.flag}</span>
                <span>{languages.find(l => l.code === language)?.name}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'language' && (
                <div className="absolute top-full right-0 mt-1 bg-card border border-border rounded-lg shadow-lg min-w-[120px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg flex items-center space-x-2"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="py-4 px-6">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-primary-foreground">
              FIRE TRAINING <span className="text-accent">HSE</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-primary-foreground hover:text-accent transition-colors font-medium flex items-center space-x-1">
                  <span>{t('header.training')}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-lg shadow-lg min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {trainingPrograms.map((program) => (
                    <a
                      key={program.key}
                      href="#"
                      className="block px-4 py-3 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {program.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <button className="text-primary-foreground hover:text-accent transition-colors font-medium flex items-center space-x-1">
                  <span>{t('header.services')}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-lg shadow-lg min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {services.map((service) => (
                    <a
                      key={service.key}
                      href="#"
                      className="block px-4 py-3 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {service.label}
                    </a>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollToSection("about")}
                className="text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                {t('header.about')}
              </button>
              
              <button
                onClick={() => scrollToSection("contact")}
                className="text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                {t('header.contact')}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-primary-dark/95 backdrop-blur-sm border-t border-primary-foreground/10">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button className="block w-full text-left text-primary-foreground hover:text-accent transition-colors font-medium">
                {t('header.training')}
              </button>
              <button className="block w-full text-left text-primary-foreground hover:text-accent transition-colors font-medium">
                {t('header.services')}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                {t('header.about')}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                {t('header.contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Floating header (after scroll)
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-card/95 backdrop-blur-md rounded-2xl border border-border shadow-xl">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-xl font-bold text-foreground">
            FIRE <span className="text-accent">HSE</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'training' ? null : 'training')}
                className="text-foreground hover:text-accent transition-colors font-medium flex items-center space-x-1"
              >
                <span>{t('header.training')}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'training' && (
                <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-lg shadow-lg min-w-[200px] z-50">
                  {trainingPrograms.map((program) => (
                    <a
                      key={program.key}
                      href="#"
                      className="block px-4 py-3 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {program.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className="text-foreground hover:text-accent transition-colors font-medium flex items-center space-x-1"
              >
                <span>{t('header.services')}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-lg shadow-lg min-w-[200px] z-50">
                  {services.map((service) => (
                    <a
                      key={service.key}
                      href="#"
                      className="block px-4 py-3 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {service.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              {t('header.about')}
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              {t('header.contact')}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'language' ? null : 'language')}
                className="flex items-center space-x-1 px-3 py-1 rounded-lg hover:bg-muted transition-colors"
              >
                <span>{languages.find(l => l.code === language)?.flag}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'language' && (
                <div className="absolute top-full right-0 mt-1 bg-card border border-border rounded-lg shadow-lg min-w-[120px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg flex items-center space-x-2"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border px-6 py-4 space-y-4">
            <button className="block w-full text-left text-foreground hover:text-accent transition-colors font-medium">
              {t('header.training')}
            </button>
            <button className="block w-full text-left text-foreground hover:text-accent transition-colors font-medium">
              {t('header.services')}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors font-medium"
            >
              {t('header.about')}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors font-medium"
            >
              {t('header.contact')}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default FloatingHeader;