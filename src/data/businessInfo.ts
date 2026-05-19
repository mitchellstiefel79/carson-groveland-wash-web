/**
 * Single source of truth for the business Name, Address, Phone, Email (NAP).
 *
 * IMPORTANT: These values are mirrored in:
 *   - index.html LocalBusiness JSON-LD (#business node)
 *   - public/llms.txt
 *   - Google Business Profile, Yelp, and BBB listings
 *
 * If you change any of these, update all of the above to keep NAP consistency
 * (Google penalizes mismatched citations in local search rankings).
 */

export const BUSINESS_INFO = {
  legalName: "Carson's Soft Wash Inc.",
  displayName: "Carson's Soft Wash",
  // Display-formatted phone shown to humans
  phoneDisplay: "(352) 467-3964",
  // tel: link target (digits only)
  phoneHref: "tel:+13524673964",
  // E.164 format for schema/metadata
  phoneE164: "+13524673964",
  email: "carsonssoftwash@gmail.com",
  // Canonical street address — matches BBB Profile #0733-235968940
  // and the citations on BizHWY, PowerWashDirectory, and Porch.
  address: {
    streetAddress: "3501 Lazy Ln",
    locality: "Groveland",
    region: "FL",
    postalCode: "34736",
    country: "US",
  },
  hours: "Mon - Sat: 8:00 AM - 6:00 PM\nSunday: Closed",
  websiteUrl: "https://carsonssoftwashservices.com",
} as const;

/** "3501 Lazy Ln, Groveland, FL 34736" — canonical full-address citation */
export const BUSINESS_CITATION_FULL = `${BUSINESS_INFO.address.streetAddress}, ${BUSINESS_INFO.address.locality}, ${BUSINESS_INFO.address.region} ${BUSINESS_INFO.address.postalCode}`;

/** "Groveland, FL 34736" — short-form citation */
export const BUSINESS_CITATION_SHORT = `${BUSINESS_INFO.address.locality}, ${BUSINESS_INFO.address.region} ${BUSINESS_INFO.address.postalCode}`;
