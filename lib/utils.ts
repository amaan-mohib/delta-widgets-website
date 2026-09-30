import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const APP_NAME = "Delta Widgets";

export const WEBSITE_URL =
  process.env.NEXT_PUBLIC_WEBSITE_URL || "https://delta-widgets.vercel.app";

export const DOCS_WEBSITE_URL =
  process.env.NEXT_PUBLIC_DOCS_WEBSITE_URL ||
  "https://amaan-mohib.github.io/delta-widgets";

export const GALLERY_LINK =
  process.env.NEXT_PUBLIC_GALLERY_LINK || "https://gallery.deltawidgets.com";

export const WAITLIST_LINK =
  process.env.NEXT_PUBLIC_WAITLIST_LINK || GALLERY_LINK;
// "https://forms.gle/Y7ni54Eknp599nG6A";

export const DISCORD_LINK = "https://discord.gg/wDE8KNx8fB";

export const GITHUB_BASE_LINK = "https://github.com/amaan-mohib/delta-widgets";

// Date the static marketing pages (home, /features, /built-in-widgets, /guides
// index) were last meaningfully updated. Bump this when you revise them so the
// sitemap's lastModified reflects real content changes, not each build.
export const CONTENT_UPDATED = "2026-09-21";

// Funding links — kept in sync with the app repo's .github/FUNDING.yml
export const GITHUB_SPONSORS_LINK = "https://github.com/sponsors/amaan-mohib";

export const BUY_ME_A_COFFEE_LINK = "https://buymeacoffee.com/amaan.mohib";

export const GUMROAD_LINK = "https://amaanmohib.gumroad.com/coffee";
