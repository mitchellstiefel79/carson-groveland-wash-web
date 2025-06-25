
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ServiceAreas = () => {
  const serviceAreas = [
    {
      name: "Groveland",
      slug: "groveland",
      description: "Our home base and primary service area with same-day availability",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      isPrimary: true
    },
    {
      name: "Clermont",
      slug: "clermont",
      description: "Full-service coverage for residential and commercial properties",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      isPrimary: true
    },
    {
      name: "Minneola",
      slug: "minneola",
      description: "Professional pressure washing services for the entire community",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      isPrimary: true
    },
    {
      name: "Mascotte",
      slug: "mascotte",
      description: "Reliable cleaning services with quick response times",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      isPrimary: true
    },
    {
      name: "Montverde",
      slug: "montverde",
      description: "Extended coverage area with professional service guarantee",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      isPrimary: false
    },
    {
      name: "Winter Garden",
      slug: "winter-garden",
      description: "Comprehensive pressure washing for homes and businesses",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      isPrimary: false
    },
    {
      name: "Windermere",
      slug: "windermere",
      description: "Premium cleaning services for upscale properties",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      isPrimary: false
    },
    {
      name: "Oakland",
      slug: "oakland",
      description: "Quality pressure washing services throughout the area",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      isPrimary: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
            alt="Service Areas" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Service Areas</h1>
            <p className="text-xl">Professional pressure washing services throughout Central Florida</p>
          </div>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Primary Service Areas" 
            subtitle="Our main coverage areas with fastest response times and no travel charges."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {serviceAreas.filter(area => area.isPrimary).map((area) => (
              <Card key={area.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={area.image} 
                    alt={area.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-2 py-1 rounded text-sm font-medium">
                      Primary
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{area.name}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <Button asChild className="w-full">
                    <Link to={`/service-areas/${area.slug}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Coverage Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Extended Coverage Areas" 
            subtitle="We also serve these areas with minimal travel charges for larger projects."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {serviceAreas.filter(area => !area.isPrimary).map((area) => (
              <Card key={area.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={area.image} 
                    alt={area.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-2 py-1 rounded text-sm font-medium">
                      Extended
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{area.name}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/service-areas/${area.slug}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-secondary mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today for a free estimate in any of our service areas.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceAreas;
