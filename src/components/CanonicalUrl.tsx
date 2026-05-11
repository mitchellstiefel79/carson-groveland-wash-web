import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_ORIGIN = "https://www.carsonssoftwashservices.com";
const SCHEMA_ID = "ld-webpage-route";
const BRAND = "Carson's Soft Wash Inc.";

type RouteSeo = { title: string; description: string };

/**
 * Per-route title + meta description. Keep titles under ~60 chars and
 * descriptions under ~160 chars for SERP snippets. NotFound owns its own SEO.
 */
const ROUTE_SEO: Record<string, RouteSeo> = {
  "/": {
    title: `${BRAND} | Soft Wash & Pressure Washing | Groveland, FL`,
    description:
      "ARMA-compliant soft washing, roof cleaning, paver sealing & pressure washing in Groveland, Clermont, Minneola & Lake County, FL. Free estimates — (352) 467-3964.",
  },
  "/about": {
    title: `About Carson's Soft Wash | Family-Owned in Groveland, FL`,
    description:
      "Founded 2024 in Groveland, FL. Licensed, insured, ARMA-compliant soft washing for roofs, homes, pavers & screens across Lake and Orange County.",
  },
  "/services": {
    title: `Soft Wash & Pressure Washing Services | Lake County, FL`,
    description:
      "Roof soft washing, house washing, driveway & paver cleaning, paver sealing, pool screen enclosure cleaning and commercial pressure washing in Central Florida.",
  },
  "/gallery": {
    title: `Before & After Gallery | Carson's Soft Wash, Groveland FL`,
    description:
      "See real before-and-after results from our soft washing, roof cleaning and paver sealing jobs across Groveland, Clermont and Lake County, FL.",
  },
  "/contact": {
    title: `Contact Carson's Soft Wash | Free Quote in Groveland, FL`,
    description:
      "Request a free, no-obligation quote for soft washing, roof cleaning or paver sealing. Call (352) 467-3964 or message us — we serve Lake & Orange County, FL.",
  },
  "/service-areas": {
    title: `Service Areas | Soft Wash & Pressure Washing in Lake County FL`,
    description:
      "Carson's Soft Wash serves Groveland, Clermont, Minneola, Mascotte, Montverde, Winter Garden, Windermere, Oakland and the surrounding Lake & Orange County, FL area.",
  },
  "/service-areas/groveland": {
    title: `Soft Wash & Pressure Washing in Groveland, FL`,
    description:
      "Same-day soft washing, roof cleaning and paver sealing for Groveland, FL homes and businesses. No travel fees inside city limits — (352) 467-3964.",
  },
  "/service-areas/clermont": {
    title: `Soft Wash & Roof Cleaning in Clermont, FL`,
    description:
      "Soft washing, tile/shingle roof cleaning and paver sealing for Clermont, FL — Kings Ridge, Heritage Hills, Sawgrass Bay and lakefront homes. Free quotes.",
  },
  "/service-areas/minneola": {
    title: `Soft Wash & Pressure Washing in Minneola, FL`,
    description:
      "Roof soft washing, house washing and paver sealing for Minneola, FL — Reserve at Minneola, Ardmore Reserve and Park View at the Hills. Fast, fair quotes.",
  },
  "/service-areas/mascotte": {
    title: `Soft Wash & Pressure Washing in Mascotte, FL`,
    description:
      "Honest, fair-priced soft washing, roof cleaning and driveway pressure washing for Mascotte, FL homes, mobile homes and small businesses.",
  },
  "/service-areas/montverde": {
    title: `Estate Soft Wash & Paver Sealing in Montverde, FL`,
    description:
      "Discreet, premium soft washing and paver sealing for Montverde, FL — Bella Collina, Lake Apopka estates and custom hillside homes. Background-checked crews.",
  },
  "/service-areas/winter-garden": {
    title: `Soft Wash & Pressure Washing in Winter Garden, FL`,
    description:
      "Gentle soft washing for Winter Garden's historic downtown, Plant Street businesses and Hamlin/Independence neighborhoods. HOA-friendly scheduling.",
  },
  "/service-areas/windermere": {
    title: `Luxury Soft Wash & Paver Sealing in Windermere, FL`,
    description:
      "Estate-grade soft washing and paver sealing for Windermere, FL — Isleworth, Keene's Pointe and Lake Butler Sound. Vendor-compliant in guard-gated communities.",
  },
  "/service-areas/oakland": {
    title: `Soft Wash & Pressure Washing in Oakland, FL`,
    description:
      "Friendly soft washing, roof cleaning and paver sealing for the town of Oakland, FL. Honest written pricing, comfortable on rural and historic properties.",
  },
  "/blog": {
    title: `Soft Wash & Pressure Washing Education | Carson's Soft Wash`,
    description:
      "Plain-English guides to soft washing, roof cleaning, paver sealing, and pool screen care from a licensed Lake County, FL specialist. Updated regularly.",
  },
  "/blog/what-is-gloeocapsa-magma-roof-stains": {
    title: `Gloeocapsa Magma: What Those Black Roof Stains Really Are`,
    description:
      "Those black streaks on Florida roofs aren't dirt — they're Gloeocapsa magma, a living algae. What it is, why it spreads in Lake County, and how to kill it safely.",
  },
  "/blog/soft-wash-vs-pressure-wash": {
    title: `Soft Wash vs. Pressure Wash: Which Does Your Home Need?`,
    description:
      "Soft washing and pressure washing aren't the same. Plain-English breakdown of which surfaces need which method, and what happens when you mix them up.",
  },
  "/blog/house-soft-washing-cost-lake-county-fl": {
    title: `House Soft Washing Cost in Lake County, FL (2026 Guide)`,
    description:
      "Honest 2026 pricing for house soft washing in Groveland, Clermont, and Lake County, FL. What drives the price up, what drives it down, and red flags to avoid.",
  },
  "/blog/how-often-soft-wash-house-florida": {
    title: `How Often Should You Soft Wash a House in Florida?`,
    description:
      "Florida humidity grows mildew on siding fast. Here's the right soft washing interval for Lake County homes — and the warning signs that you've waited too long.",
  },
  "/blog/paver-sealing-timing-and-cost": {
    title: `Paver Sealing in Florida: When to Seal & 2026 Cost`,
    description:
      "Florida paver decks fade and weed up fast without sealing. When to seal, what each finish looks like, and honest 2026 pricing for Lake County, FL.",
  },
  "/blog/pool-screen-enclosure-cleaning-guide": {
    title: `Pool Screen Enclosure Cleaning: Florida Homeowner's Guide`,
    description:
      "Pool cages trap pollen, mildew, and Lovebug residue that pressure washers can't fix without damage. The right way to clean a screen enclosure in Florida.",
  },
};

const DEFAULT_SEO: RouteSeo = ROUTE_SEO["/"];

/** Get/create a meta tag by attribute (name= or property=). */
const getOrCreateMeta = (
  attr: "name" | "property",
  value: string,
): HTMLMetaElement => {
  let el = document.querySelector<HTMLMetaElement>(
    `meta[${attr}="${value}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  return el;
};

/**
 * Keeps <title>, <meta name="description">, OG/Twitter title+description,
 * <link rel="canonical">, <meta property="og:url">, and a per-route WebPage
 * JSON-LD block in sync with the current route. Required for SPAs so Google
 * does not collapse every page into the homepage canonical/title/description
 * baked into index.html.
 */
const CanonicalUrl = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const url = `${SITE_ORIGIN}${path}`;

    // Skip 404 — NotFound owns its own SEO and JSON-LD.
    const seo: RouteSeo | undefined = ROUTE_SEO[path];
    const isKnownRoute = !!seo;
    const effectiveSeo = seo ?? DEFAULT_SEO;

    if (isKnownRoute) {
      // 1. Title + description
      document.title = effectiveSeo.title;
      getOrCreateMeta("name", "description").setAttribute(
        "content",
        effectiveSeo.description,
      );

      // 2. Open Graph + Twitter mirrors
      getOrCreateMeta("property", "og:title").setAttribute(
        "content",
        effectiveSeo.title,
      );
      getOrCreateMeta("property", "og:description").setAttribute(
        "content",
        effectiveSeo.description,
      );
      getOrCreateMeta("name", "twitter:title").setAttribute(
        "content",
        effectiveSeo.title,
      );
      getOrCreateMeta("name", "twitter:description").setAttribute(
        "content",
        effectiveSeo.description,
      );
    }

    // 3. Canonical link
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);

    // 4. og:url
    getOrCreateMeta("property", "og:url").setAttribute("content", url);

    // 5. Per-route WebPage JSON-LD with matching @id and url
    const webPage = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: effectiveSeo.title,
      description: effectiveSeo.description,
      isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
      about: { "@id": `${SITE_ORIGIN}/#business` },
      inLanguage: "en-US",
    };

    let script = document.getElementById(SCHEMA_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = SCHEMA_ID;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(webPage);
  }, [pathname]);

  return null;
};

export default CanonicalUrl;
