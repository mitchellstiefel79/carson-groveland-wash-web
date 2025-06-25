
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";
import BookingCTA from "@/components/BookingCTA";
import TrustBadges from "@/components/TrustBadges";
import HeroSection from "@/components/HeroSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <Layout>
      <BookingCTA />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Badges */}
      <TrustBadges />

      {/* TikTok Feed Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="See Our Work in Action" 
            subtitle="Follow us on TikTok to see real transformations from our recent pressure washing and soft washing projects throughout Central Florida"
            centered 
          />
          
          <div className="mt-12 max-w-4xl mx-auto flex justify-center">
            <blockquote 
              className="tiktok-embed" 
              cite="https://www.tiktok.com/@carson.soft.wash" 
              data-unique-id="carson.soft.wash" 
              data-embed-type="creator" 
              style={{maxWidth: '780px', minWidth: '288px'}}
            >
              <section>
                <a 
                  target="_blank" 
                  href="https://www.tiktok.com/@carson.soft.wash?refer=creator_embed"
                  rel="noopener noreferrer"
                >
                  @carson.soft.wash
                </a>
              </section>
            </blockquote>
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
