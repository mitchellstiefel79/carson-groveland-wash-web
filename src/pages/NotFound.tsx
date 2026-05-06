import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const SITE_ORIGIN = "https://www.carsonssoftwashservices.com";
const SCHEMA_ID = "ld-webpage-route";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Save previous values so we can restore on unmount
    const prevTitle = document.title;
    const robotsEl = document.querySelector<HTMLMetaElement>(
      'meta[name="robots"]'
    );
    const prevRobots = robotsEl?.getAttribute("content") ?? "index, follow";

    const canonicalEl = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    const prevCanonical = canonicalEl?.getAttribute("href") ?? null;

    const ogUrlEl = document.querySelector<HTMLMetaElement>(
      'meta[property="og:url"]'
    );
    const prevOgUrl = ogUrlEl?.getAttribute("content") ?? null;

    const routeSchemaEl = document.getElementById(SCHEMA_ID) as
      | HTMLScriptElement
      | null;
    const prevSchema = routeSchemaEl?.textContent ?? null;

    // 1. Title
    document.title = "404 — Page Not Found | Carson's Soft Wash Inc.";

    // 2. Block indexing of 404 pages
    let robots = robotsEl;
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, nofollow");

    // 3. Canonical: point to homepage so any signal isn't wasted on a bad URL,
    //    but never canonicalize to the broken path itself.
    if (canonicalEl) canonicalEl.setAttribute("href", `${SITE_ORIGIN}/`);
    if (ogUrlEl) ogUrlEl.setAttribute("content", `${SITE_ORIGIN}/`);

    // 4. Replace per-route WebPage JSON-LD with a 404-specific block.
    const notFoundSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_ORIGIN}${location.pathname}#404`,
      url: `${SITE_ORIGIN}${location.pathname}`,
      name: "404 — Page Not Found",
      description:
        "The requested page could not be found on carsonssoftwashservices.com.",
      isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
      about: { "@id": `${SITE_ORIGIN}/#business` },
      inLanguage: "en-US",
      mainEntity: {
        "@type": "Thing",
        name: "HTTP 404 Not Found",
      },
    };

    let script = routeSchemaEl;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = SCHEMA_ID;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(notFoundSchema);

    return () => {
      // Restore previous head state when navigating away from 404
      document.title = prevTitle;
      robots?.setAttribute("content", prevRobots);
      if (canonicalEl && prevCanonical !== null)
        canonicalEl.setAttribute("href", prevCanonical);
      if (ogUrlEl && prevOgUrl !== null)
        ogUrlEl.setAttribute("content", prevOgUrl);
      if (script && prevSchema !== null) script.textContent = prevSchema;
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
