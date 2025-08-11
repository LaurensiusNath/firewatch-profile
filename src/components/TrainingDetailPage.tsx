"use client"

import FloatingHeader from "@/components/FloatingHeader";
import { Play, Clock, Users, Award, CheckCircle, Star, Calendar, Globe, Download, Share2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import { trainings, ModuleTopic, CertificateDetail } from "@/data/trainings";

export default function TrainingDetailPage() {
  const [selectedModule, setSelectedModule] = useState<{ title: string; duration: string; description: string; topics: ModuleTopic[] } | null>(null)
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateDetail | null>(null);

  const moduleDetails = {
    1: {
      title: "Foundations of Emergency Medicine",
      duration: "4 weeks",
      description: "Build a strong foundation in emergency medical principles and practices.",
      topics: [
        {
          week: "Week 1",
          title: "Human Anatomy & Physiology",
          content: [
            "Cardiovascular system overview",
            "Respiratory system mechanics",
            "Nervous system fundamentals",
            "Musculoskeletal system basics",
          ],
        },
        {
          week: "Week 2",
          title: "Medical Terminology",
          content: [
            "Root words and prefixes",
            "Body systems terminology",
            "Medical abbreviations",
            "Documentation standards",
          ],
        },
        {
          week: "Week 3",
          title: "Legal & Ethical Considerations",
          content: [
            "Scope of practice guidelines",
            "Patient consent and confidentiality",
            "HIPAA compliance",
            "Professional liability",
          ],
        },
        {
          week: "Week 4",
          title: "EMS System Overview",
          content: [
            "EMS history and development",
            "System components and roles",
            "Quality improvement processes",
            "Communication protocols",
          ],
        },
      ],
    },
    2: {
      title: "Patient Assessment & Care",
      duration: "6 weeks",
      description: "Master comprehensive patient assessment techniques and basic care protocols.",
      topics: [
        {
          week: "Week 1-2",
          title: "Primary Assessment",
          content: [
            "Scene safety evaluation",
            "Initial patient contact",
            "Airway assessment",
            "Breathing evaluation",
            "Circulation check",
            "Disability assessment",
          ],
        },
        {
          week: "Week 3-4",
          title: "Secondary Assessment",
          content: [
            "Head-to-toe examination",
            "Focused assessments",
            "History taking techniques",
            "SAMPLE history method",
          ],
        },
        {
          week: "Week 5-6",
          title: "Vital Signs & Documentation",
          content: [
            "Blood pressure measurement",
            "Pulse assessment techniques",
            "Respiratory rate monitoring",
            "Temperature measurement",
            "Patient care reporting",
            "Electronic documentation",
          ],
        },
      ],
    },
    3: {
      title: "Advanced Life Support",
      duration: "8 weeks",
      description: "Advanced interventions and life-saving procedures for critical patients.",
      topics: [
        {
          week: "Week 1-2",
          title: "Advanced Airway Management",
          content: [
            "Endotracheal intubation",
            "Supraglottic airway devices",
            "Surgical airway procedures",
            "Mechanical ventilation basics",
          ],
        },
        {
          week: "Week 3-4",
          title: "Vascular Access & IV Therapy",
          content: [
            "Peripheral IV insertion",
            "Central line access",
            "Intraosseous access",
            "Fluid resuscitation protocols",
          ],
        },
        {
          week: "Week 5-6",
          title: "Pharmacology & Medication Administration",
          content: [
            "Emergency medications",
            "Dosage calculations",
            "Administration routes",
            "Drug interactions and contraindications",
          ],
        },
        {
          week: "Week 7-8",
          title: "Cardiac Monitoring & Defibrillation",
          content: [
            "12-lead ECG interpretation",
            "Cardiac rhythm analysis",
            "Defibrillation procedures",
            "Cardioversion techniques",
          ],
        },
      ],
    },
  }

  const { slug } = useParams();
  const navigate = useNavigate();
  const training = trainings.find(t => t.slug === slug);

  if (!training) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <FloatingHeader />
      {/* Header */}
      <div className="bg-white border-b pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => navigate("/#services")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Programs
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video Section */}
            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gray-900 rounded-t-lg overflow-hidden">
                  <img
                    src={`/news${(trainings.findIndex(t => t.slug === slug) % 4) + 1}.jpg`}
                    className="w-full h-full"
                    alt={training.title}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="rounded-full w-16 h-16">
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-bold text-gray-900">{training.title}</h1>
                    {training.featured && (
                      <Badge variant="secondary" className="bg-red-100 text-red-800">
                        Featured Program
                      </Badge>
                    )}
                  </div>
                  <p className="text-lg text-gray-600 mb-4">{training.description}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {training.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      Professional Level
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      {training.certification}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs Section */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="certification">Certification</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Program Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Our Emergency Medical Services training program is designed to provide comprehensive education and
                      hands-on experience for aspiring and current emergency medical professionals. This intensive
                      program combines theoretical knowledge with practical skills to prepare students for real-world
                      emergency situations.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">What You'll Learn:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Advanced life support techniques</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Emergency pharmacology</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Trauma assessment and management</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Cardiac emergency protocols</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Program Features:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">State-of-the-art simulation lab</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Clinical rotations in hospitals</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Field experience with EMS units</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">24/7 online learning platform</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Curriculum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">Module 1: Foundations of Emergency Medicine</h4>
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-blue-500">4 weeks</Badge>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm" onClick={() => setSelectedModule(moduleDetails[1])}>
                                  Detail Module
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle>{moduleDetails[1].title}</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-6">
                                  <div>
                                    <p className="text-gray-600 mb-4">{moduleDetails[1].description}</p>
                                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                                      <Badge variant="secondary">{moduleDetails[1].duration}</Badge>
                                    </div>
                                  </div>
                                  <div className="space-y-4">
                                    {moduleDetails[1].topics.map((topic, index) => (
                                      <div key={index} className="border rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-3">
                                          <h4 className="font-semibold text-gray-900">
                                            {topic.week}: {topic.title}
                                          </h4>
                                        </div>
                                        <ul className="space-y-1">
                                          {topic.content.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start">
                                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                              <span className="text-sm text-gray-600">{item}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1 ml-4">
                          <li>• Anatomy and physiology review</li>
                          <li>• Medical terminology</li>
                          <li>• Legal and ethical considerations</li>
                        </ul>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">Module 2: Patient Assessment & Care</h4>
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-blue-500">6 weeks</Badge>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm" onClick={() => setSelectedModule(moduleDetails[2])}>
                                  Detail Module
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle>{moduleDetails[2].title}</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-6">
                                  <div>
                                    <p className="text-gray-600 mb-4">{moduleDetails[2].description}</p>
                                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                                      <Badge variant="secondary">{moduleDetails[2].duration}</Badge>
                                    </div>
                                  </div>
                                  <div className="space-y-4">
                                    {moduleDetails[2].topics.map((topic, index) => (
                                      <div key={index} className="border rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-3">
                                          <h4 className="font-semibold text-gray-900">
                                            {topic.week}: {topic.title}
                                          </h4>
                                        </div>
                                        <ul className="space-y-1">
                                          {topic.content.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start">
                                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                              <span className="text-sm text-gray-600">{item}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1 ml-4">
                          <li>• Primary and secondary assessment</li>
                          <li>• Vital signs monitoring</li>
                          <li>• Documentation and reporting</li>
                        </ul>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">Module 3: Advanced Life Support</h4>
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-blue-500">8 weeks</Badge>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm" onClick={() => setSelectedModule(moduleDetails[3])}>
                                  Detail Module
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle>{moduleDetails[3].title}</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-6">
                                  <div>
                                    <p className="text-gray-600 mb-4">{moduleDetails[3].description}</p>
                                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                                      <Badge variant="secondary">{moduleDetails[3].duration}</Badge>
                                    </div>
                                  </div>
                                  <div className="space-y-4">
                                    {moduleDetails[3].topics.map((topic, index) => (
                                      <div key={index} className="border rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-3">
                                          <h4 className="font-semibold text-gray-900">
                                            {topic.week}: {topic.title}
                                          </h4>
                                        </div>
                                        <ul className="space-y-1">
                                          {topic.content.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start">
                                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                              <span className="text-sm text-gray-600">{item}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1 ml-4">
                          <li>• Airway management</li>
                          <li>• IV therapy and medication administration</li>
                          <li>• Cardiac monitoring and defibrillation</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="requirements" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Prerequisites & Requirements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Educational Requirements:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">High school diploma or equivalent</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Current EMT-Basic certification (preferred)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">CPR certification</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Physical Requirements:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Physical fitness assessment</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Medical clearance from physician</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Drug screening and background check</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="certification" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Certification & Career Outcomes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Certifications Earned:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {training.certifications_details.map((cert, index) => (
                          <div 
                            key={index}
                            className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                            onClick={() => setSelectedCertificate(cert)}
                          >
                            <div className="flex items-center mb-2">
                              <Award className="w-5 h-5 text-blue-500 mr-2" />
                              <span className="font-medium">{cert.name}</span>
                            </div>
                            <p className="text-sm text-gray-600">{cert.issuer}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Career Opportunities:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <ul className="space-y-2">
                          <li>• Emergency Medical Technician</li>
                          <li>• Paramedic</li>
                          <li>• Flight Medic</li>
                          <li>• Emergency Room Technician</li>
                        </ul>
                        <ul className="space-y-2">
                          <li>• Fire Department Medic</li>
                          <li>• Critical Care Transport</li>
                          <li>• EMS Supervisor</li>
                          <li>• Training Instructor</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Instructor Card */}
            <Card>
              <CardHeader>
                <CardTitle>Lead Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Dr. Sarah Johnson" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Dr. Sarah Johnson</h4>
                    <p className="text-sm text-gray-600 mb-2">Paramedic, MD Emergency Medicine</p>
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-2">4.9 (127 reviews)</span>
                    </div>
                    <p className="text-xs text-gray-500">15+ years experience in emergency medicine and EMS training</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Program Details */}
            <Card>
              <CardHeader>
                <CardTitle>Program Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Duration</span>
                  <span className="font-medium">6-12 months</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Format</span>
                  <span className="font-medium">Hybrid</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Class Size</span>
                  <span className="font-medium">Max 24 students</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Next Start Date</span>
                  <span className="font-medium">March 15, 2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Language</span>
                  <span className="font-medium">English</span>
                </div>
              </CardContent>
            </Card>

            {/* Enrollment */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700" size="lg">
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    Schedule Info Session
                  </Button>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Questions? Call us at</p>
                    <p className="font-semibold text-red-600">(555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Features */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-500" />
                  <span className="text-sm">Online learning platform</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Flexible scheduling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-500" />
                  <span className="text-sm">Career placement assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-orange-500" />
                  <span className="text-sm">Continuing education credits</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Certificate Preview Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={(isOpen) => !isOpen && setSelectedCertificate(null)}>
        <DialogContent className="max-w-3xl p-4 md:p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedCertificate?.name}</DialogTitle>
            <p className="text-sm text-muted-foreground pt-1">
              Issued by: {selectedCertificate?.issuer}
            </p>
          </DialogHeader>
          <div className="mt-4 max-h-[60vh] overflow-auto rounded-lg border">
            <img 
              src={selectedCertificate?.previewImage} 
              alt={`Sample of ${selectedCertificate?.name}`}
              className="w-full h-auto"
            />
          </div>
          <div className="mt-6 flex justify-end">
            <Button asChild>
              <a href={selectedCertificate?.downloadUrl} download>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
