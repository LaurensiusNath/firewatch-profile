import { LucideIcon, Flame, Shield, HardHat, Users, Building, Wrench } from "lucide-react";

export interface CertificateDetail {
  name: string;
  issuer: string;
  previewImage: string;
  downloadUrl: string;
}

export interface ModuleTopic {
  week: string;
  title: string;
  content: string[];
}

export interface Training {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
  certification: string;
  level: string;
  featured: boolean;
  certifications_details: CertificateDetail[];
}

export const trainings: Training[] = [
  {
    slug: "fire-fighter-training-academy",
    icon: Flame,
    title: "Fire Fighter Training Academy",
    description: "Comprehensive certification programs for aspiring fire fighters, including physical training, emergency response, and technical skills development.",
    duration: "12-16 weeks",
    certification: "NFPA Certified",
    level: "Entry Level",
    featured: true,
    certifications_details: [
      {
        name: "NFPA 1001: Fire Fighter I & II",
        issuer: "National Fire Protection Association",
        previewImage: "/certs/TranskripNilaiSem6.png",
        downloadUrl: "/certs/TranskripNilaiSem6.pdf",
      },
      {
        name: "First Responder Operations",
        issuer: "State Fire Academy",
        previewImage: "/certs/TranskripNilaiSem6.png",
        downloadUrl: "/certs/TranskripNilaiSem6.pdf",
      },
    ],
  },
  {
    slug: "emergency-medical-services",
    icon: Shield,
    title: "Emergency Medical Services",
    description: "Advanced EMS training programs for firefighters and emergency medical personnel, including paramedic certification and continuing education.",
    duration: "6-12 months",
    certification: "NREMT Certified",
    level: "Professional",
    featured: false,
    certifications_details: [
      {
        name: "NREMT Paramedic",
        issuer: "National Registry of Emergency Medical Technicians",
        previewImage: "/certs/nremt-paramedic-sample.jpg",
        downloadUrl: "/certs/nremt-paramedic-sample.pdf",
      },
      {
        name: "State Paramedic License",
        issuer: "State Department of Health",
        previewImage: "/certs/state-paramedic-sample.jpg",
        downloadUrl: "/certs/state-paramedic-sample.pdf",
      },
    ],
  },
  {
    slug: "hazmat-operations",
    icon: HardHat,
    title: "Hazmat Operations",
    description: "Specialized hazardous materials response training covering identification, containment, and safe handling of dangerous substances.",
    duration: "40 hours",
    certification: "OSHA Certified",
    level: "Advanced",
    featured: false,
    certifications_details: [
      {
        name: "OSHA HAZWOPER 40-Hour",
        issuer: "Occupational Safety and Health Administration",
        previewImage: "/certs/hazwoper-sample.jpg",
        downloadUrl: "/certs/hazwoper-sample.pdf",
      },
    ],
  },
  {
    slug: "leadership-development",
    icon: Users,
    title: "Leadership Development",
    description: "Command and leadership training for fire officers, including incident command, personnel management, and strategic planning.",
    duration: "5-8 weeks",
    certification: "FESHE Certified",
    level: "Leadership",
    featured: true,
    certifications_details: [],
  },
  {
    slug: "fire-prevention-inspection",
    icon: Building,
    title: "Fire Prevention & Inspection",
    description: "Code enforcement and fire prevention training programs for inspectors and prevention specialists.",
    duration: "3-6 weeks",
    certification: "ICC Certified",
    level: "Specialist",
    featured: false,
    certifications_details: [],
  },
  {
    slug: "technical-rescue-operations",
    icon: Wrench,
    title: "Technical Rescue Operations",
    description: "Specialized rescue training including rope rescue, confined space, trench rescue, and vehicle extrication techniques.",
    duration: "2-4 weeks",
    certification: "NFPA Certified",
    level: "Technical",
    featured: false,
    certifications_details: [],
  },
];