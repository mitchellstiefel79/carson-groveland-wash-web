
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import SectionTitle from "@/components/SectionTitle";
import { ArrowRight, Home, Building2, Droplets, Star } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Residential Pressure Washing",
      description: "Complete exterior cleaning for homes including siding, driveways, walkways, and patios.",
      icon: <Home className="h-10 w-10" />,
      to: "/services"
    },
    {
      title: "Commercial Pressure Washing",
      description: "Professional cleaning solutions for businesses, storefronts, and commercial properties.",
      icon: <Building2 className="h-10 w-10" />,
      to: "/services"
    },
    {
      title: "Roof Soft Washing",
      description: "Gentle cleaning that removes algae, moss, and debris without damaging your roof.",
      icon: <Droplets className="h-10 w-10" />,
      to: "/services"
    },
    {
      title: "Paver Sealing, Sanding and Stripping",
      description: "Professional paver restoration services including sealing, joint sanding, and stripping for driveways and patios.",
      icon: <Star className="h-10 w-10" />,
      to: "/services"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Services" 
          subtitle="We offer a comprehensive range of pressure washing and soft washing services for both residential and commercial properties." 
          centered 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
              to={service.to} 
            />
          ))}
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
  );
};

export default ServicesSection;
