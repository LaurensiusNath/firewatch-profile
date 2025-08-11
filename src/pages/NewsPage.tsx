import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Tag, ArrowLeft, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FloatingHeader from "@/components/FloatingHeader";
import Footer from "@/components/Footer";

// Mock news data (same as in NewsSection)
const newsData = [
  {
    id: 1,
    title: "PT Badak LNG Achieves New Safety Milestone",
    description: "Our commitment to safety excellence continues with zero incidents recorded for 365 consecutive days.",
    image: "/placeholder.svg",
    date: "2024-08-05",
    category: "Safety"
  },
  {
    id: 2,
    title: "Sustainable Energy Initiative Launch",
    description: "Introducing our new renewable energy program to reduce carbon footprint by 30%.",
    image: "/placeholder.svg", 
    date: "2024-08-03",
    category: "Environment"
  },
  {
    id: 3,
    title: "Community Development Program Expansion",
    description: "Expanding educational support programs for local communities in East Kalimantan.",
    image: "/placeholder.svg",
    date: "2024-07-28",
    category: "Community"
  },
  {
    id: 4,
    title: "Technology Innovation in LNG Production",
    description: "Implementation of AI-driven monitoring systems to optimize production efficiency.",
    image: "/placeholder.svg",
    date: "2024-07-25",
    category: "Technology"
  },
  {
    id: 5,
    title: "International Partnership Agreement",
    description: "Strategic alliance with global energy partners to enhance LNG distribution network.",
    image: "/placeholder.svg",
    date: "2024-07-20",
    category: "Business"
  },
  {
    id: 6,
    title: "Employee Excellence Recognition",
    description: "Celebrating outstanding achievements of our workforce in operational excellence.",
    image: "/placeholder.svg",
    date: "2024-07-18",
    category: "People"
  },
  {
    id: 7,
    title: "Environmental Conservation Project",
    description: "New marine conservation initiative to protect coastal ecosystems around Bontang.",
    image: "/placeholder.svg",
    date: "2024-07-15",
    category: "Environment"
  },
  {
    id: 8,
    title: "Digital Transformation Progress",
    description: "Advancing digitalization across all operational departments for improved efficiency.",
    image: "/placeholder.svg",
    date: "2024-07-10",
    category: "Technology"
  }
];

const categories = ["All", "Safety", "Environment", "Community", "Technology", "Business", "People"];

const NewsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews = newsData.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleNewsClick = (newsId: number) => {
    navigate(`/news/${newsId}`);
  };

  return (
    <div className="min-h-screen">
      <FloatingHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay informed about our latest developments, achievements, and initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredNews.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map((news) => (
                  <Card 
                    key={news.id}
                    className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    onClick={() => handleNewsClick(news.id)}
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img 
                          src={news.image} 
                          alt={news.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            {news.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={news.date}>
                            {new Date(news.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {news.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          {news.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No news articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;