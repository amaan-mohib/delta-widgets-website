import { APP_NAME, WEBSITE_URL } from "@/lib/utils";
import { Metadata } from "next";
import { cacheLife } from "next/cache";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const tos = `# Terms of Services

Last updated: 2026-11-12

These Terms of Services govern your use of the Delta Widgets website, documentation, public gallery, downloads, and related project services.

Delta Widgets is an independent open-source project maintained by the project contributors and the primary maintainer on GitHub. The project is not a registered company or incorporated entity, and the website and project branding are managed by the project maintainers.

## 1. Acceptance

By using the website or any related services, you agree to these Terms and to our [Privacy Policy](/privacy-policy). If you do not agree, you should not use the site or related services.

## 2. What Delta Widgets is

Delta Widgets is a free and open-source desktop widget maker for Windows. The project may offer documentation, a public gallery, software downloads, and community features. Software distributed under this project is subject to the open-source licensing terms published with the source code and release packages.

## 3. Website and software ownership

The website design, branding, text, graphics, and documentation are owned by or licensed to the Delta Widgets project. The desktop application itself is distributed under an open-source license, which is separate from the website branding and the public gallery content.

Third-party dependencies, libraries, assets, and modules used by the project remain subject to their own licensing terms. Community-submitted widgets and gallery assets may be subject to their own copyright or licensing terms as stated by the uploader.

## 4. GPL and intellectual property

The Delta Widgets desktop application is open source under the GNU General Public License v3.0 (GPL-3.0). That license applies to the application source code and related code files distributed with the project. It does not automatically transfer ownership of the website, its branding, or any user-submitted content.

These terms are intended to distinguish:

- the website and project branding;
- the open-source desktop application and its GPL-3.0 license;
- third-party libraries and integrations;
- user-submitted widgets and gallery content.

## 5. User-generated content and gallery uploads

The public gallery allows users to upload, publish, and share widgets and related assets. You retain ownership of any content you create, unless you expressly state otherwise.

By submitting content to the gallery, you represent that:

- you have the right to upload and share it;
- you have permission to license it as required;
- the content does not violate any law or the rights of others.

You grant Delta Widgets a non-exclusive license to host, display, distribute, and moderate the content in connection with the gallery and the project website. This allows the project to operate the gallery and make public submissions available to visitors. You may request removal of your content by contacting the project team, and we will review removal requests in good faith. Cached copies or third-party mirrors may continue to exist for a period after removal.

## 6. Acceptable use

You agree not to use the site or gallery to:

- violate laws or infringe on the rights of others;
- distribute malware, malicious code, or harmful files;
- harass, threaten, or abuse other users;
- upload content that is illegal, obscene, defamatory, or otherwise abusive;
- attempt to bypass moderation, security controls, or access restrictions.

We may remove content, suspend access, or take other action to protect the project, users, or platform integrity.

## 7. Software and service availability

The site, gallery, downloads, and project services are provided on an "as is" basis. We do our best to keep them available and secure, but we do not guarantee uninterrupted availability, accuracy, fitness for a particular purpose, or freedom from defects.

The application may require a supported Windows operating system, sufficient storage, and network access for updates, downloads, or external data integration depending on the feature you use.

## 8. Automatic updates and network access

If the desktop application includes automatic update checks, those checks may connect to project servers, GitHub Releases, or other services to verify available versions. The app may also access external services or widgets when those features are used. You are responsible for any network access, data usage, or third-party service terms associated with those features.

## 9. User generated widget security

Because widgets may be created or published by users, the project cannot guarantee that every uploaded widget is free from malicious behavior, inappropriate code, or unsafe dependencies. You are responsible for reviewing widget code or content before using, executing, or publishing it. The project may remove unsafe or suspicious content when identified.

## 10. Third-party services and integrations

The project may integrate with third-party services such as GitHub, Google OAuth, Discord, documentation hosting, analytics providers, external package registries, or other services. These third parties may have their own terms and privacy practices, which you should review.

## 11. No warranties

To the maximum extent permitted by law, the website, project services, and software are provided "as is" and "as available" without warranties of any kind, whether express, implied, or statutory. This includes warranties of merchantability, fitness for a particular purpose, and non-infringement.

## 12. Limitation of liability

Delta Widgets and its maintainers shall not be liable for indirect, incidental, special, consequential, or punitive damages, including loss of data, loss of business, or interruption of service, arising out of or related to your use of the website or software, even if advised of the possibility of such damages.

## 13. Modifications

We may update these Terms from time to time. Changes will be posted on this page with a new "Last updated" date. Continued use of the site after the updated terms are published means you accept them.

## 14. Governing law

These Terms are governed by the laws of the jurisdiction in which the project is maintained, without regard to conflict-of-laws rules. If a dispute cannot be resolved informally, you agree to bring it in the appropriate court for that jurisdiction, subject to applicable local law.

## 15. Contact

If you have questions about these Terms or the project, contact us at contact@deltawidgets.com or visit the project on GitHub: https://github.com/amaan-mohib/delta-widgets
`;

export const metadata: Metadata = {
  title: "Terms of Services",
  description: `The terms of service governing your use of the ${APP_NAME} website and services.`,
  alternates: { canonical: "/terms-of-services" },
};

const TOS = async () => {
  "use cache";
  cacheLife("max");

  return (
    <section className="py-10 md-body container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <Markdown remarkPlugins={[remarkGfm]}>{tos}</Markdown>
    </section>
  );
};

export default TOS;
