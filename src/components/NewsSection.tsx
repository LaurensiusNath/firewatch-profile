import { useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "PT Badak LNG Achieves New Safety Milestone",
    description: "Our commitment to safety excellence continues with zero incidents recorded for 365 consecutive days.",
    image: "/news1.jpeg",
    date: "2024-08-05",
    category: "Safety"
  },
  {
    id: 2,
    title: "Sustainable Energy Initiative Launch",
    description: "Introducing our new renewable energy program to reduce carbon footprint by 30%.",
    image: "/news2.jpg",
    date: "2024-08-03",
    category: "Environment"
  },
  {
    id: 3,
    title: "Community Development Program Expansion",
    description: "Expanding educational support programs for local communities in East Kalimantan.",
    image: "/news3.jpg",
    date: "2024-07-28",
    category: "Community"
  },
  {
    id: 4,
    title: "Technology Innovation in LNG Production",
    description: "Implementation of AI-driven monitoring systems to optimize production efficiency.",
    image: "/news4.jpg",
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

const NewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const totalSlides = 2;
  const itemsPerSlide = 4;

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handleNewsClick = (newsId: number) => {
    navigate(`/news/${newsId}`);
  };

  const getCurrentSlideNews = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return newsData.slice(startIndex, startIndex + itemsPerSlide);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextSlide(),
    onSwipedRight: () => handlePrevSlide(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Latest News & Updates</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about our latest developments, achievements, and initiatives
          </p>
        </div>

        <div className="relative">
          {/* News Grid */}
          <div {...handlers} className="overflow-hidden cursor-grab active:cursor-grabbing">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    {newsData
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((news) => (
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
                                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
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
                              <p className="text-muted-foreground mb-4 line-clamp-2">
                                {news.description}
                              </p>
                              <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                                Read More
                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Bullets */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-primary scale-110' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/news')}
            className="hover:bg-primary hover:text-primary-foreground"
          >
            View All News
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;