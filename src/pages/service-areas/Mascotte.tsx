
import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";

const Mascotte = () => {
  return (
    <ServiceAreaTemplate
      name="Mascotte"
      description="Reliable pressure washing services with quick response times for Mascotte properties"
      heroImage="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
      isPrimary={true}
      services={[
        "House washing and exterior cleaning",
        "Driveway and concrete cleaning",
        "Paver restoration and sealing",
        "Commercial building washing",
        "Roof cleaning and maintenance",
        "Pool deck and patio cleaning",
        "Fence and deck restoration",
        "Mobile home cleaning services"
      ]}
      benefits={[
        "Quick response for Mascotte residents",
        "No travel fees within city limits",
        "Experience with mobile home communities",
        "Affordable rates for all budgets",
        "Gentle cleaning for older structures",
        "Water conservation practices",
        "Local references available",
        "Emergency cleaning services"
      ]}
      responseTime="24-48 hours"
      travelCharge="No charge"
    />
  );
};

export default Mascotte;
