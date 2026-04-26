
import { useState } from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";
import VideoGallery from "@/components/VideoGallery";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import sidewalkBeforeAfter from "@/assets/gallery-sidewalk-before-after.jpg";

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  description: string;
}

const Gallery = () => {
  const categories = ["All", "Residential", "Commercial", "Roof", "Concrete"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const images: GalleryImage[] = [
    {
      id: 1,
      src: sidewalkBeforeAfter,
      category: "Residential",
      description: "Sidewalk pressure washing before and after in Groveland"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      category: "Commercial",
      description: "Storefront cleaning for local business"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      category: "Concrete",
      description: "Driveway pressure washing"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
      category: "Residential",
      description: "Patio and deck cleaning"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      category: "Roof",
      description: "Roof soft washing service"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      category: "Commercial",
      description: "Restaurant exterior cleaning"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      category: "Concrete",
      description: "Sidewalk cleaning for HOA"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
      category: "Residential",
      description: "House siding before and after"
    }
  ];

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(image => image.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <img 
            src="/lovable-uploads/33ddd57b-b074-4962-8d39-cf59460ca10b.png" 
            alt="Pressure washing gallery" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
            <p className="text-xl">Browse through our completed projects and transformations</p>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="See Our Work in Action" 
            subtitle="Watch real transformations from our recent pressure washing and soft washing projects throughout Central Florida"
            centered 
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <VideoGallery />
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Project Photo Gallery" 
            subtitle="Take a look at some of our recent pressure washing and soft washing projects."
            centered
          />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 mb-10">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={image.src} 
                  alt={image.description} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-sm font-semibold">{image.category}</p>
                    <p className="text-lg">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 text-primary mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z"/>
            </svg>
            
            <blockquote className="text-2xl font-light italic text-gray-600 mb-6">
              Carson's Soft Wash completely transformed our home's exterior. The difference before and after was like night and day. Our neighbors have all commented on how great it looks!
            </blockquote>
            
            <div className="font-medium text-secondary">
              <p className="text-lg">Robert & Maria Johnson</p>
              <p className="text-sm text-gray-500">Groveland, FL</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction
        title="Ready for Your Own Transformation?"
        description="Contact us today to schedule your pressure washing service and see the difference for yourself."
        buttonText="Get a Free Quote"
        buttonLink="/contact"
        variant="primary"
      />
    </Layout>
  );
};

export default Gallery;
