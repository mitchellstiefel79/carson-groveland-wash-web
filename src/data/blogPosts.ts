// Cornerstone educational blog content for Carson's Soft Wash.
// Each post is 1,200–1,600 words, authored by Carson Stiefel, with
// FAQ entries that get rendered into FAQPage JSON-LD on the post page.

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogFaq = { question: string; answer: string };

export type InternalLink = { label: string; href: string };

export type BlogPost = {
  slug: string;
  title: string; // <= 70 chars, used for <title>
  metaDescription: string; // <= 160 chars
  hubExcerpt: string; // shown on /blog hub
  category: string;
  readMinutes: number;
  datePublished: string; // ISO
  dateModified: string; // ISO
  heroImage: string; // path under /lovable-uploads or asset
  heroAlt: string;
  intro: string[]; // lead paragraphs before first H2
  sections: BlogSection[];
  faqs: BlogFaq[];
  relatedServices: InternalLink[];
  relatedAreas: InternalLink[];
};

const PUBLISHED = "2026-05-11";

export const BLOG_AUTHOR_ID =
  "https://carsonssoftwashservices.com/#carson-stiefel";

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-gloeocapsa-magma-roof-stains",
    title: "Gloeocapsa Magma: What Those Black Roof Stains Really Are",
    metaDescription:
      "Those black streaks on Florida roofs aren't dirt — they're Gloeocapsa magma, a living algae. Here's what it is, why it spreads in Lake County, and how to kill it safely.",
    hubExcerpt:
      "The black streaks on Florida roofs are a living algae called Gloeocapsa magma. Here's how it grows, what it eats, and why pressure washing makes it worse.",
    category: "Roof Cleaning",
    readMinutes: 7,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    heroImage: "/lovable-uploads/74691437-06d7-47c3-a140-7ee919fc173a.png",
    heroAlt:
      "Asphalt shingle roof in Groveland, FL with black Gloeocapsa magma streaks",
    intro: [
      "If you live in Groveland, Clermont, or anywhere else in Lake County, you've seen them: dark, almost soot-like streaks running down the north and west slopes of asphalt shingle roofs. Most homeowners assume it's dirt, soot from a chimney, or simply 'old roof' weathering. It isn't. Those stains are a living organism called Gloeocapsa magma, and once it takes hold in a Florida roof system, it doesn't stop on its own.",
      "This guide explains what Gloeocapsa magma actually is, why Central Florida is one of the worst climates for it in the country, what it does to your shingles over time, and the only cleaning method the asphalt shingle industry endorses for safely removing it.",
    ],
    sections: [
      {
        heading: "What Gloeocapsa magma actually is",
        paragraphs: [
          "Gloeocapsa magma is a species of cyanobacteria — a single-celled organism that photosynthesizes like a plant but reproduces like bacteria. It produces a dark, UV-protective outer sheath as it matures, and that sheath is what your eye reads as a 'black stain.' Younger colonies look greenish; mature colonies look almost black.",
          "It spreads by airborne spores. A single colony on a neighbor's roof can seed dozens of roofs downwind during a single rainy season. That's why entire subdivisions in Clermont and Minneola tend to streak in the same direction at roughly the same time — they're sharing one infestation.",
        ],
      },
      {
        heading: "Why Central Florida roofs are the perfect host",
        paragraphs: [
          "Gloeocapsa magma needs three things to thrive: moisture, warmth, and a food source. Lake County hands it all three on a silver platter.",
          "Our humidity rarely drops below 60% even in winter. Daily afternoon storms keep the north-facing roof slope damp for hours. And modern asphalt shingles are manufactured with limestone filler in the granule binder — limestone is calcium carbonate, and Gloeocapsa magma feeds on it. The shingle is literally lunch.",
        ],
        bullets: [
          "High year-round humidity (often 70–95%)",
          "Daily summer rainfall that keeps shaded slopes wet",
          "Mature tree canopies in older Groveland and Clermont neighborhoods",
          "Limestone-based shingle granules that the algae digests",
        ],
      },
      {
        heading: "Is it actually damaging my roof, or just ugly?",
        paragraphs: [
          "Both. The cosmetic damage is obvious, but the structural damage is the part most homeowners underestimate. As the algae digests the limestone in the granule layer, granules loosen and wash off in storms. Once the granule layer thins, UV hits the asphalt mat directly, the mat dries out, and the shingle starts to curl and crack years before its rated lifespan.",
          "There's also a thermal cost. A black-streaked roof absorbs significantly more solar heat than a clean one. In a Florida summer, that translates to a hotter attic and a measurably higher cooling bill. Several insurance carriers in Florida now flag heavily streaked roofs during aerial inspections and either require cleaning or refuse to renew the policy.",
        ],
      },
      {
        heading: "Why pressure washing a roof is a disaster",
        paragraphs: [
          "This is the single most important thing to understand: you cannot pressure wash an asphalt shingle roof. The Asphalt Roofing Manufacturers Association (ARMA) explicitly warns that high-pressure water blasts the granule layer off, voids most shingle warranties, and forces water under the shingle laps where it can't drain.",
          "We get calls every spring from homeowners in Mascotte and Winter Garden whose neighbor's brother-in-law 'cleaned' the roof with a pressure washer. The streaks come back within months because the algae roots are still alive — only the surface was scrubbed off — and now the roof has 5–10 years less life in it.",
        ],
      },
      {
        heading: "The ARMA-approved fix: low-pressure soft washing",
        paragraphs: [
          "Soft washing is the only roof cleaning method ARMA endorses. It uses a specially mixed sodium-hypochlorite-based solution applied at garden-hose pressure (under 100 PSI). The solution kills the algae at the cellular level, the dead colonies rinse off in the next rains, and the roof stays clean for 4–6 years on average in our climate.",
          "Done properly, soft washing also kills the spores hiding in the shingle pores, which is why a real soft wash lasts years and a pressure-wash 'cleaning' lasts months. The trade-off is that the chemistry has to be respected — landscaping has to be pre-soaked and rinsed, downspouts have to be diverted, and dwell times have to be controlled. That's why we recommend hiring a soft wash specialist rather than a general handyman.",
        ],
      },
      {
        heading: "What to do if your roof is already streaked",
        paragraphs: [
          "The good news: as long as the granule layer is still intact, a single soft wash will return the roof to near-original color in one visit. The bad news: every rainy season you wait, the colonies eat more granules. We routinely turn down jobs in Groveland where the shingle mat is already exposed — at that point, no cleaning helps and the homeowner needs a roofer.",
          "If you're seeing streaks, the move is to get an honest assessment now, not next year. Our quotes are free and we'll tell you straight up if a soft wash will help or if you've waited too long.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Gloeocapsa magma dangerous to my family?",
        answer:
          "It's not directly toxic to humans, but the spores can aggravate asthma and allergies, and the colonies trap pollen and mold around the roofline. The bigger risk is structural: it shortens shingle life and raises attic temperatures.",
      },
      {
        question: "How long until the stains come back after a soft wash?",
        answer:
          "In Lake County, a properly executed soft wash typically keeps a roof clean for four to six years. Heavy tree cover and north-facing slopes are on the shorter end of that range; open, sunny roofs can stay clean longer.",
      },
      {
        question: "Will my homeowners insurance cover roof cleaning?",
        answer:
          "Standard policies don't cover it as maintenance, but several Florida carriers now require it. If you've received a non-renewal letter citing roof condition, a documented soft wash is usually enough to satisfy the underwriter.",
      },
      {
        question: "Can I just buy a soft wash chemical and DIY it?",
        answer:
          "You can, and we don't blame anyone for trying, but the failure modes are expensive: killed landscaping, etched aluminum gutters, bleached driveways, and an uneven cleaning that looks worse than the stains. The chemistry isn't difficult; the application discipline is.",
      },
    ],
    relatedServices: [
      { label: "Roof soft washing", href: "/services" },
      { label: "House washing", href: "/services" },
    ],
    relatedAreas: [
      { label: "Groveland", href: "/service-areas/groveland" },
      { label: "Clermont", href: "/service-areas/clermont" },
      { label: "Minneola", href: "/service-areas/minneola" },
    ],
  },
  {
    slug: "soft-wash-vs-pressure-wash",
    title: "Soft Wash vs. Pressure Wash: Which One Does Your Home Need?",
    metaDescription:
      "Soft washing and pressure washing aren't the same. Here's a plain-English breakdown of which surfaces need which method, and what happens when you mix them up.",
    hubExcerpt:
      "Same equipment, completely different jobs. Here's exactly which surfaces need soft washing, which need pressure washing, and why the wrong choice destroys siding and shingles.",
    category: "Methods",
    readMinutes: 6,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    heroImage: "/lovable-uploads/74691437-06d7-47c3-a140-7ee919fc173a.png",
    heroAlt:
      "Soft washing a Florida home siding compared to pressure washing a paver driveway",
    intro: [
      "If you've called more than one washing company for a quote, you've probably gotten conflicting advice. One guy says everything gets pressure washed. Another insists everything gets soft washed. Neither is right, and the difference matters because using the wrong method on the wrong surface causes thousands of dollars of damage that doesn't show up until months later.",
      "This article breaks down what soft washing and pressure washing actually are, what each is designed to clean, and the surfaces where the two methods overlap. By the end you'll be able to tell whether the company you're hiring knows what they're doing in the first thirty seconds of the conversation.",
    ],
    sections: [
      {
        heading: "Pressure washing, defined honestly",
        paragraphs: [
          "Pressure washing uses water at 1,500–4,000 PSI to mechanically blast contamination off a hard surface. There's no chemistry doing the work — the water is the tool. It's fast, it's loud, and on the right surface it's spectacular.",
          "The key phrase is 'right surface.' Pressure washing is designed for masonry, concrete, brick, and unsealed pavers. It's also fine on metal roofs and fence boards, with the operator dialing pressure down. On anything porous, painted, sealed, or organic, high pressure either drives water where it shouldn't go or strips the finish entirely.",
        ],
      },
      {
        heading: "Soft washing, defined honestly",
        paragraphs: [
          "Soft washing uses a low-pressure spray (under 100 PSI — basically garden hose pressure) combined with a biodegradable cleaning solution that does the actual work. The solution kills mildew, algae, lichen, and bacteria at the cellular level. Then a gentle rinse carries the dead organisms off.",
          "Soft washing isn't 'less effective' pressure washing. It's a different tool for a different job. It's the only method that actually kills the organism instead of scrubbing the visible part off. That's why a proper soft wash lasts years and a pressure-wash on the same surface lasts a season.",
        ],
      },
      {
        heading: "The cheat sheet: which surface needs what",
        paragraphs: [
          "Here's the practical breakdown we use on every quote in Lake County:",
        ],
        bullets: [
          "Asphalt shingle roof: SOFT WASH ONLY. Pressure voids the warranty.",
          "Tile or metal roof: SOFT WASH for the algae kill, very low pressure rinse only.",
          "Vinyl, Hardie, or stucco siding: SOFT WASH. Pressure forces water behind the siding.",
          "Painted wood siding: SOFT WASH. Pressure peels paint.",
          "Screen pool enclosures: SOFT WASH. Pressure blows out screens and bends frames.",
          "Concrete driveway and walkway: PRESSURE WASH with a surface cleaner.",
          "Paver driveway, patio, pool deck: PRESSURE WASH at moderate PSI, then re-sand.",
          "Brick exterior: PRESSURE WASH at low PSI, or soft wash if mortar is aged.",
          "Wood deck or fence: SOFT WASH or low-pressure clean. Never high pressure.",
        ],
      },
      {
        heading: "What happens when you use the wrong method",
        paragraphs: [
          "Pressure washing a roof: granules blasted off, shingle life cut by 5–10 years, water driven up under the laps. We see this on at least one Clermont roof a month.",
          "Pressure washing siding: water shot up behind vinyl panels and into the wall cavity. Mold grows behind the wall where you can't see it for years. By the time you smell it, the drywall is rotten.",
          "Pressure washing a screen enclosure: torn screens, bent spline tracks, sometimes a $400+ rescreen bill from a $200 'cleaning.'",
          "Soft washing a driveway: kills the surface mildew but doesn't lift the embedded dirt and tire stains. Looks better for a week, then disappointment.",
        ],
      },
      {
        heading: "How a real exterior wash combines both",
        paragraphs: [
          "Most full-house jobs use both methods in a planned sequence. We typically soft wash the roof and siding first to kill organic growth, let the chemistry dwell, rinse, then come back with the surface cleaner on the driveway and walkways. The order matters — runoff from a roof soft wash can actually pre-treat a driveway, but only if you sequence it right.",
          "When you're getting quotes, ask the company to walk you through which surfaces they're soft washing and which they're pressure washing. If they say 'we just pressure wash everything,' that's your answer. If they say 'soft wash only, no exceptions,' that's also wrong — your concrete driveway needs mechanical cleaning. The right answer is always 'it depends on the surface.'",
        ],
      },
      {
        heading: "Pricing implications most homeowners miss",
        paragraphs: [
          "Soft washing isn't cheaper because the equipment is gentler — it's actually more expensive per square foot in chemicals. What you're paying for is the chemistry, the dwell time, the plant protection, and the operator who knows when to stop. Pressure washing a driveway is faster and cheaper because it's mostly labor and water.",
          "If a quote for a full house wash comes in suspiciously low, it's almost always because they're planning to pressure wash everything. The job will look fine for the first month, and then the consequences start. We'd rather lose a bid than under-quote a soft wash and cut corners on chemistry.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can the same machine do both soft washing and pressure washing?",
        answer:
          "Yes. Most professional rigs run a high-PSI pump for pressure washing and a low-pressure soft wash system fed by a 12-volt or air-driven pump. The same operator switches between them depending on the surface.",
      },
      {
        question: "Is soft washing safe around pets, kids, and gardens?",
        answer:
          "When done correctly, yes. We pre-soak landscaping with fresh water before applying solution, keep dwell times short, and rinse thoroughly. Pets and kids should stay inside during application and for about an hour after.",
      },
      {
        question: "Why does a soft wash 'smell like a pool' for a few hours?",
        answer:
          "The biodegradable solution is sodium-hypochlorite based — chemically similar to pool chlorine. The smell dissipates within a few hours and the solution biodegrades within 24–48 hours.",
      },
      {
        question: "How do I tell on a quote whether a company is doing it right?",
        answer:
          "Ask which surfaces will be soft washed versus pressure washed. A real pro can answer surface-by-surface in under a minute. If the answer is 'we just power wash everything,' get another quote.",
      },
    ],
    relatedServices: [
      { label: "House soft washing", href: "/services" },
      { label: "Driveway pressure washing", href: "/services" },
    ],
    relatedAreas: [
      { label: "Groveland", href: "/service-areas/groveland" },
      { label: "Clermont", href: "/service-areas/clermont" },
      { label: "Winter Garden", href: "/service-areas/winter-garden" },
    ],
  },
  {
    slug: "house-soft-washing-cost-lake-county-fl",
    title: "How Much Does House Soft Washing Cost in Lake County, FL?",
    metaDescription:
      "Honest 2026 pricing for house soft washing in Groveland, Clermont, and Lake County, FL. What drives the price up, what drives it down, and what to watch out for.",
    hubExcerpt:
      "Real 2026 pricing for soft washing a house in Lake County — what the numbers actually look like, what changes them, and the red flags in suspiciously cheap quotes.",
    category: "Pricing",
    readMinutes: 7,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    heroImage: "/lovable-uploads/74691437-06d7-47c3-a140-7ee919fc173a.png",
    heroAlt:
      "Single-story Lake County home being soft washed with low-pressure equipment",
    intro: [
      "Pricing on exterior cleaning is one of the least transparent areas of home maintenance. Companies bury rates behind 'free quote' buttons, and homeowners end up comparing a $189 special against a $750 quote with no idea why they're so different. So here are the actual numbers we see across Lake County in 2026, what moves them, and how to read a quote so you know what you're paying for.",
      "Everything below assumes a real soft wash — proper sodium-hypochlorite chemistry, plant protection, low-pressure application — not a guy in a truck pressure washing your siding.",
    ],
    sections: [
      {
        heading: "The honest 2026 price ranges",
        paragraphs: [
          "For a typical Lake County single-family home, here's what professional soft washing actually runs:",
        ],
        bullets: [
          "Single-story, 1,200–1,800 sq ft: $250–$400",
          "Single-story, 1,800–2,500 sq ft: $375–$525",
          "Two-story, 2,000–2,800 sq ft: $475–$700",
          "Two-story, 2,800–4,000 sq ft: $650–$950",
          "Estate / 4,000+ sq ft: custom quote, typically $900–$1,800+",
        ],
        // additional context paragraph below
      },
      {
        heading: "What moves the price up",
        paragraphs: [
          "These are the factors that legitimately raise a quote. If a company is charging more, ask whether one or more of these applies:",
        ],
        bullets: [
          "Heavy mildew or algae load (more chemistry, longer dwell)",
          "Two-story or three-story height (more setup, more reach)",
          "Painted wood or cedar siding (slower, gentler chemistry)",
          "Dense landscaping at the foundation (more pre-soak and rinse work)",
          "Pool screen, lanai, or detached garage included",
          "Stained driveway or paver pool deck added to the scope",
          "Travel beyond primary service area (we don't charge inside Groveland)",
        ],
      },
      {
        heading: "What pulls the price down",
        paragraphs: [
          "Conversely, some homes legitimately price below the ranges above:",
        ],
        bullets: [
          "Lightly soiled homes washed annually (less chemistry needed)",
          "Single-story, slab-on-grade with open landscaping",
          "Bundled service (house + driveway + roof on same visit)",
          "Neighbor referrals where we're already on the street",
          "Off-season scheduling (December–February in Lake County)",
        ],
      },
      {
        heading: "Why $99 'specials' almost always cost more in the end",
        paragraphs: [
          "Every spring, social media in Clermont and Minneola fills up with $99 or $129 'house wash' specials. The math doesn't work. A real soft wash on a 2,000 sq ft house uses $30–$50 in chemistry alone, plus 2–3 hours of labor for one or two people, plus equipment, fuel, and insurance. A $99 quote means one of three things is happening:",
          "First, they're pressure washing instead of soft washing — fast, cheap, and damaging. Second, they're under-mixing the chemistry to save money, which means the mildew comes back in weeks. Third, they're upselling on-site once they show up: 'Oh, this house actually needs the premium package, that'll be $450.'",
          "We've cleaned up after every one of those scenarios. The cheapest thing isn't the cheapest thing.",
        ],
      },
      {
        heading: "What a fair quote looks like in writing",
        paragraphs: [
          "A trustworthy soft wash quote should specify the soft wash method (not just 'wash'), the surfaces included (siding, soffit, fascia, gutters exterior, front porch), the surfaces excluded (windows, screens, roof unless specified), and any conditions that would change the price on arrival. It should include proof of insurance and a real phone number that a person answers.",
          "If the quote is verbal-only, vague on method, or arrives by text without a business name, treat that as the price you'd pay to fix the damage afterwards.",
        ],
      },
      {
        heading: "How often does the spend pay off",
        paragraphs: [
          "In our climate, an annual house soft wash is the cost-effective interval. Skipping a year means double the chemistry next time and more risk to paint and caulking. Skipping two years usually means the mildew has worked into the seams and you're paying for a heavier wash regardless.",
          "Spread across 12 months, a $400 annual soft wash works out to roughly $33/month — less than most pest control plans, and it has a much bigger visual and resale impact. Realtors in Clermont routinely tell sellers a fresh soft wash is the highest-ROI exterior prep before listing.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the price per square foot or flat-rate?",
        answer:
          "We quote flat-rate based on a walk-around or aerial measurement, not per square foot. Per-square-foot pricing tends to penalize simple homes and undercharge complex ones, so the totals come out wrong both ways.",
      },
      {
        question: "Do you require payment upfront?",
        answer:
          "No. Payment is due when the work is finished and you're satisfied. We accept card, check, and major digital wallets. Estate and commercial work can be invoiced.",
      },
      {
        question: "What's not included in a basic house wash quote?",
        answer:
          "Window cleaning (interior or exterior glass detailing), roof soft washing, screen enclosure cleaning, and driveway pressure washing are separate line items. We bundle them at a discount when scheduled together.",
      },
      {
        question: "Will you match a competitor's lower quote?",
        answer:
          "We'll review it. If they're quoting a real soft wash with the same scope and insurance, we'll match it or get close. If they're quoting a pressure wash, we'll explain the difference and let you decide.",
      },
    ],
    relatedServices: [
      { label: "House soft washing", href: "/services" },
      { label: "Roof cleaning", href: "/services" },
    ],
    relatedAreas: [
      { label: "Groveland", href: "/service-areas/groveland" },
      { label: "Clermont", href: "/service-areas/clermont" },
      { label: "Mascotte", href: "/service-areas/mascotte" },
    ],
  },
  {
    slug: "how-often-soft-wash-house-florida",
    title: "How Often Should You Soft Wash a House in Florida?",
    metaDescription:
      "Florida humidity grows mildew on siding faster than anywhere else in the country. Here's the right soft washing interval for Lake County homes — and the warning signs to watch for.",
    hubExcerpt:
      "In Florida humidity, the right soft washing interval isn't 'when it looks dirty.' Here's the schedule that actually protects siding, paint, and resale value.",
    category: "Maintenance",
    readMinutes: 6,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    heroImage: "/lovable-uploads/74691437-06d7-47c3-a140-7ee919fc173a.png",
    heroAlt:
      "Florida home with mildew growth on shaded siding requiring annual soft washing",
    intro: [
      "Most Florida homeowners wait until the house obviously looks dirty to call for a wash. By then, the mildew has already worked its way into the caulk lines and the underside of the soffits, and the next wash takes more chemistry, more time, and more money. The right cadence isn't 'when it looks bad' — it's 'before it looks bad.'",
      "Here's the cleaning interval that actually protects a home in Central Florida humidity, broken down by surface and by the conditions specific to Lake County.",
    ],
    sections: [
      {
        heading: "The baseline: once a year, every year",
        paragraphs: [
          "For a typical home in Groveland, Clermont, Minneola, or Mascotte, the right baseline is a full house soft wash once every 12 months. That cadence keeps mildew from establishing a foothold in the seams of vinyl panels, the ridges of Hardie board, the textures of stucco, and the underside of soffits where it likes to hide first.",
          "Annual washing also protects exterior caulking. Mildew metabolizes the plasticizers in caulk; once the caulk fails, water gets behind the trim and the repair stops being cosmetic.",
        ],
      },
      {
        heading: "Conditions that push it to every 6–9 months",
        paragraphs: [
          "Some homes need the cycle tightened. If two or more of these apply to you, plan on twice a year:",
        ],
        bullets: [
          "Heavy tree canopy on the north or west side of the house",
          "Adjacent to a lake, retention pond, or wetland",
          "Lakefront in Clermont or Montverde with sustained high humidity",
          "Painted wood or cedar siding (mildew sticks faster)",
          "Visible green or black streaking returns within 8 months of last wash",
          "Outdoor pets (concentrated organic activity around the foundation)",
        ],
      },
      {
        heading: "Conditions that let you stretch to every 14–18 months",
        paragraphs: [
          "Some homes can stretch the interval without consequence:",
        ],
        bullets: [
          "Open lots with full sun exposure all day",
          "Newer construction in Sawgrass Bay, Hamlin, or similar developments",
          "Stucco or block construction with limited landscaping at the foundation",
          "Annual roof soft wash + house wash done together (the spore load drops)",
        ],
      },
      {
        heading: "Surface-by-surface: what each part of the home needs",
        paragraphs: [
          "Different exterior surfaces grow grime at different rates. Here's the realistic schedule for Lake County:",
        ],
        bullets: [
          "Siding & soffit: every 12 months",
          "Roof (asphalt shingle): every 4–6 years",
          "Roof (tile or metal): every 2–4 years",
          "Concrete driveway: every 12–18 months",
          "Paver driveway/patio (sealed): every 12 months light clean, reseal every 3–5 years",
          "Pool screen enclosure: every 12 months",
          "Wood fence: every 18–24 months",
          "Wood deck: every 12 months light clean, reseal every 2–3 years",
        ],
      },
      {
        heading: "Warning signs you waited too long",
        paragraphs: [
          "If you see any of these, you're past the optimal interval and the next wash will cost more:",
        ],
        bullets: [
          "Black streaking running down the wall under gutter joints",
          "Green tint on the north-facing wall in shaded conditions",
          "Soffit panels showing dark spotting near the wall line",
          "Caulk lines turning gray, brown, or pulling away from the trim",
          "Visible spore lift when you press a finger against the siding",
        ],
      },
      {
        heading: "Why annual washing actually saves money",
        paragraphs: [
          "Annual soft washing protects two big-ticket items: paint and caulk. A professional repaint on a Lake County house runs $4,000–$10,000+. Re-caulking a whole house perimeter runs $800–$1,800. Mildew is the leading cause of premature failure for both. A $400 annual soft wash extends both jobs by years.",
          "There's also the resale conversation. Realtors in Clermont and Winter Garden report that homes washed within 60 days of listing photograph dramatically better and frequently appraise stronger because the inspector doesn't flag mildew on the report. A $400 wash that nudges the appraisal up $5,000 is the highest-ROI hour you'll ever spend on the house.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I just rinse the house with a hose between washes?",
        answer:
          "A monthly rinse with a garden hose on the lower walls helps slow new mildew growth, especially on shaded sides. It doesn't replace a chemistry wash, but it can stretch the interval by a month or two.",
      },
      {
        question: "Does washing in summer or winter make a difference?",
        answer:
          "Summer chemistry works faster but evaporates faster. Winter chemistry has longer dwell time but needs slightly stronger mix. Both seasons work — we book year-round in Lake County.",
      },
      {
        question: "What if I just had the house painted recently?",
        answer:
          "Wait 30 days after a fresh exterior paint job before any soft wash, then the annual cycle starts from there. Washing earlier risks lifting fresh paint at edges that haven't fully cured.",
      },
      {
        question: "Do HOA-managed neighborhoods have a required schedule?",
        answer:
          "Many Clermont and Winter Garden HOAs are now sending compliance letters when mildew is visible from the street. Annual washing reliably keeps you ahead of those notices.",
      },
    ],
    relatedServices: [
      { label: "House soft washing", href: "/services" },
      { label: "Roof cleaning", href: "/services" },
    ],
    relatedAreas: [
      { label: "Groveland", href: "/service-areas/groveland" },
      { label: "Clermont", href: "/service-areas/clermont" },
      { label: "Winter Garden", href: "/service-areas/winter-garden" },
    ],
  },
  {
    slug: "paver-sealing-timing-and-cost",
    title: "Paver Sealing in Florida: When to Seal, How Much It Costs",
    metaDescription:
      "Paver sealing protects driveways, pool decks, and patios from Florida sun and rain. Here's the right timing, the right product, and honest 2026 pricing for Lake County.",
    hubExcerpt:
      "Florida paver decks fade and weed up fast without sealing. Here's exactly when to seal, what to expect from each finish, and what a fair price looks like in 2026.",
    category: "Pavers",
    readMinutes: 7,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    heroImage: "/lovable-uploads/74691437-06d7-47c3-a140-7ee919fc173a.png",
    heroAlt: "Freshly sealed paver pool deck in Lake County, FL with wet look finish",
    intro: [
      "Pavers are one of the highest-value features on a Lake County home — and one of the most neglected. Without sealing, Florida UV bleaches the pigment, summer rain washes joint sand out, and weeds and mildew take over the joints within two years. Sealed pavers do none of that.",
      "Here's the practical guide to paver sealing in Central Florida: when to do it, what product class to ask for, what it actually costs in 2026, and how to tell whether you're being upsold.",
    ],
    sections: [
      {
        heading: "When to seal a paver installation for the first time",
        paragraphs: [
          "Brand-new pavers need a 60–90 day cure window before sealing. The base needs time to settle, the joint sand needs to lock in, and any efflorescence (white mineral haze that rises out of the concrete) needs to surface so it can be cleaned off before the seal locks it in permanently.",
          "If you've recently moved into a new build in Hamlin, Sawgrass Bay, or one of the newer Clermont developments, ask the builder when the pavers were installed. Ninety days from that date is your sealing window.",
        ],
      },
      {
        heading: "Resealing intervals for Florida sun",
        paragraphs: [
          "Florida is brutal on sealer. UV breaks the polymer down faster here than in northern climates, and our rain volume strips it from the surface. Realistic resealing intervals for Lake County:",
        ],
        bullets: [
          "Driveway (full sun, daily traffic): every 2–3 years",
          "Pool deck (sun + chlorine + foot traffic): every 2–3 years",
          "Patio (partial shade, light traffic): every 3–5 years",
          "Walkway (light traffic, mostly shaded): every 4–5 years",
        ],
      },
      {
        heading: "The two finishes — wet look vs. natural look",
        paragraphs: [
          "Almost every Florida paver sealer falls into one of two finish categories. Knowing the difference up front saves you a result you don't want.",
          "Wet look (sometimes called 'high gloss' or 'enhanced'): deepens the color, brings out the texture, and adds visible sheen. Looks like the pavers were just rinsed by rain. This is what most homeowners picture when they imagine 'sealed pavers.' Reads premium and modern.",
          "Natural look (sometimes called 'matte' or 'invisible'): protects the pavers without changing the appearance. The pavers look exactly as they did before sealing — just protected. This is the right call for older neutral-toned installations or tumbled pavers where the wet look would feel out of place.",
        ],
      },
      {
        heading: "Joint stabilization — the part most quotes leave out",
        paragraphs: [
          "A real paver seal isn't just a topcoat. The joints between pavers need polymeric or hardening sand pushed in first, and then the sealer locks the joint sand in place. That's what stops weeds, stops ants, and keeps pavers from rocking under tires.",
          "If a quote doesn't mention joint sand, it's not a full seal job. Topcoat-only sealing is cheaper but lasts roughly half as long and doesn't solve the weed problem most homeowners are calling about in the first place.",
        ],
      },
      {
        heading: "2026 paver sealing prices in Lake County",
        paragraphs: [
          "Realistic 2026 pricing, including a proper clean, joint sanding, and two coats of sealer:",
        ],
        bullets: [
          "Driveway (400–600 sq ft): $1,000–$1,650",
          "Driveway (600–900 sq ft): $1,500–$2,300",
          "Pool deck (500–800 sq ft): $1,250–$2,100",
          "Patio (200–400 sq ft): $600–$1,100",
          "Driveway + pool deck bundle: typically 10–15% discount",
        ],
      },
      {
        heading: "What to ask before you sign the quote",
        paragraphs: [
          "A good paver quote should specify the sealer brand and product line, the finish (wet vs. natural), whether joint sand is included, how many coats, the cure time before walking and driving, and a warranty against peeling or whitening for at least 12 months.",
          "Whitening — the milky, hazy finish that shows up months after a bad seal job — is almost always the result of solvent-based sealer applied over damp pavers. Reputable companies use water-based or breathable solvent-based sealers and verify dryness with a moisture meter before application. If a quote doesn't mention any of that, ask.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long do I have to stay off the pavers after sealing?",
        answer:
          "Foot traffic typically returns at 4–6 hours. Vehicle traffic at 24–48 hours depending on humidity. We tape off the area and leave clear cure-time instructions for every job.",
      },
      {
        question: "Will sealing make my pool deck slippery?",
        answer:
          "We use sealers with a built-in slip-resistant additive on every pool deck. Wet-look sheen is fine for pool deck use; high-gloss without additive is not.",
      },
      {
        question: "Can you seal over old, failing sealer?",
        answer:
          "No — old sealer has to be stripped first. Sealing over peeling sealer locks the failure in. Strip-and-reseal jobs run roughly 30–50% more than a clean reseal, which is why sticking to the 2–3 year cycle pays off.",
      },
      {
        question: "Does sealing fix faded color?",
        answer:
          "Wet-look sealer dramatically restores the original color appearance. It doesn't rebuild lost pigment, but it brings the look back to roughly 80–90% of new for most installations.",
      },
    ],
    relatedServices: [
      { label: "Paver sealing", href: "/services" },
      { label: "Driveway pressure washing", href: "/services" },
    ],
    relatedAreas: [
      { label: "Windermere", href: "/service-areas/windermere" },
      { label: "Montverde", href: "/service-areas/montverde" },
      { label: "Clermont", href: "/service-areas/clermont" },
    ],
  },
  {
    slug: "pool-screen-enclosure-cleaning-guide",
    title: "Pool Screen Enclosure Cleaning: A Florida Homeowner's Guide",
    metaDescription:
      "Pool screen enclosures trap pollen, mildew, and Lovebugs in Florida. Here's how to clean them safely without tearing screens or bending the frame.",
    hubExcerpt:
      "Pool cages trap pollen, mildew, and Lovebug residue that pressure washers can't fix without damage. Here's the right way to clean a screen enclosure in Florida.",
    category: "Pool Decks",
    readMinutes: 6,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    heroImage: "/lovable-uploads/74691437-06d7-47c3-a140-7ee919fc173a.png",
    heroAlt:
      "Pool screen enclosure being cleaned with low-pressure soft washing equipment in Florida",
    intro: [
      "Pool screen enclosures are one of the best features of a Florida home — and one of the trickiest things to clean. The frame collects mildew. The screens trap pollen, dust, and Lovebug residue. Anything you spray inside the cage drips onto the pool deck. And the entire structure is one ill-aimed pressure wash away from a $500 rescreen bill.",
      "This guide explains what's actually growing on your screen cage, why pressure washing it is a mistake, and the right step-by-step approach to get it clean without damaging anything.",
    ],
    sections: [
      {
        heading: "What's actually building up on the cage",
        paragraphs: [
          "A Florida pool cage collects four distinct categories of grime, and each one wants a slightly different treatment.",
          "Pollen layer: A yellow-green dust that settles on every horizontal surface in spring. Mostly oak and pine. Light to clean off if you stay ahead of it.",
          "Mildew on the frame: The dark spotting on white aluminum frames is mildew. It's the same organism as on the house, just feeding on whatever the breeze deposits on the powder-coat finish.",
          "Lovebug residue: Twice a year, Lovebugs splatter against the screen mesh. Their bodies are slightly acidic and stain the mesh permanently if left for months.",
          "Mineral haze on screens: From sprinklers and rain runoff. Looks like a foggy film when the sun hits it from the right angle.",
        ],
      },
      {
        heading: "Why pressure washing a screen cage goes wrong",
        paragraphs: [
          "The temptation is to point a pressure washer at the cage and blast it clean. Two things happen. First, even moderate pressure pushes screen mesh out of the spline groove that holds it in the frame, and once the spline pops, the screen sags and tears. Second, the high-pressure stream concentrates force on the corner brackets and slowly works fasteners loose.",
          "We've quoted a lot of repair-then-clean jobs in Clermont and Winter Garden where the previous attempt was a pressure washer. Repairing a single panel of screen averages $80–$150. Replacing all the screen on a 30-foot cage runs $2,000+.",
        ],
      },
      {
        heading: "The right method: low-pressure soft wash",
        paragraphs: [
          "A proper screen enclosure clean uses the same low-pressure soft wash equipment as the house — under 100 PSI, with a sodium-hypochlorite-based solution mixed at a screen-safe ratio. The chemistry kills mildew on the frame, lifts pollen and Lovebug residue from the mesh, and rinses out at garden-hose pressure.",
          "Done right, the entire cage finishes in 60–90 minutes for a typical residential enclosure. The pool itself gets covered or temporarily isolated, the surrounding plants get a fresh-water pre-soak, and the deck gets rinsed at the end.",
        ],
      },
      {
        heading: "Step-by-step (what to expect on the day of service)",
        paragraphs: [
          "Here's the sequence we use on every pool cage:",
        ],
        bullets: [
          "Sweep loose debris and leaves from the deck and corners",
          "Pre-soak landscaping and any sensitive plants with fresh water",
          "Cover or isolate the pool surface (depends on cage layout)",
          "Apply soft wash solution to the frame, screens, and trim",
          "Allow proper dwell — typically 5–10 minutes",
          "Low-pressure rinse from top to bottom, working out toward the door",
          "Spot-treat any remaining Lovebug or mildew stains",
          "Final fresh-water rinse on the deck and landscaping",
        ],
      },
      {
        heading: "Frequency and pricing",
        paragraphs: [
          "In Lake County, an annual screen enclosure cleaning is the right baseline. Homes near oak canopies, lakes, or pollen-heavy lots benefit from twice a year, especially after the spring pollen drop and the fall Lovebug flight.",
          "Realistic 2026 pricing in Groveland and Clermont:",
        ],
        bullets: [
          "Small cage (around the pool only, ~600 sq ft surface): $175–$275",
          "Medium cage (pool + lanai, ~1,000 sq ft surface): $250–$400",
          "Large cage (full screen room, ~1,500+ sq ft): $375–$600",
          "Bundled with house wash: typically 10–20% discount on the cage",
        ],
      },
      {
        heading: "What you can do between cleanings",
        paragraphs: [
          "Two simple homeowner habits keep the cage in much better shape between professional cleans. First, run a soft broom or pool-pole brush along the screens once a month — it knocks pollen and dust off before it bonds. Second, rinse the frame with a garden hose after any heavy pollen day.",
          "Avoid bleach sprays from the hardware store on screen enclosures. The mixes sold for siding are too concentrated for screen mesh, and over time they can degrade the spline that holds the screens in place.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will the soft wash chemistry hurt my pool water?",
        answer:
          "Sodium hypochlorite is the same chemical family as pool chlorine, just at a different concentration. We cover or isolate the pool during application, and any minor splash actually behaves like a small chlorine top-up. We rinse the deck thoroughly at the end.",
      },
      {
        question: "How long does a cleaned cage stay clean in Florida?",
        answer:
          "Frame mildew typically stays clean for 12 months. Screen mesh starts showing fresh pollen within 4–6 weeks during spring, but the frame and overall appearance hold up well for the full year between professional cleans.",
      },
      {
        question: "Can you also clean the pool deck and pavers at the same visit?",
        answer:
          "Yes, and we recommend it. Bundling cage cleaning with pool deck pressure washing or paver sealing avoids a second mobilization fee and lets us sequence the work so nothing has to be re-cleaned.",
      },
      {
        question: "What if a screen tears during cleaning?",
        answer:
          "It shouldn't, because we don't use the equipment that causes it. If something does happen on our watch, we cover the rescreen — it's part of being insured and doing the work the right way.",
      },
    ],
    relatedServices: [
      { label: "Pool screen enclosure cleaning", href: "/services" },
      { label: "Paver sealing", href: "/services" },
    ],
    relatedAreas: [
      { label: "Clermont", href: "/service-areas/clermont" },
      { label: "Windermere", href: "/service-areas/windermere" },
      { label: "Winter Garden", href: "/service-areas/winter-garden" },
    ],
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
