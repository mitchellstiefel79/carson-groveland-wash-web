import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { getServiceAreaContent } from "@/data/serviceAreaContent";

const Oakland = () => {
  const { intro, sections, faqs } = getServiceAreaContent("Oakland");
  return (
    <ServiceAreaTemplate
      name="Oakland"
      description="Friendly, fair-priced soft washing and pressure washing for the town of Oakland, FL."
      heroImage="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/OaklandFloridaTownHall7092.JPG/1920px-OaklandFloridaTownHall7092.JPG"
      imageCredit="Oakland, FL Town Hall — Wikimedia Commons (CC BY-SA)"
      isPrimary={false}
      aboutParagraph={`Oakland is a small, historic town tucked between Winter Garden and Lake Apopka, and that small-town character is exactly what we work to protect. We see a lot of older Florida-style homes here — block construction, painted stucco, metal and shingle roofs — plus newer builds in Oakland Park and Longleaf at Oakland. Older roofs need a true soft wash with low pressure and balanced chemistry so we lift the algae and mildew without compromising the shingle granules or seals around vents and skylights. House exteriors, soffits, and screen enclosures get the same gentle low-pressure treatment, and concrete driveways, paver entries, and pool decks are surface-cleaned and (if you'd like) re-sealed for a clean, even finish. Pricing is honest and locked in writing — no surprise charges when we show up.`}
      services={[
        "Soft wash house cleaning for stucco, block, and siding",
        "Shingle and metal roof soft washing",
        "Driveway, sidewalk, and West Orange Trail-side cleaning",
        "Paver sealing and joint re-sanding",
        "Pool deck and screen enclosure cleaning",
        "Wood and vinyl fence restoration",
        "Small business and historic storefront cleaning",
        "Barn, shed, and rural building exterior washing",
      ]}
      benefits={[
        "Right next to Winter Garden — easy to reach",
        "Honest, locked-in written pricing",
        "Experience with older Florida block and stucco homes",
        "Comfortable on rural properties and longer drives",
        "Plant-safe rinses for landscaped yards",
        "Flexible weekday and Saturday scheduling",
        "Family-owned with a small-town service approach",
        "Licensed and insured in Orange County",
      ]}
      responseTime="3-5 business days"
      travelCharge="Reasonable travel fee"
      longFormIntro={intro}
      longFormSections={sections}
      faqs={faqs}
    />
  );
};

export default Oakland;
