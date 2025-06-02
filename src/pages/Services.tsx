import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";
import ServiceDetail from "@/components/ServiceDetail";
import ProcessStep from "@/components/ProcessStep";
import { serviceDetails, processSteps } from "@/data/serviceData";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <img 
            src="/lovable-uploads/afcec310-400e-49cb-a32c-b4e8336d83e7.png" 
            alt="Professional paver cleaning services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl">Professional pressure washing, soft washing and paver sealing solutions covering all of Central Florida</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Professional Cleaning Services" 
            subtitle="At Carson's Soft Wash, we offer a comprehensive range of pressure washing, soft washing and paver sealing services for both residential and commercial properties throughout Central Florida."
            centered
          />
          
          <div className="space-y-24 mt-16">
            {serviceDetails.map((service, index) => (
              <ServiceDetail 
                key={service.id} 
                service={service} 
                index={index}
              />
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
            {processSteps.map((step) => (
              <ProcessStep 
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction
        title="Ready to Restore Your Property's Appearance?"
        description="Contact us today for a free estimate on any of our pressure washing, soft washing or paver sealing services throughout Central Florida."
        buttonText="Get a Free Quote"
        buttonLink="/contact"
        variant="primary"
      />
    </Layout>
  );
};

export default Services;
