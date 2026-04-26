import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { counties, serviceCities } from "@/data/serviceAreas";

const ServiceAreas = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50"></div>
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
            alt="Service Areas"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Service Areas
            </h1>
            <p className="text-xl">
              Professional pressure washing across Lake, Orange, Sumter and
              Osceola counties.
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Where We Serve"
            subtitle="Carson's Soft Wash proudly covers the cities and towns highlighted below."
            centered
          />
          <div className="mt-10 max-w-5xl mx-auto">
            <ServiceAreaMap />
          </div>
        </div>
      </section>

      {/* City list grouped by county */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Cities & Towns Serviced"
            subtitle="Don't see your town? Give us a call — we likely cover it."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {counties.map((county) => {
              const cities = serviceCities.filter((c) => c.county === county);
              return (
                <Card key={county} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      <h3 className="text-xl font-bold text-secondary">
                        {county} County
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {cities.map((city) => (
                        <li
                          key={`${county}-${city.name}`}
                          className="flex items-start text-gray-700"
                        >
                          <CheckCircle className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                          {city.slug ? (
                            <Link
                              to={`/service-areas/${city.slug}`}
                              className="hover:text-primary transition-colors"
                            >
                              {city.name}
                            </Link>
                          ) : (
                            <span>{city.name}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
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
              Contact us today for a free estimate anywhere in our service area.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceAreas;
