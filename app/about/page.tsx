import {
  APP_NAME,
  DISCORD_LINK,
  DOCS_WEBSITE_URL,
  WAITLIST_LINK,
} from "@/lib/utils";
import { Metadata } from "next";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const about = `# About ${APP_NAME}
## Desktop widgets, without the complexity

${APP_NAME} is a free and open-source widget maker for Windows. It lets you create beautiful, dynamic desktop widgets without writing code.

With a visual drag-and-drop builder, custom templates, real-time data, expressions, variables, and support for web content, ${APP_NAME} gives you the tools to build widgets that fit your desktop and your workflow.

## Built for customization

Whether you want a simple clock, system information, a media display, weather, or something completely custom, ${APP_NAME} is designed to make desktop customization accessible without requiring you to learn a programming language.

Start with a template, build something from scratch, or use existing web content as a widget.

## Free and open source

${APP_NAME} is free to use and open source under the GPL-3.0 license.

The project is built with Tauri to provide a lightweight native desktop experience while keeping the flexibility of web technologies.

The source code is publicly available, and contributions, feedback, and ideas from the community are welcome.

## Built independently

${APP_NAME} is an independent project built around a simple idea: desktop customization should be powerful without being complicated.

The project is continuously evolving through new features, community feedback, and contributions from users.

## Join the community

We're building a community around ${APP_NAME} where people can create, discover, and share widgets.

Explore the documentation, join the community, or share your feedback to help shape what's next.

[Documentation](${DOCS_WEBSITE_URL}) · [Community Gallery - Soon](${WAITLIST_LINK}) · [Join Discord](${DISCORD_LINK})

## Get started

${APP_NAME} is available for Windows 10 and Windows 11. Download it for free and start creating your own widgets.

[Download ${APP_NAME}](/download)`;

export const metadata: Metadata = {
  title: "About",
  description: `About ${APP_NAME} — a free and open-source, no-code desktop widget maker for Windows, built with Tauri for a lightweight native experience.`,
  alternates: { canonical: "/about" },
};

const About = async () => {
  return (
    <section className="py-10 md-body container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <Markdown remarkPlugins={[remarkGfm]}>{about}</Markdown>
    </section>
  );
};

export default About;
