import { APP_NAME, WEBSITE_URL } from "@/lib/utils";
import { Metadata } from "next";
import { cacheLife } from "next/cache";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const policy = `# Privacy Policy

Last updated: 2026-11-12

Delta Widgets ("we", "our", "us") is an independent open-source project for Windows desktop widgets. This privacy policy explains what information we collect through our website, gallery, documentation, and related services, and how we use it.

This policy applies to the Delta Widgets website and public gallery at ${WEBSITE_URL}. It does not apply to third-party websites or projects linked from our site.

## 1. Who we are

Delta Widgets is an independent project maintained by contributors and the primary project maintainer on GitHub. For support or privacy requests, contact us at contact@deltawidgets.com.

## 2. Information we collect

Depending on how you use the site, we may collect:

- Account and authentication data from Google or GitHub OAuth when you create or manage a gallery listing, including your name, email address, profile image, and provider account identifier.
- Public gallery activity such as widget views, downloads, uploads, comments, and moderation actions.
- Technical data such as IP address, browser type, operating system, device information, page visits, referrer URLs, timestamps, and traffic analytics.
- Cookies, local storage, and related browser storage to remember sessions, OAuth sign-in state, saved preferences, and offline-first widget downloads.
- Contact and support messages you send to us by email or through project channels.

We do not sell personal information. We may share limited information with service providers that help operate the website, analytics, and authentication features.

## 3. How we use your information

We use information to:

- operate and secure the website and gallery;
- verify account access and manage widget submissions;
- monitor the quality and safety of uploads;
- improve the website, documentation, features, and product experience;
- analyze usage trends and technical reliability;
- respond to support requests and legal obligations.

## 4. Analytics and traffic measurement

We may use third-party analytics tools such as Vercel Analytics and Mixpanel to understand site usage and improve performance. These tools may collect information about page views, device and browser details, time spent, and interaction patterns. This data is aggregated or pseudonymized where available and used for product and website improvement.

## 5. Advertising and third-party cookies

We may allow third-party advertising and analytics partners, including Google, to use cookies, web beacons, device identifiers, and similar technologies on this website. These technologies may collect information about your visits to our site and other sites to help measure advertising effectiveness and provide personalized or non-personalized ads.

Google and its partners may use cookies to serve ads based on your prior visits to our website or other sites. You can opt out of personalized advertising in Google Ads Settings at https://adssettings.google.com/ and learn more about ad cookies and privacy at https://policies.google.com/technologies/ads.

You may also opt out of certain third-party advertising cookies through the Digital Advertising Alliance or the Network Advertising Initiative at https://www.aboutads.info/choices/ or https://optout.networkadvertising.org/. For more information on how Google uses data when you use its partners' sites or apps, see https://policies.google.com/technologies/partner-sites.

## 6. Cookies and browser storage

We use essential cookies and browser storage to:

- keep you signed in when required;
- remember site preferences;
- maintain session security;
- support file and widget caching for offline use;
- help with analytics and service performance.

If you disable cookies, some site features may not function correctly.

## 7. User-generated content and public gallery

By uploading or publishing content to the public gallery, you may make it visible to other visitors. We may display, host, moderate, and retain that content in connection with the gallery. Public gallery content may be indexed or viewed by other users and search engines in accordance with the gallery's public nature.

## 8. Third-party links

Our site may contain links to GitHub, documentation, Discord, or external services. We are not responsible for the privacy practices of those third parties. Please review their policies before providing information to them.

## 9. Data retention

We retain personal information only for as long as necessary to provide services, fulfill legal obligations, resolve disputes, protect security, and improve the product. If you delete an account or request data removal, we may keep limited records where required by law or necessary for legitimate business purposes.

## 10. Security

We use reasonable administrative, technical, and organizational measures to protect information. However, no system is completely secure, and no method of transmission or storage is guaranteed to be 100% secure. Please avoid sending sensitive personal information through public channels.

## 11. Your rights

Depending on your location, you may have rights to access, correct, delete, restrict, or object to certain personal data processing. To exercise these rights, contact us at contact@deltawidgets.com. We will respond as required by applicable law.

## 12. Children's privacy

The website and services are not intended for children under 13, and we do not knowingly collect personal information from children under 13. If we become aware of such data, we will delete it promptly.

## 13. Changes to this policy

We may update this privacy policy from time to time. If we make material changes, we will post the revised version on this page with a new "Last updated" date. Continued use of the site after changes are published constitutes acceptance of the revised policy.

## 14. Contact

For questions about this privacy policy or data requests, contact:

Delta Widgets
Email: contact@deltawidgets.com
GitHub: https://github.com/amaan-mohib/delta-widgets
`;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `The ${APP_NAME} privacy policy — what information the website collects, why, and how it is used.`,
  alternates: { canonical: "/privacy-policy" },
};

const Policy = async () => {
  "use cache";
  cacheLife("max");

  return (
    <section className="py-10 md-body container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <Markdown remarkPlugins={[remarkGfm]}>{policy}</Markdown>
    </section>
  );
};

export default Policy;
