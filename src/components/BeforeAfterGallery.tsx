
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BeforeAfterGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const beforeAfterImages = [
    {
      before: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=400&fit=crop",
      title: "House Exterior Transformation",
      location: "Groveland, FL"
    },
    {
      before: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      title: "Driveway Restoration",
      location: "Clermont, FL"
    },
    {
      before: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      title: "Commercial Building Cleaning",
      location: "Minneola, FL"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="relative group">
          <img 
            src={beforeAfterImages[currentSlide].before} 
            alt="Before pressure washing"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            BEFORE
          </div>
        </div>
        
        <div className="relative group">
          <img 
            src={beforeAfterImages[currentSlide].after} 
            alt="After pressure washing"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            AFTER
          </div>
        </div>
      </div>
      
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-secondary mb-1">
          {beforeAfterImages[currentSlide].title}
        </h3>
        <p className="text-gray-600">{beforeAfterImages[currentSlide].location}</p>
      </div>
      
      <div className="flex justify-center items-center gap-4">
        <Button 
          onClick={prevSlide}
          variant="outline" 
          size="icon"
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex gap-2">
          {beforeAfterImages.map((_, index) => (
            <div 
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <Button 
          onClick={nextSlide}
          variant="outline" 
          size="icon"
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default BeforeAfterGallery;
