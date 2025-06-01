
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";
import BookingCTA from "@/components/BookingCTA";
import TrustBadges from "@/components/TrustBadges";
import VideoGallery from "@/components/VideoGallery";
import HeroSection from "@/components/HeroSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdminVideoSync from "@/components/AdminVideoSync";
import AdminTikTokSync from "@/components/AdminTikTokSync";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <BookingCTA />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Admin Sync Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Content Management" 
            subtitle="Sync your latest videos from social media platforms"
            centered 
          />
          
          <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <AdminVideoSync />
            <AdminTikTokSync />
          </div>
        </div>
      </section>

      {/* Dynamic Video Gallery Section */}
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
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="group">
              <Link to="/gallery" className="flex items-center">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Enhanced CTA Section */}
      <CallToAction 
        title="Ready to Transform Your Property?" 
        description="Join 100+ satisfied customers throughout Central Florida. Get your free quote today and see the Carson's difference!" 
        buttonText="Get FREE Quote Now" 
        buttonLink="/contact" 
        variant="primary" 
      />

      {/* Enhanced Testimonials Section */}
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
