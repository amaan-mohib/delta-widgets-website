import {
  APP_NAME,
  DISCORD_LINK,
  DOCS_WEBSITE_URL,
  GALLERY_LINK,
} from "@/lib/utils";
import { Metadata } from "next";
import { cacheLife } from "next/cache";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const about = `# About ${APP_NAME}

## A free, independent project for Windows desktop customization

${APP_NAME} is a free and open-source widget maker for Windows. It helps you build custom desktop widgets without writing code, with a visual editor, templates, and support for dynamic data.

## Who builds it

${APP_NAME} is an independent open-source project maintained by the project contributors and the primary maintainer, Amaan Mohib, on GitHub. The project is developed in public and shaped by community feedback, pull requests, and discussions.

- [GitHub](https://github.com/amaan-mohib)
- [Project repository](https://github.com/amaan-mohib/delta-widgets)
- [Community Discord](${DISCORD_LINK})
- Email: contact@deltawidgets.com

## Why it exists

The project was started to make desktop customization more approachable. Rather than requiring technical setup or complex development workflows, ${APP_NAME} aims to give people an accessible way to create useful, personal, and beautiful widgets for their desktop.

## Development philosophy

We believe desktop customization should be:

- open and transparent;
- easy to explore and learn;
- flexible enough for power users;
- respectful of community contributions.

The project is built in public on GitHub and welcomes issues, ideas, and improvements from the community.

## Free and open source

${APP_NAME} is free to use and open source under the GPL-3.0 license. The code, documentation, and project roadmap are publicly available so users can inspect, contribute, and adapt the project.

The project is built with Tauri to provide a lightweight native desktop experience while keeping the flexibility of web technologies.

## Get started

${APP_NAME} is available for Windows 10 and Windows 11. Download it for free and start creating your own widgets.

[Download ${APP_NAME}](/download) · [Documentation](${DOCS_WEBSITE_URL}) · [Community Gallery](${GALLERY_LINK}) · [Report an issue](https://github.com/amaan-mohib/delta-widgets/issues)`;

export const metadata: Metadata = {
  title: "About",
  description: `About ${APP_NAME} — a free and open-source, no-code desktop widget maker for Windows, built with Tauri for a lightweight native experience.`,
  alternates: { canonical: "/about" },
};

const About = async () => {
  "use cache";
  cacheLife("max");

  return (
    <section className="py-10 md-body container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <Markdown remarkPlugins={[remarkGfm]}>{about}</Markdown>
    </section>
  );
};

export default About;
