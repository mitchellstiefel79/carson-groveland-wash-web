import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { BUSINESS_INFO } from "@/data/businessInfo";

const EFFECTIVE_DATE = "May 21, 2026";

const AcceptableUse = () => {
  return (
    <Layout>
      <Helmet>
        <title>Acceptable Use Policy | Carson's Soft Wash Inc.</title>
        <meta
          name="description"
          content="Rules for acceptable use of Carson's Soft Wash Inc.'s website, forms, and any provided digital tools."
        />
        <link rel="canonical" href={`${BUSINESS_INFO.websiteUrl}/acceptable-use`} />
      </Helmet>

      <article className="container mx-auto px-4 py-12 max-w-3xl prose prose-slate">
        <h1 className="text-4xl font-bold mb-2">Acceptable Use Policy</h1>
        <p className="text-muted-foreground"><em>Effective {EFFECTIVE_DATE}</em></p>

        <p>
          This Acceptable Use Policy ("AUP") governs your use of{" "}
          {BUSINESS_INFO.websiteUrl}, our forms, customer portals, and any APIs or
          digital tools we provide (collectively, the "Services"). By using the
          Services, you agree not to engage in any of the prohibited conduct below.
        </p>

        <h2>1. Prohibited Conduct</h2>
        <p>You may not, and may not allow any third party to:</p>
        <ul>
          <li>Violate any applicable law, regulation, or third-party right.</li>
          <li>Submit false, misleading, or fraudulent quote, booking, or contact information.</li>
          <li>Upload or transmit malware, viruses, worms, or other harmful code.</li>
          <li>Attempt to gain unauthorized access to any portion of the Services, accounts, or related systems or networks.</li>
          <li>Probe, scan, or test the vulnerability of the Services without our prior written consent.</li>
          <li>Interfere with or disrupt the integrity or performance of the Services (e.g., denial-of-service attacks, flooding forms).</li>
          <li>Use automated means (bots, scrapers, crawlers) to access the Services beyond what is permitted by our <code>robots.txt</code>, or to harvest contact information.</li>
          <li>Reverse engineer, decompile, or attempt to extract source code, except as expressly permitted by law.</li>
          <li>Resell, sublicense, or commercially exploit the Services or their content without written permission.</li>
          <li>Send spam, unsolicited marketing, harassment, or abusive communications through any form or channel we provide.</li>
          <li>Post or transmit content that is unlawful, defamatory, obscene, hateful, infringing, or invasive of privacy.</li>
        </ul>

        <h2>2. API and Automated Access</h2>
        <p>
          If we make APIs or automated endpoints available to you, you must:
        </p>
        <ul>
          <li>Use only the credentials issued to you and keep them confidential.</li>
          <li>Respect documented rate limits and quotas.</li>
          <li>Identify your client honestly via User-Agent headers.</li>
          <li>Not use the API to build a competing product or to cache and redistribute our data without permission.</li>
        </ul>
        <p>
          We may throttle, suspend, or revoke API access at any time to protect the
          Services or other users.
        </p>

        <h2>3. Security Reporting</h2>
        <p>
          If you discover a security vulnerability, please report it responsibly to{" "}
          <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a> before
          public disclosure. Do not exploit the issue beyond what is necessary to
          demonstrate it.
        </p>

        <h2>4. Enforcement</h2>
        <p>
          We may investigate suspected violations and, at our sole discretion,
          suspend or terminate access, remove content, and pursue legal remedies.
          We may also cooperate with law enforcement when appropriate.
        </p>

        <h2>5. Changes</h2>
        <p>
          We may update this AUP at any time. Continued use of the Services after
          changes are posted constitutes acceptance of the revised AUP.
        </p>

        <h2>6. Contact</h2>
        <p>
          Questions about this policy? Email{" "}
          <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a> or
          call <a href={BUSINESS_INFO.phoneHref}>{BUSINESS_INFO.phoneDisplay}</a>.
        </p>
      </article>
    </Layout>
  );
};

export default AcceptableUse;
