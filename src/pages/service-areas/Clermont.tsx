
import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";

const Clermont = () => {
  return (
    <ServiceAreaTemplate
      name="Clermont"
      description="Comprehensive pressure washing services for Clermont's residential and commercial properties"
      heroImage="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
      isPrimary={true}
      services={[
        "Residential house washing and soft washing",
        "Commercial property maintenance",
        "Driveway and sidewalk cleaning",
        "Paver sealing and maintenance",
        "Roof cleaning services",
        "Pool deck restoration",
        "HOA community cleaning",
        "Restaurant and retail cleaning"
      ]}
      benefits={[
        "Quick response within 24-48 hours",
        "No travel charges for Clermont residents",
        "Experienced with local building materials",
        "HOA approved cleaning methods",
        "Flexible scheduling for busy families",
        "Commercial maintenance contracts available",
        "Environmentally safe cleaning products",
        "References available from local customers"
      ]}
      responseTime="24-48 hours"
      travelCharge="No charge"
    />
  );
};

export default Clermont;
