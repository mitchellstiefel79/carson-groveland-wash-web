import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { getServiceAreaContent } from "@/data/serviceAreaContent";

const Montverde = () => {
  const { intro, sections, faqs } = getServiceAreaContent("Montverde");
  return (
    <ServiceAreaTemplate
      name="Montverde"
      description="Discreet, premium soft washing and paver sealing for Montverde's lakefront estates and hillside homes."
      heroImage="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Montverde_Town_Hall01.jpg/1920px-Montverde_Town_Hall01.jpg"
      imageCredit="Montverde Town Hall — Wikimedia Commons (CC BY 2.5)"
      isPrimary={false}
      aboutParagraph={`Montverde is a small town with big properties — clay-tile roofs above Lake Apopka, long paver driveways winding through Bella Collina, and custom estates along Ridgewood Avenue and the Montverde Academy corridor. These homes need a careful hand, not a high-pressure crew. We soft wash tile and metal roofs at well under 500 PSI to remove algae and mildew without disturbing the underlayment, then move to siding, soffits, columns, and lanais using detergents that are safe on travertine, limestone, and painted stucco. Long paver driveways and pool decks get a full restoration cycle: surface clean, polymeric re-sanding, and a sealer matched to the look you want — natural, matte, or wet-look. We schedule around your week, keep crews tidy and uniformed, and send before/after photos with every invoice.`}
      services={[
        "Soft wash for tile, metal, and shingle estate roofs",
        "Two- and three-story custom home exterior washing",
        "Long paver driveway and entrance cleaning",
        "Premium paver sealing (matte, natural, or wet-look)",
        "Travertine and limestone pool deck cleaning",
        "Lanai, screen enclosure, and outdoor kitchen wash",
        "Boat dock, seawall, and lakefront cleaning",
        "Discreet recurring maintenance programs",
      ]}
      benefits={[
        "Experienced on Bella Collina and Lake Apopka estates",
        "Soft wash methods safe for tile and slate",
        "Premium detergents and sealers available",
        "Uniformed, background-checked technicians",
        "Flexible scheduling around your calendar",
        "Detailed before/after photo reports",
        "Insured up to commercial estate values",
        "References from comparable Montverde properties",
      ]}
      responseTime="2-5 business days"
      travelCharge="Minimal charge for larger projects"
      longFormIntro={intro}
      longFormSections={sections}
      faqs={faqs}
    />
  );
};

export default Montverde;
