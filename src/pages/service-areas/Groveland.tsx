
import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";

const Groveland = () => {
  return (
    <ServiceAreaTemplate
      name="Groveland"
      description="Our home base providing same-day service and the fastest response times in Central Florida"
      heroImage="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
      isPrimary={true}
      services={[
        "Residential house washing and soft washing",
        "Commercial building and storefront cleaning",
        "Driveway and walkway pressure washing",
        "Paver sealing and restoration",
        "Roof cleaning and moss removal",
        "Pool deck and patio cleaning",
        "Fence and deck restoration",
        "Concrete cleaning and sealing"
      ]}
      benefits={[
        "Same-day service availability",
        "No travel charges within Groveland city limits",
        "Local family-owned business since 2020",
        "Fully licensed and insured",
        "Eco-friendly cleaning solutions",
        "100% satisfaction guarantee",
        "Free estimates with no obligations",
        "Experienced in all property types"
      ]}
      responseTime="Same day or next day"
      travelCharge="No charge within city limits"
    />
  );
};

export default Groveland;
