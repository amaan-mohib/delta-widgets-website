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

export const WAITLIST_LINK =
  process.env.NEXT_PUBLIC_WAITLIST_LINK ||
  "https://gallery.deltawidgets.com/waitlist";
// "https://forms.gle/Y7ni54Eknp599nG6A";

export const DISCORD_LINK = "https://discord.gg/wDE8KNx8fB";

export const GITHUB_BASE_LINK = "https://github.com/amaan-mohib/delta-widgets";
