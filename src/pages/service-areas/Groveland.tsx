import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { getServiceAreaContent } from "@/data/serviceAreaContent";

const Groveland = () => {
  const { intro, sections, faqs } = getServiceAreaContent("Groveland");
  return (
    <ServiceAreaTemplate
      name="Groveland"
      description="Our home base — same-day soft wash, paver sealing, and pressure washing for Groveland homes and businesses."
      heroImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Newett_Building%3B_Groveland%2C_Florida.jpg/1920px-Newett_Building%3B_Groveland%2C_Florida.jpg"
      imageCredit="Newett Building, Groveland, FL — Wikimedia Commons (CC BY-SA 4.0)"
      isPrimary={true}
      aboutParagraph={`Groveland is our hometown, and most days you'll see our trucks somewhere between South Lake High School, Cherry Lake Park, and the Mascotte line. We use a true 12-volt soft wash on Groveland's clay-tile and shingle roofs to lift the black streaks (Gloeocapsa magma) the humidity along the Green Swamp keeps feeding, then move down to wash siding, stucco, lanais, and pool screens with the same low-pressure mix — never a turbo nozzle on a painted surface. For driveways, sidewalks, and paver patios in neighborhoods like Trilogy, Waterside Pointe, and Estates at Cherry Lake, we surface-clean with hot water and finish with re-sanding and a wet-look or matte sealer that holds up to Florida sun and afternoon storms. Because Groveland is right outside the door, scheduling is flexible, travel is free inside city limits, and most quotes can be turned around the same afternoon.`}
      services={[
        "Soft wash roof cleaning (shingle, tile, metal)",
        "Two-story house washing on stucco, vinyl, and block",
        "Driveway, sidewalk, and pool deck pressure washing",
        "Paver re-sanding and sealing (wet-look or matte)",
        "Pool screen enclosure soft wash",
        "Fence and wood deck restoration",
        "Commercial storefronts and HOA common areas",
        "Rust, oil, and battery-acid stain treatment",
      ]}
      benefits={[
        "Groveland-based — same-day or next-day service",
        "No travel fee inside city limits",
        "ARMA-compliant soft wash, safe on shingles and tile",
        "1-year no-streak warranty on roof washes",
        "Licensed and insured in Lake County, FL",
        "Plant-safe biodegradable detergents",
        "Free written quotes, no high-pressure sales",
        "Locally owned, founded in Groveland in 2024",
      ]}
      responseTime="Same day or next day"
      travelCharge="No charge within city limits"
    />
  );
};

export default Groveland;
