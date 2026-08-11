import {
  APP_NAME,
  DISCORD_LINK,
  DOCS_WEBSITE_URL,
  GITHUB_BASE_LINK,
  WAITLIST_LINK,
  WEBSITE_URL,
} from "@/lib/utils";
import { Metadata } from "next";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const contact = `# Contact

## Get in touch

Have a question, found a problem, or have an idea for ${APP_NAME}?

Choose the best place to reach us below.

### Bug reports

Found something that isn't working correctly?

Please report bugs through GitHub Issues. Include your ${APP_NAME} version, Windows version, what you were trying to do, and any relevant screenshots or error messages.

[Report an Issue](${GITHUB_BASE_LINK}/issues)

### Feature requests

Have an idea for a new feature, widget, or improvement?

Share it through GitHub Discussions so others can comment and help shape the idea.

[Start a Discussion](${GITHUB_BASE_LINK}/discussions)

### Community

For questions, ideas, widget sharing, and general conversation, join the ${APP_NAME} Discord community.

[Join Discord](${DISCORD_LINK})

### Other inquiries

For other questions or inquiries that don't fit the categories above, you can contact us at:

**contact@deltawidgets.com**

${APP_NAME} is an independent open-source project, so response times may vary. We'll get back to you when we can.

### ${APP_NAME}

Free and open source desktop widgets for Windows (for now).

[Download](/download) · [Documentation](${DOCS_WEBSITE_URL}) · [Community Gallery - Soon](${WAITLIST_LINK})`;

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = async () => {
  return (
    <section className="py-10 md-body container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <Markdown remarkPlugins={[remarkGfm]}>{contact}</Markdown>
    </section>
  );
};

export default Contact;
