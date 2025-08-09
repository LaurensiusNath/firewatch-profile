import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Flame } from "lucide-react";
import InteractiveMap from "./InteractiveMap";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      subtitle: "24/7 Emergency Line Available"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@firetraininghse.com", "emergency@firetraininghse.com"],
      subtitle: "Quick Response Guaranteed"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Jl. Badak LNG, Bontang Utara", "Bontang, Kalimantan Timur, Indonesia"],
      subtitle: "PT Badak LNG Facility"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      subtitle: "Emergency Services 24/7"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-l text-muted-foreground max-w-3xl mx-auto">
            Ready to enhance your fire safety knowledge or need HSE consulting? 
            Contact us today to discuss your training needs and safety requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-float">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                <div className="bg-accent p-2 rounded-lg">
                  <Flame className="h-6 w-6 text-accent-foreground" />
                </div>
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name *
                    </label>
                    <Input placeholder="Your first name" className="border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name *
                    </label>
                    <Input placeholder="Your last name" className="border-border" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="your.email@example.com" className="border-border" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" className="border-border" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Organization/Company
                  </label>
                  <Input placeholder="Your organization name" className="border-border" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Training Interest
                  </label>
                  <select className="w-full p-3 border border-border rounded-lg bg-background text-foreground">
                    <option value="">Select training program</option>
                    <option value="fire-safety">Fire Safety Training</option>
                    <option value="hse-consulting">HSE Consulting</option>
                    <option value="industrial-safety">Industrial Safety</option>
                    <option value="team-leadership">Team Leadership</option>
                    <option value="building-safety">Building Safety</option>
                    <option value="equipment-training">Equipment Training</option>
                    <option value="custom">Custom Training Solution</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your training needs, number of participants, preferred dates, or any specific requirements..."
                    className="min-h-[120px] border-border"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
              
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-accent border-0 text-accent-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Emergency Contact</h3>
                <p className="text-primary-foreground/90 mb-4">
                  For immediate fire safety emergencies or urgent consulting needs, 
                  our emergency response team is available 24/7.
                </p>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                  onClick={() => window.location.href = 'tel:12345'}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>

            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-fire transition-all duration-300 group border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-fire p-3 rounded-xl group-hover:shadow-glow transition-all duration-300">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1">{info.title}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                      <p className="text-sm text-primary font-medium mt-2">{info.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Interactive Map */}
            <InteractiveMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;