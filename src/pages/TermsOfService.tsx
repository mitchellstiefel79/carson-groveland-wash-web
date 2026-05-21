import { useEffect } from "react";
import Layout from "@/components/Layout";
import { BUSINESS_INFO, BUSINESS_CITATION_FULL } from "@/data/businessInfo";

const EFFECTIVE_DATE = "May 21, 2026";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | Carson's Soft Wash Inc.";
  }, []);
  return (
    <Layout>

      <article className="container mx-auto px-4 py-12 max-w-3xl prose prose-slate">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground"><em>Effective {EFFECTIVE_DATE}</em></p>

        <p>
          These Terms of Service ("Terms") govern your use of{" "}
          {BUSINESS_INFO.websiteUrl} (the "Site") and the exterior cleaning services
          provided by {BUSINESS_INFO.legalName} ("Carson's Soft Wash," "we," "us,"
          or "our"). By using the Site or scheduling a service, you agree to these
          Terms.
        </p>

        <h2>1. Services</h2>
        <p>
          We provide soft washing, pressure washing, roof cleaning, house washing,
          paver cleaning and sealing, pool screen enclosure cleaning, and related
          commercial exterior cleaning services in Central Florida.
        </p>

        <h2>2. Quotes and Estimates</h2>
        <p>
          Quotes are based on the information you provide and visible site
          conditions. Final pricing may change if conditions on arrival differ
          materially (e.g., heavier staining, additional square footage, hazardous
          access). We will notify you before performing additional billable work.
        </p>

        <h2>3. Scheduling, Cancellations & Weather</h2>
        <p>
          Appointments may be rescheduled due to weather or safety conditions at our
          discretion. We ask for at least 24 hours' notice for customer-initiated
          cancellations.
        </p>

        <h2>4. Payment</h2>
        <p>
          Payment is due upon completion of work unless otherwise agreed in writing.
          Late balances may accrue interest at the maximum rate allowed by Florida
          law and may be referred for collection.
        </p>

        <h2>5. Customer Responsibilities</h2>
        <ul>
          <li>Provide safe access to water and the property.</li>
          <li>Close windows and doors and remove fragile items from work areas.</li>
          <li>Disclose known issues (loose siding, damaged shingles, leaks, sensitive landscaping, pets).</li>
        </ul>

        <h2>6. Warranty</h2>
        <p>
          Roof soft washing carries a 1-year no-streak warranty under normal
          conditions. Warranty does not cover damage from pre-existing defects,
          storms, vegetation, animal activity, or third-party work performed after
          service.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, our total liability for any claim
          arising out of services or use of the Site shall not exceed the amount
          paid by you for the specific service giving rise to the claim. We are not
          liable for indirect, incidental, or consequential damages.
        </p>

        <h2>8. Intellectual Property</h2>
        <p>
          All Site content — including text, images, logos, photos, and videos — is
          owned by or licensed to {BUSINESS_INFO.legalName} and is protected by
          copyright and trademark laws. You may not copy, reproduce, or
          redistribute Site content without written permission.
        </p>

        <h2>9. Acceptable Use</h2>
        <p>
          Your use of the Site is subject to our{" "}
          <a href="/acceptable-use">Acceptable Use Policy</a>.
        </p>

        <h2>10. Third-Party Links</h2>
        <p>
          The Site may contain links to third-party websites. We are not responsible
          for the content or practices of those sites.
        </p>

        <h2>11. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Florida. Exclusive
          venue for any dispute shall be in Lake County, Florida.
        </p>

        <h2>12. Changes to These Terms</h2>
        <p>
          We may update these Terms at any time. Continued use of the Site or our
          services after changes constitutes acceptance of the revised Terms.
        </p>

        <h2>13. Contact</h2>
        <p>
          {BUSINESS_INFO.legalName}<br />
          {BUSINESS_CITATION_FULL}<br />
          Phone: <a href={BUSINESS_INFO.phoneHref}>{BUSINESS_INFO.phoneDisplay}</a><br />
          Email: <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a>
        </p>
      </article>
    </Layout>
  );
};

export default TermsOfService;
