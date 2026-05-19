import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { getServiceAreaContent } from "@/data/serviceAreaContent";

const Clermont = () => {
  const { intro, sections, faqs } = getServiceAreaContent("Clermont");
  return (
    <ServiceAreaTemplate
      name="Clermont"
      description="Soft washing, roof cleaning, and paver sealing for Clermont's hillside neighborhoods and lakefront homes."
      heroImage="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Clermont_-_Hartwood_Marsh_Road_%26_Lake_Minnehaha.jpg/1920px-Clermont_-_Hartwood_Marsh_Road_%26_Lake_Minnehaha.jpg"
      imageCredit="Hartwood Marsh Rd & Lake Minnehaha, Clermont — Wikimedia Commons (CC BY 2.0)"
      isPrimary={true}
      aboutParagraph={`Clermont sits on some of the highest ground in Florida, and that mix of hills, chain-of-lakes humidity, and full-sun exposures is rough on roofs and pavers. We work daily across Kings Ridge, Heritage Hills, Sawgrass Bay, and the lakefront homes off Lake Minnehaha and Lake Minneola, soft washing tile and shingle roofs to clear algae and mildew without the pressure that strips granules or breaks tiles. House washing is done with a low-pressure rinse and a custom detergent blend that's safe on stucco, Hardie board, and painted block — and gentle enough for screen enclosures and pool cages around the deck. For Clermont's clay-paver driveways and travertine pool decks we surface-clean, polymeric re-sand, and seal so the joints stay locked, weeds stay out, and color comes back. HOA-friendly scheduling and clear before/after photos come with every job.`}
      services={[
        "Soft wash roof cleaning for shingle and tile",
        "Lakefront house washing and dock cleaning",
        "Driveway, walkway, and pool deck pressure washing",
        "Paver sealing and polymeric re-sanding",
        "Pool screen enclosure and cage soft wash",
        "HOA-approved community and clubhouse cleaning",
        "Restaurant and retail storefront cleaning",
        "Rust, irrigation, and clay stain removal",
      ]}
      benefits={[
        "Local crew based 10 minutes away in Groveland",
        "No travel charges in Clermont",
        "Familiar with Kings Ridge, Heritage Hills, Sawgrass Bay HOAs",
        "Soft wash methods approved for tile and shingle warranties",
        "Evening and Saturday appointments available",
        "Plant- and pet-safe detergents",
        "Detailed written quotes with photos",
        "5-star reviewed by Clermont homeowners",
      ]}
      responseTime="24-48 hours"
      travelCharge="No charge"
      longFormIntro={intro}
      longFormSections={sections}
      faqs={faqs}
    />
  );
};

export default Clermont;
