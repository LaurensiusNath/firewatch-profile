import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Award, Users, BookOpen, Shield, Quote } from "lucide-react";
import { useState } from "react";

const TeamSection = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const teamMembers = [
    {
      name: "Michael Rodriguez",
      position: "Chief Fire Safety Instructor",
      certifications: ["NFPA Certified", "Fire Inspector", "Emergency Response"],
      experience: "20+ years",
      specialties: ["Industrial Fire Safety", "Emergency Response Training"],
      photo: "/src/assets/team-photo.jpg",
      quote: "Safety is not just a priority, it's a way of life. Every day we save lives through proper training and preparation."
    },
    {
      name: "Sarah Chen",
      position: "HSE Consultant Director",
      certifications: ["OSHA Certified", "Environmental Safety", "Risk Assessment"],
      experience: "15+ years",
      specialties: ["Workplace Safety", "Environmental Compliance"],
      photo: "/src/assets/safety-equipment.jpg",
      quote: "Excellence in safety comes from understanding that prevention is always better than reaction."
    },
    {
      name: "David Thompson",
      position: "Training Coordinator",
      certifications: ["CPR/AED Instructor", "Safety Management", "Training Development"],
      experience: "12+ years",
      specialties: ["Training Program Development", "Safety Leadership"],
      photo: "/src/assets/hero-firefighter.jpg",
      quote: "Great leaders inspire others to achieve safety excellence through education and example."
    },
    {
      name: "Jennifer Martinez",
      position: "Fire Prevention Specialist",
      certifications: ["Fire Prevention", "Building Codes", "Safety Inspection"],
      experience: "18+ years",
      specialties: ["Building Safety", "Fire Prevention Systems"],
      photo: "/teamFireTrainingGround.webp",
      quote: "Prevention is the cornerstone of fire safety. Every inspection could save countless lives."
    }
  ];

  const handleCardFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Group team members into pairs for carousel slides
  const teamSlides = [];
  for (let i = 0; i < teamMembers.length; i += 2) {
    teamSlides.push(teamMembers.slice(i, i + 2));
  }

  const stats = [
    {
      icon: Award,
      value: "50+",
      label: "Certifications",
      description: "Combined professional certifications across our team"
    },
    {
      icon: Users,
      value: "500+",
      label: "Trainees Graduated",
      description: "Professionals trained in fire safety and HSE"
    },
    {
      icon: BookOpen,
      value: "100+",
      label: "Training Programs",
      description: "Comprehensive courses and workshops delivered"
    },
    {
      icon: Shield,
      value: "15+",
      label: "Years Experience",
      description: "Average years of professional experience per instructor"
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Expert <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team of certified professionals brings decades of experience in fire safety, 
            emergency response, and HSE consulting to provide world-class training programs.
          </p>
        </div>

        {/* Team Photo */}
        <div className="mb-16">
          <div className="relative">
            <img 
              src={"/teamFireTrainingGround.webp"} 
              alt="Fire Training HSE Department Team"
              className="w-full max-h-96 object-cover rounded-2xl shadow-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-"></div>
            <div className="absolute bottom-6 left-6 text-primary-foreground inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-l tracking-wider text-white mb-2">
              <h3 className="font-bold"> Dedicated to Safety Excellence</h3>
              <p className="font-normal text-sm text-primary-foreground/90">Professional fire safety and HSE training experts</p>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-fire transition-all duration-300 group border-0">
              <CardContent className="p-6">
                <div className="bg-accent p-4 rounded-xl w-fit mx-auto mb-4 group-hover:shadow-accent transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Members Carousel */}
        <div className="mb-16">
          <Carousel className="w-full">
            <CarouselContent>
              {teamSlides.map((slide, slideIndex) => (
                <CarouselItem key={slideIndex}>
                  <div className="grid md:grid-cols-2 gap-6 px-4">
                    {slide.map((member, memberIndex) => {
                      const globalIndex = slideIndex * 2 + memberIndex;
                      const isFlipped = flippedCards.includes(globalIndex);
                      
                      return (
                        <div key={globalIndex} className="perspective-1000">
                          <Card 
                            className="flip-card cursor-pointer h-[400px] relative"
                            onClick={() => handleCardFlip(globalIndex)}
                          >
                            <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                              {/* Front of Card */}
                              <div className="flip-card-front">
                                <CardContent className="p-6 h-full">
                                  <div className="text-center mb-4">
                                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-accent transition-all duration-300">
                                      <Users className="h-8 w-8 text-primary-foreground" />
                                    </div>
                                    <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                                      {member.name}
                                    </h4>
                                    <p className="text-accent font-medium">{member.position}</p>
                                  </div>

                                  <div className="space-y-4">
                                    <div>
                                      <p className="text-sm font-semibold text-foreground mb-2">Experience:</p>
                                      <Badge variant="outline" className="text-accent border-accent">
                                        {member.experience}
                                      </Badge>
                                    </div>

                                    <div>
                                      <p className="text-sm font-semibold text-foreground mb-2">Certifications:</p>
                                      <div className="flex flex-wrap gap-1">
                                        {member.certifications.map((cert, i) => (
                                          <Badge key={i} variant="secondary" className="text-xs">
                                            {cert}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>

                                    <div>
                                      <p className="text-sm font-semibold text-foreground mb-2">Specialties:</p>
                                      <ul className="space-y-1">
                                        {member.specialties.map((specialty, i) => (
                                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                            {specialty}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </CardContent>
                              </div>

                              {/* Back of Card */}
                              <div className="flip-card-back">
                                <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
                                  <div className="mb-6">
                                    <img 
                                      src={member.photo} 
                                      alt={member.name}
                                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-accent"
                                    />
                                    <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
                                    <p className="text-accent font-medium">{member.position}</p>
                                  </div>
                                  
                                  <div className="bg-accent/10 p-4 rounded-xl">
                                    <Quote className="h-6 w-6 text-accent mx-auto mb-3" />
                                    <p className="text-muted-foreground italic text-sm leading-relaxed">
                                      "{member.quote}"
                                    </p>
                                  </div>
                                </CardContent>
                              </div>
                            </div>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Team CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-primary border-0">
            <CardContent className="p-8 text-primary-foreground">
              <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-l mb-2 text-primary-foreground/90">
                We're always looking for qualified fire safety professionals to join our team
              </p>
              <div className="text-primary-foreground/80">
                Contact us to learn about career opportunities in fire safety training and HSE consulting
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;