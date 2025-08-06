import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, BookOpen } from "lucide-react";
import safetyEquipment from "@/assets/safety-equipment.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every training program prioritizes the safety and well-being of participants while building real-world emergency response skills."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in fire safety education and HSE consulting, continuously updating our methods with industry best practices."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building stronger, safer communities through comprehensive training programs that serve both individuals and organizations."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Staying ahead of industry developments and regulations to provide the most current and effective training solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Our <span className="text-primary">HSE Department</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over 15 years of experience in fire safety and HSE consulting, we are dedicated to providing 
            world-class training programs that save lives and protect communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Leading Fire Safety Education
            </h3>
            <p className="text-lg text-muted-foreground">
              Our comprehensive approach to fire safety training combines theoretical knowledge with hands-on practical experience. 
              We work with individuals, corporations, and government agencies to develop customized training solutions that meet 
              specific safety requirements and regulatory compliance standards.
            </p>
            <p className="text-lg text-muted-foreground">
              From basic fire safety awareness to advanced emergency response techniques, our programs are designed by certified 
              professionals with extensive field experience. We use state-of-the-art equipment and simulation technologies to 
              create realistic training scenarios that prepare participants for real emergency situations.
            </p>
            
            <div className="bg-gradient-fire p-6 rounded-xl text-primary-foreground">
              <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
              <p className="text-primary-foreground/90">
                To provide exceptional fire safety training and HSE consulting services that protect lives, 
                property, and the environment while fostering a culture of safety excellence.
              </p>
            </div>
          </div>

          <div className="relative">
            <img 
              src={safetyEquipment} 
              alt="Fire safety equipment and training materials"
              className="w-full h-96 object-cover rounded-2xl shadow-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="hover:shadow-fire transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-fire p-4 rounded-xl w-fit mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;