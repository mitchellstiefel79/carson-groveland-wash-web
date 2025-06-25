
import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";

const Oakland = () => {
  return (
    <ServiceAreaTemplate
      name="Oakland"
      description="Quality pressure washing services throughout the Oakland area"
      heroImage="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
      isPrimary={false}
      services={[
        "Residential house washing",
        "Small business cleaning",
        "Driveway and walkway cleaning",
        "Paver maintenance services",
        "Roof cleaning and moss removal",
        "Pool area cleaning",
        "Fence and deck restoration",
        "Agricultural building cleaning"
      ]}
      benefits={[
        "Reliable service for Oakland residents",
        "Competitive extended area pricing",
        "Experience with rural properties",
        "Flexible scheduling options",
        "Safe for all landscaping",
        "Local area knowledge",
        "Honest and transparent pricing",
        "Family-owned business values"
      ]}
      responseTime="3-5 business days"
      travelCharge="Reasonable travel fee"
    />
  );
};

export default Oakland;
