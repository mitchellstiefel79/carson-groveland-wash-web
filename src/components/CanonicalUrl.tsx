import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_ORIGIN = "https://www.carsonssoftwashservices.com";
const SCHEMA_ID = "ld-webpage-route";

/**
 * Keeps <link rel="canonical">, <meta property="og:url">, and a per-route
 * WebPage JSON-LD block in sync with the current route. Required for SPAs so
 * Google does not collapse every page into the homepage canonical baked into
 * index.html.
 */
const CanonicalUrl = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const url = `${SITE_ORIGIN}${path}`;

    // 1. canonical link
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);

    // 2. og:url
    let og = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (!og) {
      og = document.createElement("meta");
      og.setAttribute("property", "og:url");
      document.head.appendChild(og);
    }
    og.setAttribute("content", url);

    // 3. Per-route WebPage JSON-LD with matching @id and url
    const title = document.title || "Carson's Soft Wash Inc.";
    const description =
      document
        .querySelector<HTMLMetaElement>('meta[name="description"]')
        ?.getAttribute("content") ?? "";

    const webPage = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
      about: { "@id": `${SITE_ORIGIN}/#localbusiness` },
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
