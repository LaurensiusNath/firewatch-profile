import {
  Flame,
  Shield,
  HardHat,
  Users,
  Building,
  Wrench,
  Mountain,
  Search as SearchIcon,
  LucideIcon,
} from "lucide-react"

export interface TrainingProgram {
  id: string
  slug: string
  icon: LucideIcon
  title: string
  description: string
  duration: string
  level: "Entry Level" | "Intermediate" | "Professional" | "Advanced" | "Leadership" | "Specialist" | "Technical"
  certification: string
  location: string
  rating: number
  reviews: number
  price: number
  featured: boolean
  category: string
  instructor: string
  startDate: string
  image: string
  tags: string[]
}

export const trainingPrograms: TrainingProgram[] = [
  {
    id: "1",
    slug: "fire-fighter-training-academy",
    icon: Flame,
    title: "Fire Fighter Training Academy",
    description:
      "Comprehensive certification programs for aspiring fire fighters, including physical training, emergency response, and technical skills development.",
    duration: "12-16 weeks",
    level: "Entry Level",
    certification: "NFPA Certified",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviews: 245,
    price: 6500,
    featured: true,
    category: "Fire Safety",
    instructor: "Captain Mike Rodriguez",
    startDate: "2024-03-15",
    image: "/news1.jpeg",
    tags: ["Physical Training", "Emergency Response", "Safety Protocols"],
  },
  {
    id: "2",
    slug: "emergency-medical-services",
    icon: Shield,
    title: "Emergency Medical Services",
    description:
      "Advanced EMS training programs for firefighters and emergency medical personnel, including paramedic certification and continuing education.",
    duration: "6-12 months",
    level: "Professional",
    certification: "NREMT Certified",
    location: "New York, NY",
    rating: 4.9,
    reviews: 127,
    price: 8500,
    featured: true,
    category: "Medical Emergency",
    instructor: "Dr. Sarah Johnson",
    startDate: "2024-03-20",
    image: "/news2.jpg",
    tags: ["Paramedic", "Life Support", "Medical Training"],
  },
  {
    id: "3",
    slug: "hazardous-materials-response",
    icon: HardHat,
    title: "Hazardous Materials Response",
    description:
      "Specialized training for handling hazardous materials incidents, chemical spills, and environmental emergencies with proper safety protocols.",
    duration: "8-10 weeks",
    level: "Intermediate",
    certification: "HAZMAT Certified",
    location: "Houston, TX",
    rating: 4.7,
    reviews: 89,
    price: 5200,
    featured: false,
    category: "Hazmat",
    instructor: "Chief David Chen",
    startDate: "2024-04-01",
    image: "/news3.jpg",
    tags: ["Chemical Safety", "Environmental", "Specialized Equipment"],
  },
  {
    id: "4",
    slug: "technical-rescue-operations",
    icon: Wrench,
    title: "Technical Rescue Operations",
    description:
      "Advanced rescue techniques including rope rescue, confined space, trench rescue, and structural collapse operations for emergency responders.",
    duration: "14-18 weeks",
    level: "Technical",
    certification: "NFPA 1006 Certified",
    location: "Denver, CO",
    rating: 4.6,
    reviews: 156,
    price: 7800,
    featured: false,
    category: "Technical Rescue",
    instructor: "Lieutenant Anna Martinez",
    startDate: "2024-04-10",
    image: "/news4.jpg",
    tags: ["Rope Rescue", "Confined Space", "Structural Collapse"],
  },
  {
    id: "5",
    slug: "wildland-fire-suppression",
    icon: Mountain,
    title: "Wildland Fire Suppression",
    description:
      "Comprehensive wildland firefighting training covering fire behavior, suppression tactics, safety protocols, and equipment operation.",
    duration: "6-8 weeks",
    level: "Intermediate",
    certification: "S-130/S-190 Certified",
    location: "Phoenix, AZ",
    rating: 4.5,
    reviews: 203,
    price: 4800,
    featured: false,
    category: "Wildland Fire",
    instructor: "Forest Ranger Tom Wilson",
    startDate: "2024-05-01",
    image: "/news1.jpeg",
    tags: ["Fire Behavior", "Suppression Tactics", "Safety Protocols"],
  },
  {
    id: "6",
    slug: "fire-investigation-arson",
    icon: SearchIcon,
    title: "Fire Investigation & Arson",
    description:
      "Professional training in fire scene investigation, evidence collection, cause determination, and courtroom testimony for fire investigators.",
    duration: "10-12 weeks",
    level: "Professional",
    certification: "IAAI Certified",
    location: "Chicago, IL",
    rating: 4.8,
    reviews: 78,
    price: 6200,
    featured: false,
    category: "Investigation",
    instructor: "Detective Lisa Thompson",
    startDate: "2024-05-15",
    image: "/news2.jpg",
    tags: ["Evidence Collection", "Cause Determination", "Legal Procedures"],
  },
  {
    id: "7",
    slug: "leadership-development",
    icon: Users,
    title: "Leadership Development",
    description:
      "Command and leadership training for fire officers, including incident command, personnel management, and strategic planning.",
    duration: "5-8 weeks",
    level: "Leadership",
    certification: "FESHE Certified",
    location: "Washington, D.C.",
    rating: 4.9,
    reviews: 112,
    price: 7200,
    featured: true,
    category: "Leadership",
    instructor: "Chief Emily Williams",
    startDate: "2024-06-01",
    image: "/news3.jpg",
    tags: ["Incident Command", "Management", "Strategy"],
  },
  {
    id: "8",
    slug: "fire-prevention-inspection",
    icon: Building,
    title: "Fire Prevention & Inspection",
    description: "Code enforcement and fire prevention training programs for inspectors and prevention specialists.",
    duration: "3-6 weeks",
    level: "Specialist",
    certification: "ICC Certified",
    location: "Online",
    rating: 4.7,
    reviews: 95,
    price: 3500,
    featured: false,
    category: "Fire Safety",
    instructor: "Inspector John Davis",
    startDate: "2024-06-10",
    image: "/news4.jpg",
    tags: ["Code Enforcement", "Inspection", "Public Safety"],
  },
]