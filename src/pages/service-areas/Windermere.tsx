import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";

const Windermere = () => {
  return (
    <ServiceAreaTemplate
      name="Windermere"
      description="Premium, low-pressure soft washing and paver sealing for Windermere's Butler Chain estates and luxury communities."
      heroImage="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Windermere_Town_Hall01.jpg/1920px-Windermere_Town_Hall01.jpg"
      imageCredit="Windermere Town Hall — Wikimedia Commons (CC BY 2.5)"
      isPrimary={false}
      aboutParagraph={`Windermere homes — from the brick streets around Main Street to the gated estates of Isleworth, Keene's Pointe, Lake Butler Sound, and Reserve at Lake Butler Sound — are exactly the kind of properties where pressure-washing the wrong way causes real damage. We use a true 12-volt soft wash system on tile and shingle roofs at less than 500 PSI, paired with detergent dwell times that kill algae and mildew at the root rather than just rinsing them off. House exteriors, columns, balustrades, copper accents, lanais, and screen enclosures get the same low-pressure treatment with chemistry adjusted to the substrate. Long paver driveways and travertine pool decks are surface-cleaned, polymeric re-sanded, and sealed with a finish you choose — natural, matte, or wet-look. Crews are uniformed, background-checked, and used to working inside guard-gated communities with strict vendor rules.`}
      services={[
        "Estate-grade soft wash for tile and shingle roofs",
        "Two- and three-story luxury home exterior washing",
        "Long paver driveway cleaning and re-sealing",
        "Travertine and marble pool deck cleaning",
        "Boat dock, boathouse, and seawall soft wash",
        "Lanai, outdoor kitchen, and pavilion cleaning",
        "Tile roof brightening with no walking on tile",
        "Quarterly maintenance programs available",
      ]}
      benefits={[
        "Experienced inside Isleworth, Keene's Pointe, Lake Butler Sound",
        "Vendor compliant with guard-gated communities",
        "Soft wash methods safe for tile, slate, and copper",
        "Premium sealers — natural, matte, or wet-look",
        "Uniformed, background-checked technicians",
        "Detailed before/after photo reports",
        "Insured to estate-property values",
        "Discreet, by-appointment scheduling",
      ]}
      responseTime="2-4 business days"
      travelCharge="Minimal for premium properties"
    />
  );
};

export default Windermere;
