import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { getServiceAreaContent } from "@/data/serviceAreaContent";

const Mascotte = () => {
  const { intro, sections, faqs } = getServiceAreaContent("Mascotte");
  return (
    <ServiceAreaTemplate
      name="Mascotte"
      description="Honest, neighborly soft washing and pressure washing for Mascotte homes, mobile homes, and small businesses."
      heroImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Mascotte_FL_city_hall02.jpg/1920px-Mascotte_FL_city_hall02.jpg"
      imageCredit="Mascotte City Hall — Wikimedia Commons (CC BY-SA 3.0)"
      isPrimary={true}
      aboutParagraph={`Mascotte is right next door to our Groveland base, so we know the older neighborhoods off Sunset Avenue, the newer builds in Knight Lake Estates, and the mobile-home and manufactured-home communities along SR-50 well. Florida humidity is brutal on metal roofs and painted aluminum siding here, so we soft wash at low pressure with a balanced detergent that lifts mildew and algae without stripping paint or denting panels. Concrete driveways, carports, sidewalks, and pool decks are surface-cleaned with hot water for an even finish — no zebra striping — and we'll seal pavers or stamped concrete to keep the color from chalking out. We keep pricing fair and straightforward for Mascotte residents, and we won't try to sell you services your home doesn't actually need.`}
      services={[
        "Soft wash house and mobile home exteriors",
        "Metal and shingle roof soft washing",
        "Driveway, carport, and sidewalk pressure washing",
        "Paver and stamped concrete sealing",
        "Pool deck and patio cleaning",
        "Wood and vinyl fence restoration",
        "Small commercial and storefront cleaning",
        "Algae, mildew, and rust treatment",
      ]}
      benefits={[
        "Mascotte is in our backyard — fast response",
        "No travel fee inside Mascotte",
        "Experience with mobile and manufactured homes",
        "Fair, fixed-price quotes for every budget",
        "Gentle methods safe for older roofs and paint",
        "Water-conscious cleaning practices",
        "Local references on request",
        "Licensed and insured in Lake County",
      ]}
      responseTime="24-48 hours"
      travelCharge="No charge"
    />
  );
};

export default Mascotte;
