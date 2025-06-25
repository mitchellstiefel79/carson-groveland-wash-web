
import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";

const Windermere = () => {
  return (
    <ServiceAreaTemplate
      name="Windermere"
      description="Premium pressure washing services for upscale Windermere properties"
      heroImage="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
      isPrimary={false}
      services={[
        "Luxury home exterior cleaning",
        "High-end commercial properties",
        "Driveway and entrance cleaning",
        "Premium paver sealing",
        "Tile roof cleaning services",
        "Pool deck and outdoor living areas",
        "Yacht club and marina cleaning",
        "Estate property maintenance"
      ]}
      benefits={[
        "Specialized in luxury properties",
        "Premium cleaning products available",
        "Discreet and professional service",
        "Flexible scheduling for busy lifestyles",
        "Experience with high-end materials",
        "Detailed service documentation",
        "Excellent local reputation",
        "White-glove service approach"
      ]}
      responseTime="2-4 business days"
      travelCharge="Minimal for premium properties"
    />
  );
};

export default Windermere;
