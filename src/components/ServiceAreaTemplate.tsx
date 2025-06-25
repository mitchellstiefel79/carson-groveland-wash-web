
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceAreaTemplateProps {
  name: string;
  description: string;
  heroImage: string;
  isPrimary: boolean;
  services: string[];
  benefits: string[];
  responseTime: string;
  travelCharge: string;
}

const ServiceAreaTemplate = ({
  name,
  description,
  heroImage,
  isPrimary,
  services,
  benefits,
  responseTime,
  travelCharge
}: ServiceAreaTemplateProps) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <img 
            src={heroImage} 
            alt={`Pressure washing services in ${name}`} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="mb-4">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                isPrimary ? 'bg-primary' : 'bg-accent'
              }`}>
                {isPrimary ? 'Primary Service Area' : 'Extended Coverage'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pressure Washing in {name}, FL
            </h1>
            <p className="text-xl">{description}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Our Services in {name}" 
                subtitle="Professional pressure washing services for residential and commercial properties."
              />
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle 
                title="Why Choose Us?" 
                subtitle="Local expertise with professional results you can trust."
              />
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2">Response Time</h3>
                <p className="text-gray-600">{responseTime}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2">Travel Charges</h3>
                <p className="text-gray-600">{travelCharge}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2">Free Estimates</h3>
                <p className="text-gray-600">Always free, no obligations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-white rounded-lg p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Property in {name}?
            </h3>
            <p className="text-xl mb-8">
              Contact Carson's Soft Wash today for your free estimate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:3524673964">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 352-467-3964
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-primary border-white hover:bg-white" asChild>
                <Link to="/contact">
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceAreaTemplate;
