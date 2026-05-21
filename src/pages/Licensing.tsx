import { useEffect } from "react";
import Layout from "@/components/Layout";
import { BUSINESS_INFO } from "@/data/businessInfo";

const EFFECTIVE_DATE = "May 21, 2026";
const YEAR = new Date().getFullYear();

const Licensing = () => {
  useEffect(() => {
    document.title = "Licensing & Copyright | Carson's Soft Wash Inc.";
    const desc = "Copyright, trademark, and content licensing terms for carsonssoftwashservices.com, including photos, written content, and brand assets.";
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", desc);
  }, []);

  return (
    <Layout>
      <article className="container mx-auto px-4 py-12 max-w-3xl prose prose-slate">
        <h1 className="text-4xl font-bold mb-2">Licensing &amp; Copyright</h1>
        <p className="text-muted-foreground text-sm">
          <em>Effective {EFFECTIVE_DATE} · Published by {BUSINESS_INFO.legalName}</em>
        </p>

        <h2>1. Copyright</h2>
        <p>
          © {YEAR} {BUSINESS_INFO.legalName}. All rights reserved. All original
          content on {BUSINESS_INFO.websiteUrl} — including text, photographs,
          before/after galleries, videos, graphics, layouts, and source code —
          is the property of Carson's Soft Wash Inc. and is protected by U.S.
          and international copyright laws.
        </p>

        <h2>2. Trademarks</h2>
        <p>
          "Carson's Soft Wash," the Carson's Soft Wash logo, and related brand
          marks are unregistered trademarks of {BUSINESS_INFO.legalName}. Other
          product, service, and company names referenced on this site
          (including ARMA, manufacturers of cleaning chemicals, and pavers)
          are trademarks of their respective owners and are used for reference
          only.
        </p>

        <h2>3. Permitted Use of Content</h2>
        <p>You may, without prior written permission:</p>
        <ul>
          <li>View, print, and download a single copy of pages for personal, non-commercial reference.</li>
          <li>Quote short excerpts (up to ~75 words) for editorial or educational purposes with a visible credit and link back to the source URL.</li>
          <li>Share links to public pages on social media or in private messages.</li>
        </ul>

        <h2>4. Prohibited Use</h2>
        <p>Without our prior written permission, you may not:</p>
        <ul>
          <li>Copy, republish, or redistribute substantial portions of the site's text, photographs, or videos.</li>
          <li>Use any content for commercial purposes, including competitor websites, lead-generation pages, or AI training datasets.</li>
          <li>Remove copyright notices, watermarks, or attribution.</li>
          <li>Use our trademarks in a way that implies endorsement, partnership, or affiliation.</li>
        </ul>

        <h2>5. Photography &amp; Customer Work</h2>
        <p>
          Before/after photos taken on customer properties remain the
          intellectual property of Carson's Soft Wash Inc. We obtain customer
          consent before publishing identifiable property exteriors and will
          remove specific images on written request.
        </p>

        <h2>6. Third-Party Assets</h2>
        <p>
          This website uses third-party libraries, icons, and fonts under their
          respective open-source licenses (including MIT, Apache 2.0, and SIL
          Open Font License). License texts are included in the dependencies
          they ship with and are not republished here. Stock or partner imagery
          is used under license from its respective copyright holders.
        </p>

        <h2>7. APIs &amp; Embedded Tools</h2>
        <p>
          Any forms, quote tools, or APIs we expose are made available solely
          to support legitimate customer inquiries and are governed by our{" "}
          <a href="/terms-of-service">Terms of Service</a> and{" "}
          <a href="/acceptable-use">Acceptable Use Policy</a>. No license is
          granted to scrape, mirror, or redistribute responses.
        </p>

        <h2>8. DMCA &amp; Takedown Requests</h2>
        <p>
          If you believe content on this site infringes your copyright, send a
          written notice including the work claimed, the URL of the infringing
          material, your contact information, and a good-faith statement to:
        </p>
        <p>
          <strong>{BUSINESS_INFO.legalName}</strong><br />
          {BUSINESS_INFO.address.street}<br />
          {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}<br />
          Email: <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a><br />
          Phone: <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>{BUSINESS_INFO.phone}</a>
        </p>

        <h2>9. Licensing Requests</h2>
        <p>
          To request permission to republish content, use a photograph, or
          license a portion of the site for commercial purposes, contact us at
          the email above with a description of the intended use.
        </p>

        <h2>10. Updates</h2>
        <p>
          We may update this Licensing &amp; Copyright notice from time to
          time. The "Effective" date above reflects the most recent revision.
        </p>
      </article>
    </Layout>
  );
};

export default Licensing;
