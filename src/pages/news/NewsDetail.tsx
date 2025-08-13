import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingHeader from "@/components/FloatingHeader";
import Footer from "@/components/Footer";

// Mock news data (in a real app, this would come from an API)
const newsData = [
  {
    id: 1,
    title: "PT Badak LNG Achieves New Safety Milestone",
    description: "Our commitment to safety excellence continues with zero incidents recorded for 365 consecutive days.",
    content: `PT Badak LNG is proud to announce a significant safety milestone, completing 365 consecutive days without any recordable incidents. This achievement reflects our unwavering commitment to maintaining the highest safety standards in the LNG industry.

    Our comprehensive safety program includes regular training sessions, advanced monitoring systems, and strict adherence to international safety protocols. Every employee contributes to this success through their dedication to safety-first practices.

    This milestone is particularly meaningful as it demonstrates that safety and productivity can go hand in hand. Our zero-incident record has been achieved while maintaining optimal production levels and meeting all delivery commitments to our customers.

    Moving forward, we remain committed to continuous improvement in our safety programs and maintaining this excellent record.`,
    image: "/placeholder.svg",
    date: "2024-08-05",
    category: "Safety"
  },
  {
    id: 2,
    title: "Sustainable Energy Initiative Launch",
    description: "Introducing our new renewable energy program to reduce carbon footprint by 30%.",
    content: `PT Badak LNG launches an ambitious sustainable energy initiative aimed at reducing our carbon footprint by 30% over the next five years. This comprehensive program includes solar panel installations, energy efficiency improvements, and innovative carbon capture technologies.

    The initiative represents our commitment to environmental stewardship and aligns with global efforts to combat climate change. Key components include:

    - Installation of 50MW solar panel systems across our facilities
    - Implementation of advanced energy management systems
    - Adoption of carbon capture and storage technologies
    - Employee training programs on sustainable practices

    This investment of $200 million demonstrates our long-term commitment to sustainable operations while maintaining our position as a leading LNG producer.`,
    image: "/placeholder.svg",
    date: "2024-08-03",
    category: "Environment"
  },
  {
    id: 3,
    title: "Community Development Program Expansion",
    description: "Expanding educational support programs for local communities in East Kalimantan.",
    content: `PT Badak LNG is proud to announce the expansion of its community development programs, focusing on enhancing educational opportunities for local communities in East Kalimantan. This initiative includes new scholarships, school infrastructure improvements, and vocational training programs designed to empower the next generation. Our goal is to foster sustainable growth and create lasting positive impacts in the regions where we operate.`,
    image: "/placeholder.svg",
    date: "2024-07-28",
    category: "Community"
  },
  {
    id: 4,
    title: "Technology Innovation in LNG Production",
    description: "Implementation of AI-driven monitoring systems to optimize production efficiency.",
    content: `In a major step towards digital transformation, PT Badak LNG has successfully implemented a new AI-driven monitoring system across its production facilities. This state-of-the-art technology will enhance operational efficiency, improve safety protocols, and allow for predictive maintenance, further solidifying our position as a leader in LNG production technology. The system analyzes real-time data to optimize processes and prevent potential issues before they arise.`,
    image: "/placeholder.svg",
    date: "2024-07-25",
    category: "Technology"
  }
];

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const newsItem = newsData.find(item => item.id === parseInt(id || ''));

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">News article not found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <FloatingHeader />
      
      {/* Hero Section */}
      <section className="pt-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6 hover:bg-primary/10 ml-10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {newsItem.category}
              </span>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <time dateTime={newsItem.date}>
                  {new Date(newsItem.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {newsItem.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {newsItem.description}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <img 
                src={newsItem.image} 
                alt={newsItem.title}
                className="w-full h-full   md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <article className="prose prose-lg max-w-none">
              <div className="text-foreground leading-relaxed whitespace-pre-line">
                {newsItem.content}
              </div>
            </article>
            
            <div className="mt-12 mb-12 pt-8 border-t border-border">
              <Button 
                variant="outline" 
                onClick={() => navigate(-1)}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsDetail;