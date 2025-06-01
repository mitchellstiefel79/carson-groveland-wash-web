
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";
import { Check } from "lucide-react";

const Services = () => {
  const serviceDetails = [
    {
      id: "residential",
      title: "Residential Pressure Washing",
      description: "Keep your home looking its best with our comprehensive residential pressure washing services.",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
      beforeAfterImages: {
        before: "/lovable-uploads/c0b09503-393d-4ff9-b53e-b990e2169565.png",
        after: "/lovable-uploads/1a7ffadb-19b9-4c40-ba72-a012323a0dd5.png"
      },
      features: [
        "House washing and exterior cleaning",
        "Concrete cleaning (driveways, walkways, patios)",
        "Fence and deck cleaning",
        "Roof soft washing",
        "Gutter cleaning",
        "Window cleaning"
      ]
    },
    {
      id: "commercial",
      title: "Commercial Pressure Washing",
      description: "Maintain a professional appearance for your business with our commercial pressure washing solutions.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      features: [
        "Storefront and building exterior cleaning",
        "Parking lot and garage cleaning",
        "Sidewalk and entryway cleaning",
        "Dumpster pad cleaning",
        "Graffiti removal",
        "Drive-thru lane cleaning"
      ]
    },
    {
      id: "roof",
      title: "Roof Soft Washing",
      description: "Safely remove black streaks, algae, moss, and lichen from your roof without damaging shingles.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      beforeAfterImages: {
        before: "/lovable-uploads/c0b09503-393d-4ff9-b53e-b990e2169565.png",
        after: "/lovable-uploads/1a7ffadb-19b9-4c40-ba72-a012323a0dd5.png"
      },
      features: [
        "Low-pressure cleaning technique",
        "Removes harmful organic growth",
        "Extends roof lifespan",
        "Improves curb appeal",
        "Prevents damage to shingles",
        "Safe for all roof types"
      ]
    },
    {
      id: "concrete",
      title: "Concrete Cleaning",
      description: "Restore your concrete surfaces to their original appearance with our specialized concrete cleaning.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      features: [
        "Driveway cleaning and restoration",
        "Sidewalk and walkway cleaning",
        "Patio and pool deck cleaning",
        "Oil stain removal",
        "Rust stain treatment",
        "Concrete sealing (optional)"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
            alt="Pressure washing services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl">Professional pressure washing and soft washing solutions for all your needs</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Professional Cleaning Services" 
            subtitle="At Carson's Soft Wash, we offer a comprehensive range of pressure washing and soft washing services for both residential and commercial properties."
            centered
          />
          
          <div className="space-y-24 mt-16">
            {serviceDetails.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl font-bold text-secondary mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {service.beforeAfterImages ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                          <img 
                            src={service.beforeAfterImages.before} 
                            alt="Before pressure washing" 
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                            BEFORE
                          </div>
                        </div>
                        <div className="relative">
                          <img 
                            src={service.beforeAfterImages.after} 
                            alt="After pressure washing" 
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                            AFTER
                          </div>
                        </div>
                      </div>
                      <p className="text-center text-sm text-gray-600 font-medium">
                        {service.id === "roof" ? "Roof Cleaning Results" : "Fence Cleaning Results"}
                      </p>
                    </div>
                  ) : (
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Cleaning Process" 
            subtitle="We follow a systematic approach to ensure quality results for every project."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Inspection</h3>
              <p className="text-gray-600">
                We thoroughly assess the surfaces to determine the appropriate cleaning method and solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Preparation</h3>
              <p className="text-gray-600">
                We protect surrounding areas, plants, and fixtures to prevent any potential damage.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Application</h3>
              <p className="text-gray-600">
                We apply the appropriate cleaning solutions and use the right pressure for optimal results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Final Inspection</h3>
              <p className="text-gray-600">
                We review our work to ensure everything meets our high standards of quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction
        title="Ready to Restore Your Property's Appearance?"
        description="Contact us today for a free estimate on any of our pressure washing services."
        buttonText="Get a Free Quote"
        buttonLink="/contact"
        variant="primary"
      />
    </Layout>
  );
};

export default Services;
