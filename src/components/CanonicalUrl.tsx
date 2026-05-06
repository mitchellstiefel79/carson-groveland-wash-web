import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_ORIGIN = "https://www.carsonssoftwashservices.com";

/**
 * Keeps <link rel="canonical"> and <meta property="og:url"> in sync with the
 * current route. Required for SPAs so Google does not collapse every page
 * into the homepage canonical baked into index.html.
 */
const CanonicalUrl = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Normalize: keep trailing slash for root, strip it elsewhere
    const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const url = `${SITE_ORIGIN}${path}`;

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);

    let og = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (!og) {
      og = document.createElement("meta");
      og.setAttribute("property", "og:url");
      document.head.appendChild(og);
    }
    og.setAttribute("content", url);
  }, [pathname]);

  return null;
};

export default CanonicalUrl;
