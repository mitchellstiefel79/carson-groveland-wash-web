import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { getServiceAreaContent } from "@/data/serviceAreaContent";

const Minneola = () => {
  const { intro, sections, faqs } = getServiceAreaContent("Minneola");
  return (
    <ServiceAreaTemplate
      name="Minneola"
      description="Soft wash and pressure washing for Minneola's hilltop subdivisions and downtown properties."
      heroImage="https://upload.wikimedia.org/wikipedia/commons/6/6f/Minneola_depot.jpg"
      imageCredit="Historic Minneola Depot — Wikimedia Commons (Public Domain)"
      isPrimary={true}
      aboutParagraph={`Minneola is just up the hill from us, and we run regularly through Reserve at Minneola, Ardmore Reserve, Park View at the Hills, and the older homes along Pearl Street and US-27. Roofs facing the lake get heavy algae streaks within a year or two, so we soft wash with low-pressure ARMA-compliant chemistry that kills the spores at the root instead of blasting granules off the shingle. House exteriors, soffits, gutters, and screen enclosures get the same gentle treatment with a downstream injector — no ladders walking on tile, no etched stucco. Driveways and pool decks across Minneola's newer paver communities are surface-cleaned and sealed with a breathable wet-look or matte finish that locks in joint sand and resists Florida UV. Quotes are honest, fixed-price, and usually back to you the same day.`}
      services={[
        "Soft wash roof cleaning for shingle, tile, and metal",
        "House washing for stucco, vinyl, and Hardie board",
        "Driveway, sidewalk, and curb pressure washing",
        "Paver sealing, sanding, and stain removal",
        "Pool deck and screen enclosure cleaning",
        "Gutter exterior brightening and downspout flushing",
        "Commercial storefront and parking-area cleaning",
        "Mailbox, fence, and play-set restoration",
      ]}
      benefits={[
        "10 minutes from our Groveland shop",
        "No travel fee in Minneola",
        "Roof warranty-safe soft wash methods",
        "Clear pricing — no upsell at the door",
        "Saturday appointments available",
        "Plant-safe rinses, full landscape protection",
        "References from Reserve at Minneola and Ardmore Reserve",
        "Fully licensed and insured in Lake County",
      ]}
      responseTime="Same day to 48 hours"
      travelCharge="No charge"
    />
  );
};

export default Minneola;
