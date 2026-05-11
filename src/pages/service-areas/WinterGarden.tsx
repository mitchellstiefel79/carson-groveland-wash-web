import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";

const WinterGarden = () => {
  return (
    <ServiceAreaTemplate
      name="Winter Garden"
      description="Soft washing for Winter Garden's historic downtown, Plant Street businesses, and growing residential communities."
      heroImage="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Winter_Garden_watertower02.jpg/1920px-Winter_Garden_watertower02.jpg"
      imageCredit="Historic Winter Garden water tower — Wikimedia Commons (CC BY-SA 3.0)"
      isPrimary={false}
      aboutParagraph={`Winter Garden has a great mix of historic downtown buildings along Plant Street, established neighborhoods like Stoneybrook West and Bradford Creek, and newer master-planned communities like Hamlin and Independence. That mix means we adjust our approach house to house: gentle soft washing for older brick, clapboard, and painted stucco downtown; standard low-pressure soft wash for the newer two-story stucco homes; and surface-cleaning with hot water for paver driveways and the popular travertine pool decks around Hickory Hammock and Lake Sawyer. We're familiar with Winter Garden HOA rules and downtown business hours, so we schedule restaurant and retail cleanings before opening or after close, and residential jobs around school drop-off and pickup. All detergents are biodegradable and rinsed away from landscaping.`}
      services={[
        "Gentle soft wash for historic downtown buildings",
        "Two-story stucco and Hardie house washing",
        "Plant Street storefront and restaurant cleaning",
        "Driveway, sidewalk, and brick walkway pressure washing",
        "Paver sealing and travertine pool deck cleaning",
        "Soft wash roof cleaning for shingle and tile",
        "HOA common area and clubhouse cleaning",
        "Recurring commercial maintenance programs",
      ]}
      benefits={[
        "Experience with downtown historic structures",
        "Gentle methods that protect older masonry and paint",
        "Pre-open and post-close scheduling for businesses",
        "Familiar with Winter Garden HOA standards",
        "Eco-friendly, plant-safe detergents",
        "Weekend and evening availability",
        "Local references from Plant Street merchants",
        "Fully licensed and insured in Orange County",
      ]}
      responseTime="3-5 business days"
      travelCharge="Small travel fee for larger jobs"
    />
  );
};

export default WinterGarden;
