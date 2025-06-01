import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import BookingCTA from "@/components/BookingCTA";
import TrustBadges from "@/components/TrustBadges";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import { ArrowRight, Check, Home, Building2, Droplets, Star, MapPin, Phone } from "lucide-react";

const Index = () => {
  const services = [{
    title: "Residential Pressure Washing",
    description: "Complete exterior cleaning for homes including siding, driveways, walkways, and patios.",
    icon: <Home className="h-10 w-10" />,
    to: "/services"
  }, {
    title: "Commercial Pressure Washing",
    description: "Professional cleaning solutions for businesses, storefronts, and commercial properties.",
    icon: <Building2 className="h-10 w-10" />,
    to: "/services"
  }, {
    title: "Roof Soft Washing",
    description: "Gentle cleaning that removes algae, moss, and debris without damaging your roof.",
    icon: <Droplets className="h-10 w-10" />,
    to: "/services"
  }, {
    title: "Paver Sealing, Sanding and Stripping",
    description: "Professional paver restoration services including sealing, joint sanding, and stripping for driveways and patios.",
    icon: <Star className="h-10 w-10" />,
    to: "/services"
  }];
  
  const testimonials = [{
    name: "Jennifer L.",
    location: "Groveland, FL",
    quote: "Carson's Soft Wash did an amazing job on our home. The roof looks brand new and the driveway is spotless. Highly recommended!",
    rating: 5
  }, {
    name: "Michael R.",
    location: "Clermont, FL",
    quote: "Professional, courteous, and very thorough. My house hasn't looked this clean since the day we moved in. Great service!",
    rating: 5
  }, {
    name: "Sarah T.",
    location: "Minneola, FL",
    quote: "We use Carson's for our business storefront cleaning quarterly. Always consistent results and fair pricing.",
    rating: 5
  }];

  return (
    <Layout>
      <BookingCTA />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-secondary overflow-hidden">
        {/* Blue Bubble Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary to-secondary">
          {/* Large bubbles */}
          <div className="absolute w-64 h-64 rounded-full bg-white/20 blur-xl top-1/4 left-1/4 animate-pulse" 
               style={{animationDuration: '8s'}}></div>
          <div className="absolute w-80 h-80 rounded-full bg-white/20 blur-xl bottom-1/3 right-1/4 animate-pulse"
               style={{animationDuration: '10s'}}></div>
          <div className="absolute w-72 h-72 rounded-full bg-white/20 blur-xl top-1/2 right-1/3 animate-pulse"
               style={{animationDuration: '12s'}}></div>
          
          {/* Medium bubbles */}
          <div className="absolute w-40 h-40 rounded-full bg-white/30 blur-lg top-1/3 left-1/3 animate-pulse"
               style={{animationDuration: '7s'}}></div>
          <div className="absolute w-48 h-48 rounded-full bg-white/30 blur-lg bottom-1/4 right-1/4 animate-pulse"
               style={{animationDuration: '9s'}}></div>
          
          {/* Small bubbles */}
          <div className="absolute w-24 h-24 rounded-full bg-white/40 blur-md top-1/2 left-1/2 animate-pulse"
               style={{animationDuration: '6s'}}></div>
          <div className="absolute w-16 h-16 rounded-full bg-white/40 blur-md bottom-1/3 left-1/4 animate-pulse"
               style={{animationDuration: '5s'}}></div>
          <div className="absolute w-20 h-20 rounded-full bg-white/40 blur-md top-1/4 right-1/3 animate-pulse"
               style={{animationDuration: '4s'}}></div>
        </div>
        
        <div className="absolute inset-0 z-0 opacity-40">
          <img alt="Pressure washing service" className="w-full h-full object-cover mix-blend-overlay" src="/lovable-uploads/29afe2d9-ff00-4898-9aea-c3cc5d3accf6.jpg" />
        </div>
        
        <div className="container mx-auto px-4 z-10 animate-fade-in">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              Pressure Washing, Soft Washing and Paver Sealing Covering all of Central Florida
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 drop-shadow-md max-w-2xl">
              Professional soft washing and pressure cleaning for residential and commercial properties. Licensed and insured.
            </p>
            
            {/* Enhanced CTAs with urgency */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300">
                <Link to="/contact">Get FREE Quote Today</Link>
              </Button>
              <Button size="lg" asChild className="bg-white/10 text-white border-white hover:bg-white/20 text-lg px-8 py-4">
                <a href="tel:3524673964" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (352) 467-3964
                </a>
              </Button>
            </div>
            
            {/* Service area highlight */}
            <div className="flex items-center gap-2 text-gray-200">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Serving all of Central Florida including Groveland, Clermont, Minneola & surrounding areas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Before & After Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="See the Difference" 
            subtitle="Real results from recent projects throughout Central Florida"
            centered 
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <BeforeAfterGallery />
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Why Choose Carson's Soft Wash?" subtitle="We're committed to delivering exceptional cleaning results with professional service at competitive prices." centered />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for residential and commercial pressure washing services.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Experienced Professionals</h3>
              <p className="text-gray-600">Our trained technicians have years of experience and use industry-leading techniques.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">We stand behind our work with a 100% satisfaction guarantee on all services.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">We use environmentally responsible cleaning solutions that are effective yet safe.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">Quality service at fair prices with transparent, upfront quotes.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Prompt & Reliable</h3>
              <p className="text-gray-600">We arrive on time and complete projects efficiently without sacrificing quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Services" subtitle="We offer a comprehensive range of pressure washing and soft washing services for both residential and commercial properties." centered />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
            {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} to={service.to} />)}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="group">
              <Link to="/services" className="flex items-center">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <CallToAction 
        title="Ready to Transform Your Property?" 
        description="Join 100+ satisfied customers throughout Central Florida. Get your free quote today and see the Carson's difference!" 
        buttonText="Get FREE Quote Now" 
        buttonLink="/contact" 
        variant="primary" 
      />

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="What Our Customers Say" subtitle="Don't just take our word for it. Here's what our satisfied customers have to say about our services." centered />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {testimonials.map((testimonial, index) => <TestimonialCard key={index} name={testimonial.name} location={testimonial.location} quote={testimonial.quote} rating={testimonial.rating} />)}
          </div>
          
          {/* Google Reviews CTA */}
          <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2">Rated 5.0 Stars</h3>
            <p className="text-gray-600 mb-4">Based on 50+ Google Reviews</p>
            <Button asChild variant="outline">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Read All Reviews
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
