
import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";

const Minneola = () => {
  return (
    <ServiceAreaTemplate
      name="Minneola"
      description="Professional pressure washing services throughout the Minneola community"
      heroImage="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
      isPrimary={true}
      services={[
        "Residential exterior cleaning",
        "Driveway and walkway washing",
        "Paver cleaning and sealing",
        "Roof and gutter cleaning",
        "Pool area maintenance",
        "Commercial storefront cleaning",
        "Parking lot cleaning",
        "Building maintenance services"
      ]}
      benefits={[
        "Fast response times for Minneola residents",
        "No additional travel charges",
        "Familiar with local home styles",
        "Trusted by Minneola homeowners",
        "Competitive pricing for the area",
        "Flexible weekend scheduling",
        "Safe for plants and landscaping",
        "Fully bonded and insured"
      ]}
      responseTime="Same day to 48 hours"
      travelCharge="No charge"
    />
  );
};

export default Minneola;
