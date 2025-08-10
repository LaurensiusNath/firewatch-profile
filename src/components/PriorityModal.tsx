import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShieldCheck, 
  HeartPulse, 
  Users, 
  Scale, 
  DollarSign, 
  Building,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";

interface PriorityModalProps {
  isOpen: boolean;
  onClose: () => void;
  priority: {
    icon: LucideIcon;
    title: string;
    description: string;
    link: string;
  } | null;
}

const priorityDetails = {
  "safety-protection": {
    fullDescription: "Fire fighters face numerous hazards daily, from structural collapses to chemical exposures. Our comprehensive safety program ensures every fire fighter has access to the latest protective equipment, safety protocols, and emergency response procedures.",
    benefits: [
      "State-of-the-art protective equipment",
      "Regular safety training updates",
      "24/7 emergency support system",
      "Family safety education programs"
    ],
    stats: [
      { label: "Injury Reduction", value: "65%" },
      { label: "Equipment Upgrades", value: "100%" },
      { label: "Safety Protocols", value: "50+" }
    ],
    youtubeId: "G5n2OoUTUmY"
  },
  "presumptive-health": {
    fullDescription: "Fire fighters have significantly higher rates of cancer, heart disease, and other serious health conditions due to occupational exposures. Our presumptive health coverage ensures you receive the medical care and support you deserve.",
    benefits: [
      "Comprehensive health screenings",
      "Presumptive disease coverage",
      "Mental health support services",
      "Early detection programs"
    ],
    stats: [
      { label: "Health Screenings", value: "5,000+" },
      { label: "Coverage Claims", value: "95%" },
      { label: "Early Detection", value: "40%" }
    ],
    youtubeId: "G5n2OoUTUmY"
  },
  "cancer-awareness": {
    fullDescription: "Job-related cancer is the leading cause of line-of-duty deaths among fire fighters. We're committed to education, prevention, and supporting those affected through comprehensive awareness and treatment programs.",
    benefits: [
      "Cancer prevention education",
      "Early screening programs",
      "Treatment support services",
      "Research funding initiatives"
    ],
    stats: [
      { label: "Lives Saved", value: "500+" },
      { label: "Awareness Programs", value: "200+" },
      { label: "Research Funding", value: "$2M+" }
    ],
    youtubeId: "U65F3f_s5w0"
  },
  "collective-bargaining": {
    fullDescription: "Every fire fighter deserves fair representation and a voice in their workplace conditions. Our collective bargaining efforts focus on securing better working conditions, fair compensation, and comprehensive benefits.",
    benefits: [
      "Fair wage negotiations",
      "Improved working conditions",
      "Comprehensive benefits packages",
      "Workplace rights protection"
    ],
    stats: [
      { label: "Contracts Negotiated", value: "150+" },
      { label: "Wage Increases", value: "25%" },
      { label: "Members Served", value: "10,000+" }
    ],
    youtubeId: "W0qgMr1sY-A"
  },
  "pay-benefits": {
    fullDescription: "Navigating complex pension systems and benefit structures can be overwhelming. Our dedicated team provides guidance and advocacy to ensure you receive the full compensation and benefits you've earned.",
    benefits: [
      "Pension planning assistance",
      "Benefits optimization guidance",
      "Retirement planning services",
      "Financial education programs"
    ],
    stats: [
      { label: "Pension Claims", value: "98%" },
      { label: "Benefit Increases", value: "$5M+" },
      { label: "Members Assisted", value: "8,000+" }
    ],
    youtubeId: "O155_u1g5SE"
  },
  "training-excellence": {
    fullDescription: "Professional development is crucial for career advancement and public safety. Our training programs meet the highest industry standards and prepare fire fighters for the challenges of modern emergency response.",
    benefits: [
      "Advanced certification programs",
      "Leadership development courses",
      "Technical skills training",
      "Career advancement support"
    ],
    stats: [
      { label: "Training Hours", value: "50,000+" },
      { label: "Certifications", value: "1,200+" },
      { label: "Success Rate", value: "95%" }
    ],
    youtubeId: "CZIjA34F31A"
  }
};

const PriorityModal = ({ isOpen, onClose, priority }: PriorityModalProps) => {
  if (!priority) return null;

  const details = priorityDetails[priority.link as keyof typeof priorityDetails];
  const Icon = priority.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto p-4 md:p-6">
        <DialogHeader className="pb-4 md:pb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-accent p-4 rounded-2xl">
              <Icon className="h-8 w-8 text-accent-foreground" />
            </div>
            <div>
              <DialogTitle className="text-3xl font-bold text-foreground mb-2">
                {priority.title}
              </DialogTitle>
              <Badge variant="secondary" className="text-sm">
                Priority Focus Area
              </Badge>
            </div>
          </div>
        </DialogHeader>

        {/* YouTube Video Preview */}
        {details?.youtubeId && (
          <div className="mb-6 md:mb-8 aspect-video w-full">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${details.youtubeId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <div className="space-y-6 md:space-y-8">
          {/* Overview */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Overview</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {details?.fullDescription}
            </p>
          </div>

          {/* Statistics */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4 md:mb-6">Impact & Results</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {details?.stats.map((stat, index) => (
                <Card key={index} className="border-0 bg-accent/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4 md:mb-6">Key Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {details?.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Get Involved
                </h3>
                <p className="text-muted-foreground">
                  Learn more about how this program can benefit you and your family.
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={onClose}>
                  Close
                </Button>
                <Button className="bg-accent hover:bg-accent/90">
                  Contact Us
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PriorityModal;