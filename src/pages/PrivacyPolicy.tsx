import { useEffect } from "react";
import Layout from "@/components/Layout";
import { BUSINESS_INFO, BUSINESS_CITATION_FULL } from "@/data/businessInfo";

const EFFECTIVE_DATE = "May 21, 2026";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | Carson's Soft Wash Inc.</title>
        <meta
          name="description"
          content="How Carson's Soft Wash Inc. collects, uses, and protects your information when you request a quote or use our website."
        />
        <link rel="canonical" href={`${BUSINESS_INFO.websiteUrl}/privacy-policy`} />
      </Helmet>

      <article className="container mx-auto px-4 py-12 max-w-3xl prose prose-slate">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground"><em>Effective {EFFECTIVE_DATE}</em></p>

        <p>
          {BUSINESS_INFO.legalName} ("Carson's Soft Wash," "we," "us," or "our")
          respects your privacy. This Privacy Policy explains what information we
          collect when you visit {BUSINESS_INFO.websiteUrl} or request a quote, how
          we use it, and the choices you have.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li><strong>Contact details you submit:</strong> name, phone number, email, service address, and any details you provide on quote, contact, or booking forms.</li>
          <li><strong>Automatic data:</strong> IP address, device type, browser, pages viewed, referring URL, and approximate location, collected through standard server logs and cookies.</li>
          <li><strong>Analytics & advertising:</strong> Google Analytics (GA4) and Google Ads tags help us understand traffic and measure ad performance.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>Respond to quote requests, schedule services, and provide customer support.</li>
          <li>Send service confirmations, invoices, and follow-up communications.</li>
          <li>Improve our website, services, and marketing.</li>
          <li>Comply with legal obligations and enforce our Terms of Service.</li>
        </ul>

        <h2>3. How We Share Information</h2>
        <p>We do <strong>not</strong> sell your personal information. We share it only with:</p>
        <ul>
          <li>Service providers who help us run our website, scheduling, payments, and email/SMS (e.g., hosting, Google, payment processors).</li>
          <li>Authorities when required by law, subpoena, or to protect rights and safety.</li>
        </ul>

        <h2>4. Cookies and Tracking</h2>
        <p>
          We use cookies and similar technologies for site functionality and analytics.
          You can disable cookies in your browser, but parts of the site may not work
          properly. You can opt out of Google Analytics via the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics Opt-out Browser Add-on
          </a>.
        </p>

        <h2>5. SMS / Text Messaging</h2>
        <p>
          If you provide your phone number, you consent to receive service-related
          calls and texts from us. Message and data rates may apply. Reply STOP to
          opt out at any time.
        </p>

        <h2>6. Data Retention & Security</h2>
        <p>
          We retain information only as long as needed for the purposes above or as
          required by law. We use reasonable administrative, technical, and physical
          safeguards to protect your information, but no method of transmission over
          the internet is 100% secure.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          Depending on your state (including California, Colorado, Virginia, and
          others), you may have the right to access, correct, delete, or request a
          copy of your personal information, and to opt out of certain processing.
          To exercise these rights, contact us using the details below.
        </p>

        <h2>8. Children's Privacy</h2>
        <p>
          Our services are directed to adults. We do not knowingly collect personal
          information from children under 13.
        </p>

        <h2>9. Third-Party Links</h2>
        <p>
          Our site may link to third-party sites (e.g., Facebook, YouTube, TikTok,
          Google). Their privacy practices are governed by their own policies.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The "Effective" date
          above will reflect the most recent revision.
        </p>

        <h2>11. Contact Us</h2>
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

export default PrivacyPolicy;
