
import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";

const WinterGarden = () => {
  return (
    <ServiceAreaTemplate
      name="Winter Garden"
      description="Comprehensive pressure washing services for Winter Garden homes and businesses"
      heroImage="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
      isPrimary={false}
      services={[
        "Residential exterior cleaning",
        "Historic home gentle washing",
        "Commercial storefront cleaning",
        "Driveway and sidewalk washing",
        "Paver cleaning and sealing",
        "Roof cleaning services",
        "Restaurant and retail cleaning",
        "Municipal building maintenance"
      ]}
      benefits={[
        "Experience with historic properties",
        "Gentle methods for older buildings",
        "Understanding of local regulations",
        "Commercial maintenance contracts",
        "Weekend and evening availability",
        "Eco-friendly cleaning solutions",
        "Local business references",
        "Competitive extended area pricing"
      ]}
      responseTime="3-5 business days"
      travelCharge="Small travel fee for larger jobs"
    />
  );
};

export default WinterGarden;
