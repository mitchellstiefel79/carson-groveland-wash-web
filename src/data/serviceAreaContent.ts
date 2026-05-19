import type { LongFormSection, FAQ } from "@/components/LongFormSections";

/**
 * Long-form, SEO-depth content blocks for each service area.
 *
 * Strategy: a shared library of "deep" sections (Florida climate, soft wash
 * method, paver sealing science, pricing factors, what to expect, common
 * mistakes) is composed with city-specific sections (neighborhoods,
 * scheduling notes, local quirks). Each city's page ends up well above
 * 1,500 words while staying genuinely useful, not boilerplate.
 */

const sharedFloridaClimate = (city: string): LongFormSection => ({
  heading: `Why ${city} Exteriors Get Dirty So Fast`,
  body: `Central Florida punishes exterior surfaces in ways homeowners moving in from the Northeast or Midwest rarely expect. Around ${city}, three forces combine almost year-round to grow algae, mildew, mold, and lichen on roofs, siding, soffits, fences, pool decks, and pavers:`,
  bullets: [
    "Sustained humidity above 70% for most of the year, which keeps porous surfaces damp long enough for spores to colonize.",
    "Daily UV exposure that breaks down sealers, paint binders, and shingle granules — leaving micro-pits that hold dirt and biological growth.",
    "Afternoon thunderstorms that deposit airborne pollen, lake mist, and organic debris, then bake it on under the next day's sun.",
    "Sandy, mineral-rich soils that splash up onto lower siding and pool deck edges every time it rains, leaving orange rust-like staining.",
    "Lawn-irrigation systems that mist iron-bearing well water onto stucco, screens, and pavers — the classic 'orange beard' rust stain.",
  ],
  subSections: [
    {
      heading: "The black streaks on your roof aren't dirt",
      body: `Those dark stains running down ${city} shingle and tile roofs are colonies of Gloeocapsa magma, a cyanobacterium that eats the limestone filler in modern shingles. Power-washing it off looks satisfying for a week, then it grows back worse because the protective biocide has been blasted off with it. A true soft wash kills the organism at the cellular level so the roof stays clean for 1 to 3 years instead of 30 days.`,
    },
    {
      heading: "Mildew on stucco and siding behaves differently",
      body: `On vertical surfaces, what looks like 'green dirt' on the north and east walls of ${city} homes is usually a film of mildew plus pollen bound together by humidity. It needs a dwell-time detergent — not pressure — to break the biological bond. Hitting it with a wand at 3,000+ PSI drives water behind siding, scars stucco, and leaves the spores alive to bloom back within weeks.`,
    },
  ],
});

const sharedSoftWashMethod = (city: string): LongFormSection => ({
  heading: `Our Soft Wash Method, Step by Step (in ${city})`,
  body: `Every ${city} job follows the same disciplined sequence. There are no shortcuts — and no surprise add-ons at the end.`,
  subSections: [
    {
      heading: "1. Walkaround and substrate check",
      body: "Before any chemistry comes off the truck, we walk the property with you, photograph each surface, and identify substrates (shingle vs tile, stucco vs Hardie, clay paver vs concrete paver, vinyl vs aluminum screen). Every substrate needs a slightly different detergent ratio.",
    },
    {
      heading: "2. Landscape protection",
      body: "Plants are pre-watered so leaves are saturated and won't absorb runoff. Sensitive shrubs are tarped. Pool equipment, AC condensers, and outdoor electronics are covered. We use plant-safe surfactants and neutralizing rinses — not raw sodium hypochlorite splashed on a foundation bed.",
    },
    {
      heading: "3. Soft wash application",
      body: "A true 12-volt soft wash pump delivers detergent at garden-hose pressure (well under 100 PSI at the surface) through a fan tip. Dwell time — typically 8 to 20 minutes — does the cleaning, not pressure. You'll see the algae lift and the surface brighten without a single droplet of high-pressure water touching it.",
    },
    {
      heading: "4. Low-pressure rinse",
      body: "We rinse top-down with a wide fan tip, watching runoff color and adjusting until water runs clear. Gutters and downspouts get flushed. Screens and lanais get a second pass to lift detergent film.",
    },
    {
      heading: "5. Final walkaround",
      body: "We walk the property again with you, this time looking at the cleaned result in daylight. If anything was missed, we re-treat on the spot. Then we send you before/after photos along with the invoice — same day.",
    },
  ],
});

const sharedPaverSealing = (city: string): LongFormSection => ({
  heading: `Paver Sealing in ${city}: What Actually Works in Florida`,
  body: `Sealing pavers in Florida is not the same job it is in Ohio or Georgia. Our heat, our UV, and our daily storms destroy consumer-grade big-box sealers within a single summer. Here's what we use and why:`,
  bullets: [
    "Solvent-based, breathable urethane or hybrid sealers — never pure acrylic film-formers that trap moisture and cause 'blushing' (cloudy white haze).",
    "Polymeric joint sand re-installation before sealing — locks the joints, blocks weeds, and prevents ant tunneling.",
    "Two thin coats rather than one heavy coat — heavy coats cure into a glossy film that peels within months.",
    "Cure window of 24-48 hours of dry weather — we watch the forecast and reschedule if storms move in.",
    "Color choice up front: natural matte, semi-gloss, or full wet-look — each has different maintenance intervals.",
  ],
  subSections: [
    {
      heading: "Why we never use big-box DIY sealer on a customer's driveway",
      body: `Most consumer sealers sold at home improvement stores are pure water-based acrylics formulated for the national market — not Florida. They flash-cure under our heat, trap subsurface moisture, and turn milky white within one rainy season. Stripping a failed DIY sealer off a ${city} paver driveway costs more than the original professional seal would have.`,
    },
    {
      heading: "Maintenance reality",
      body: `Even the best professional seal needs a refresh every 2 to 4 years in ${city}. We mark our calendar and reach out at the right interval — no pressure to re-seal early, and no warranty games. If your driveway needs a light recoat, we'll quote a light recoat. If it needs a full strip and re-seal, we'll explain exactly why.`,
    },
  ],
});

const sharedPricingFactors = (city: string): LongFormSection => ({
  heading: `What Drives the Price of a ${city} Soft Wash or Paver Sealing Job`,
  body: `We quote in writing, with no surprises, but here's how the math actually works so you can compare apples to apples against other estimates:`,
  bullets: [
    "Square footage of the surface being cleaned (roof, walls, driveway, pool deck — each measured separately).",
    "Substrate type — tile roofs take longer than shingle; travertine needs different chemistry than concrete paver.",
    "Story count and roof pitch — two-story access and steep pitches add time and safety gear.",
    "Severity of growth — a roof that's never been cleaned needs more dwell time than one on a maintenance program.",
    "Special stains — rust from irrigation, battery acid from a forgotten car battery, red clay from new construction.",
    "Add-on services bundled the same day (e.g., washing the house and the driveway together costs less than two separate trips).",
  ],
  subSections: [
    {
      heading: "Recurring maintenance saves real money",
      body: `Most ${city} homeowners we work with end up on a 12- or 18-month soft wash cycle. The recurring price is typically 25-40% less than a one-time wash because the growth never gets a chance to fully re-establish. We don't lock you into a contract — it's a reminder, not a subscription.`,
    },
  ],
});

const sharedMistakes = (city: string): LongFormSection => ({
  heading: `Common Mistakes ${city} Homeowners Make With Pressure Washing`,
  bullets: [
    "Hiring the cheapest quote without asking what method they use — pressure on a tile roof can cost you a new roof.",
    "Letting a contractor 'turbo nozzle' a painted stucco wall — it leaves visible swirl marks that don't come out.",
    "Sealing pavers before they're fully dry — traps moisture and causes white blushing within weeks.",
    "Using bleach straight from a jug to 'do it yourself' — kills landscaping, etches concrete, and leaves streaks.",
    "Waiting until the HOA letter arrives — by then the algae has had months to dig into the substrate, making the job harder and more expensive.",
    "Assuming all soft wash companies are equal — ask whether they use a 12-volt pump, ARMA-compliant chemistry, and carry actual liability insurance.",
  ],
});

const sharedWhatToExpect = (city: string): LongFormSection => ({
  heading: `What to Expect When You Book a ${city} Job`,
  subSections: [
    {
      heading: "Booking and quote",
      body: `Most ${city} quotes are turned around the same day. We don't do high-pressure sales, we don't show up uninvited, and we don't text you for weeks if you decide not to book.`,
    },
    {
      heading: "Day of the job",
      body: "Our crew arrives in a marked truck, in uniform, with a printed copy of your quote. We walk the property with you, confirm scope, and start work. Most residential jobs take 2 to 5 hours depending on size.",
    },
    {
      heading: "After the job",
      body: "You get before/after photos and a written invoice the same day. Payment is due on completion — card, check, or ACH. We don't take deposits on standard residential work.",
    },
    {
      heading: "Warranty",
      body: "Roof soft washes carry a 1-year no-streak warranty. Paver sealing carries a workmanship warranty based on the sealer chosen and the maintenance schedule we agree on at quote.",
    },
  ],
});

const sharedFAQs = (city: string): FAQ[] => [
  {
    question: `How much does soft washing cost in ${city}, FL?`,
    answer: `Most single-story ${city} homes fall between $250 and $450 for a full exterior soft wash; two-story homes typically run $400 to $700. Roof soft washing is priced separately by square footage and pitch — usually $400 to $900 for an average ${city} home. We always quote in writing before any work starts, and there are no hidden fees.`,
  },
  {
    question: `Is soft washing safe for shingle and tile roofs in ${city}?`,
    answer: `Yes — when it's done correctly. We follow ARMA (Asphalt Roofing Manufacturers Association) guidelines: low pressure under 500 PSI, balanced sodium hypochlorite chemistry with surfactants, and proper dwell time. This is the method roof manufacturers actually endorse for warranty compliance. The damage you've heard about almost always comes from high-pressure washing, which we never do on a roof.`,
  },
  {
    question: `How often should I have my ${city} home soft washed?`,
    answer: `In ${city}'s humidity, most homes benefit from a full exterior soft wash every 12 to 18 months. Roofs typically need cleaning every 2 to 3 years. Paver driveways and pool decks usually need a clean every 12 months and a re-seal every 2 to 4 years depending on the sealer chosen and sun exposure.`,
  },
  {
    question: `Will the chemicals you use hurt my plants, pets, or pool?`,
    answer: `No. We pre-saturate all landscaping so leaves can't absorb runoff, we tarp anything sensitive, and the surfactants we use are biodegradable. Pets can be back outside as soon as the surfaces are dry — usually within an hour of completion. Pool covers aren't required, but we'll tarp pool equipment and any open electrical.`,
  },
  {
    question: `Do you service ${city} year-round?`,
    answer: `Yes. Unlike northern states, Central Florida lets us work essentially every month of the year. Winter is actually a great time for soft washing — lower humidity means faster dry times and cleaner results. We only reschedule for active thunderstorms or sustained temperatures below 50°F, which is rare in ${city}.`,
  },
];

interface CityContent {
  intro: string;
  localSection: LongFormSection;
  faqs?: FAQ[];
}

const cities: Record<string, CityContent> = {
  Groveland: {
    intro:
      "Groveland is our hometown. We started Carson's Soft Wash here in 2024 and we still live, eat, and shop within 10 minutes of the shop. That's why we're able to offer same-day quotes, no travel charges inside the city limits, and a level of accountability you simply don't get from a crew driving in from Orlando.",
    localSection: {
      heading: "Neighborhoods and Properties We Work On in Groveland",
      body: "We clean homes and businesses across every part of Groveland — from the historic district off Broad Street to the newer master-planned communities on the south and west sides. Some of the areas we're in almost every week:",
      bullets: [
        "Trilogy at Cherry Lake — 55+ community, lots of tile roofs and paver driveways we maintain on a recurring schedule.",
        "Waterside Pointe — lakefront and gated homes off Lake Hiawatha; mix of tile and shingle roofs.",
        "Estates at Cherry Lake — large homesites with long paver driveways and full pool decks.",
        "Garden City — older homes with metal roofs and painted block construction.",
        "Eagle Pointe — newer construction with stucco walls and concrete paver entries.",
        "Downtown Groveland — small commercial buildings, City Hall area, and historic homes along Magnolia.",
        "Industrial / SR-50 corridor — restaurants, storefronts, and fleet vehicle washing.",
      ],
      subSections: [
        {
          heading: "Why being Groveland-based actually matters",
          body: "We're not paying for a fleet to drive 45 minutes each way, so we don't have to price that in. We can show up the same afternoon for a quote, we can run back for a touch-up the next day if something needed a second pass, and if you have a question six months later you call the same phone number and reach the same person.",
        },
      ],
    },
  },
  Clermont: {
    intro:
      "Clermont sits on the highest ground in Florida, and that elevation combined with the chain-of-lakes humidity creates exterior cleaning challenges that flatter parts of Lake County don't see. We work in Clermont almost every day — typically 10 minutes from our Groveland shop with zero travel charge.",
    localSection: {
      heading: "Neighborhoods and Properties We Work On in Clermont",
      bullets: [
        "Kings Ridge — large 55+ community, predominantly tile roofs and paver driveways; we run a quarterly maintenance route here.",
        "Heritage Hills — newer two-story stucco homes with tile roofs and paver entries.",
        "Sawgrass Bay — concrete paver driveways and pool decks that benefit from regular re-sanding and sealing.",
        "Lake Minnehaha and Lake Minneola lakefront homes — high mildew load from the water and lots of dock and seawall work.",
        "Hammock Pointe and Magnolia Pointe — established neighborhoods with shingle roofs that need 2-year soft wash cycles.",
        "Downtown Clermont (Montrose Street) — small business and restaurant exteriors.",
        "South Lake Hospital and medical office corridor — commercial maintenance contracts.",
      ],
      subSections: [
        {
          heading: "Clermont's hills change the job",
          body: "Sloped lots are common in Clermont, and they affect everything from how runoff is directed to how we set ladders for two-story washes. We plan tarping and rinse direction up front so detergent runs away from landscaping and pools, not toward them.",
        },
      ],
    },
  },
  Mascotte: {
    intro:
      "Mascotte is right next door to Groveland, and we know the older neighborhoods off Sunset Avenue, the newer builds in Knight Lake Estates, and the mobile-home and manufactured-home communities along SR-50 well. We price fair, we don't upsell services your home doesn't need, and we respond fast.",
    localSection: {
      heading: "Neighborhoods and Properties We Work On in Mascotte",
      bullets: [
        "Knight Lake Estates — newer single-family homes with stucco and shingle roofs.",
        "Sunset Avenue corridor — older Florida-style homes with metal and shingle roofs.",
        "Manufactured-home communities along SR-50 — painted aluminum siding and metal roofs that need gentle low-pressure cleaning.",
        "Downtown Mascotte and City Hall area — small commercial cleaning.",
        "Rural properties west of town — barns, outbuildings, and long gravel-edge driveways.",
      ],
      subSections: [
        {
          heading: "Mobile and manufactured homes need a different touch",
          body: "Painted aluminum siding dents easily and the seams between panels leak under high pressure. We use a true soft wash here — never a wand — and we cover skirting vents and AC units before we start.",
        },
      ],
    },
  },
  Minneola: {
    intro:
      "Minneola is just up the hill from us, and we run regularly through Reserve at Minneola, Ardmore Reserve, Park View at the Hills, and the older homes along Pearl Street and US-27. Lake-facing roofs get heavy algae streaks within a year or two — we keep them clean with ARMA-compliant soft wash chemistry.",
    localSection: {
      heading: "Neighborhoods and Properties We Work On in Minneola",
      bullets: [
        "Reserve at Minneola — two-story stucco homes with tile roofs and paver driveways.",
        "Ardmore Reserve — large lots with full pool decks and screen enclosures.",
        "Park View at the Hills — newer construction with concrete paver entries.",
        "Pearl Street / downtown Minneola — historic homes and small businesses.",
        "US-27 commercial corridor — storefront and shopping plaza cleaning.",
        "Lake-facing properties — heavy algae load, ideal candidates for annual maintenance.",
      ],
    },
  },
  Montverde: {
    intro:
      "Montverde is a small town with big properties: clay-tile roofs above Lake Apopka, long paver driveways winding through Bella Collina, and custom estates along Ridgewood Avenue and the Montverde Academy corridor. These homes need a careful hand and discreet scheduling — not a high-pressure crew.",
    localSection: {
      heading: "Estate-Grade Work in Montverde",
      bullets: [
        "Bella Collina — gated luxury community, long paver driveways and tile roofs on a recurring maintenance schedule.",
        "Ridgewood Avenue estates — older custom homes with mature landscaping that needs careful protection.",
        "Montverde Academy area — staff and faculty residences as well as occasional facility work.",
        "Lake Apopka lakefront — boat docks, seawalls, and waterfront-facing lanais.",
        "Equestrian properties — barn exteriors, fence lines, and clay-paver entrances.",
      ],
      subSections: [
        {
          heading: "Discreet, by-appointment service",
          body: "Estate clients value privacy and predictability. We arrive in unmarked or minimally-marked vehicles when requested, work within agreed time windows, and send detailed photo reports rather than asking the homeowner to walk the property.",
        },
      ],
    },
  },
  Oakland: {
    intro:
      "Oakland is a small, historic town tucked between Winter Garden and Lake Apopka, and that small-town character is exactly what we work to protect. Older Florida-style homes here need gentle, balanced soft wash chemistry — never a high-pressure wand.",
    localSection: {
      heading: "Neighborhoods and Properties We Work On in Oakland",
      bullets: [
        "Historic downtown Oakland — older block-and-stucco homes and small civic buildings.",
        "Oakland Park — newer master-planned community with stucco homes and paver entries.",
        "Longleaf at Oakland — recent construction with shingle roofs that benefit from a 2-year soft wash cycle.",
        "West Orange Trail-adjacent properties — fences, sheds, and rear-yard hardscape regularly exposed to the trail's foot and bike traffic dust.",
        "Rural acreage west of town — barns, outbuildings, and long concrete or paver driveways.",
      ],
    },
  },
  Windermere: {
    intro:
      "Windermere homes — from the brick streets around Main Street to the gated estates of Isleworth, Keene's Pointe, Lake Butler Sound, and Reserve at Lake Butler Sound — are exactly the kind of properties where pressure-washing the wrong way causes real damage. We use a true 12-volt soft wash system and chemistry adjusted to each substrate.",
    localSection: {
      heading: "Estate-Grade Work in Windermere",
      bullets: [
        "Isleworth — guard-gated, vendor-compliant access; tile roofs and travertine pool decks on recurring maintenance.",
        "Keene's Pointe — large lakefront estates with long paver driveways and boat docks.",
        "Lake Butler Sound and Reserve at Lake Butler Sound — premium properties needing careful chemistry around copper accents and stone.",
        "Downtown Windermere brick streets — older homes with mature oak canopy and heavy organic load.",
        "Butler Chain lakefront — boathouses, seawalls, and dock cleaning with environmental controls.",
      ],
      subSections: [
        {
          heading: "Working inside guard-gated communities",
          body: "We carry the insurance certificates, W-9s, and background-check documentation that Isleworth, Keene's Pointe, and similar communities require for vendor access. Our crews are uniformed, our trucks are clean, and we schedule within the community's posted work-hour windows.",
        },
      ],
    },
  },
  "Winter Garden": {
    intro:
      "Winter Garden has a great mix of historic downtown buildings along Plant Street, established neighborhoods like Stoneybrook West and Bradford Creek, and newer master-planned communities like Hamlin and Independence. That mix means we adjust our approach house to house and business to business.",
    localSection: {
      heading: "Neighborhoods and Properties We Work On in Winter Garden",
      bullets: [
        "Plant Street downtown — historic brick, clapboard, and painted stucco storefronts and restaurants.",
        "Stoneybrook West and Stoneybrook Hills — established two-story stucco homes with tile and shingle roofs.",
        "Bradford Creek — older neighborhood with mature landscaping and shingle roofs.",
        "Hamlin and Independence — newer master-planned communities with paver entries and stucco exteriors.",
        "Hickory Hammock and Lake Sawyer — travertine pool decks that need annual cleaning to prevent etching.",
        "Winter Garden Village retail corridor — storefront and commercial maintenance.",
      ],
      subSections: [
        {
          heading: "Scheduling around downtown businesses",
          body: "Plant Street restaurants and shops need work done before opening or after close. We routinely schedule 5-9 AM washes for restaurants and pre-Friday cleanings for shops heading into weekend foot traffic.",
        },
      ],
    },
  },
};

export function getServiceAreaContent(city: string): {
  intro: string;
  sections: LongFormSection[];
  faqs: FAQ[];
} {
  const cityData = cities[city];
  const intro = cityData?.intro ?? "";
  const sections: LongFormSection[] = [
    sharedFloridaClimate(city),
    sharedSoftWashMethod(city),
    ...(cityData ? [cityData.localSection] : []),
    sharedPaverSealing(city),
    sharedPricingFactors(city),
    sharedMistakes(city),
    sharedWhatToExpect(city),
  ];
  const faqs = cityData?.faqs ?? sharedFAQs(city);
  return { intro, sections, faqs };
}
