import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import { ArrowRight, Check, Home, Building2, Droplets, Brush } from "lucide-react";

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
    title: "Deck & Fence Restoration",
    description: "Revitalize your wooden surfaces with our specialized cleaning and restoration services.",
    icon: <Brush className="h-10 w-10" />,
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
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-secondary overflow-hidden">
        {/* Blue Bubble Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary to-secondary">
          <div className="absolute inset-0 opacity-20">
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
        </div>
        
        <div className="absolute inset-0 z-0 opacity-40">
          <img alt="Pressure washing service" className="w-full h-full object-cover mix-blend-overlay" src="/lovable-uploads/29afe2d9-ff00-4898-9aea-c3cc5d3accf6.jpg" />
        </div>
        
        <div className="container mx-auto px-4 z-10 animate-fade-in">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Expert Pressure Washing Services in Groveland, FL
            </h1>
            <p className="text-xl text-gray-200 mb-8 drop-shadow-md">
              Professional soft washing and pressure cleaning for residential and commercial properties. Licensed and insured.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 text-white border-white hover:bg-white/20">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Why Choose Carson's Soft Wash?" subtitle="We're committed to delivering exceptional cleaning results with professional service at competitive prices." centered />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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

      {/* CTA Section */}
      <CallToAction title="Ready to Transform Your Property?" description="Contact us today for a free, no-obligation quote. We serve Groveland, Clermont, Minneola, and surrounding areas in Central Florida." buttonText="Get a Free Quote" buttonLink="/contact" variant="primary" />

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="What Our Customers Say" subtitle="Don't just take our word for it. Here's what our satisfied customers have to say about our services." centered />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => <TestimonialCard key={index} name={testimonial.name} location={testimonial.location} quote={testimonial.quote} rating={testimonial.rating} />)}
          </div>
        </div>
      </section>
    </Layout>;
};

export default Index;
