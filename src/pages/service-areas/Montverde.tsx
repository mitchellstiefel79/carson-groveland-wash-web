
import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";

const Montverde = () => {
  return (
    <ServiceAreaTemplate
      name="Montverde"
      description="Extended coverage area with professional service guarantee for Montverde properties"
      heroImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
      isPrimary={false}
      services={[
        "Residential house washing",
        "Luxury home exterior cleaning",
        "Driveway and walkway cleaning",
        "Paver sealing services",
        "Roof cleaning and maintenance",
        "Pool deck restoration",
        "Commercial property cleaning",
        "Estate property maintenance"
      ]}
      benefits={[
        "Professional service for upscale properties",
        "Experienced with luxury home materials",
        "Flexible scheduling for busy professionals",
        "Discreet and professional service",
        "Premium cleaning solutions available",
        "Detailed cleaning reports provided",
        "References from similar properties",
        "Bonded and insured technicians"
      ]}
      responseTime="2-5 business days"
      travelCharge="Minimal charge for larger projects"
    />
  );
};

export default Montverde;
