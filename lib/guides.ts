// Guide metadata. Bodies live as markdown in content/guides/<slug>.md and are
// read at build time by the guide route (see app/guides/[slug]/page.tsx).
export interface GuideMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  /** Date the guide was last meaningfully updated (YYYY-MM-DD). Powers sitemap lastModified. */
  updatedAt: string;
}

export const guides: GuideMeta[] = [
  {
    slug: "build-a-live-clock-widget",
    title: "Build a live clock widget",
    description:
      "Your first widget: use the visual editor and dynamic variables to pin a live, date-fns-formatted clock to your desktop — no code required.",
    category: "Beginner",
    readingTime: "4 min read",
    updatedAt: "2026-09-21",
  },
  {
    slug: "build-a-now-playing-media-widget",
    title: "Build a now-playing media widget",
    description:
      "Show album art, title, artist, a seek bar, and playback controls — built two ways, with the visual editor or custom HTML.",
    category: "Intermediate",
    readingTime: "5 min read",
    updatedAt: "2026-09-21",
  },
  {
    slug: "custom-html-widget-with-tauri",
    title: "Build a custom HTML widget with Tauri",
    description:
      "Go beyond the editor: load an HTML widget, pull live data with Tauri commands, react to events, and make the window draggable.",
    category: "Advanced",
    readingTime: "7 min read",
    updatedAt: "2026-09-21",
  },
];

export function getGuideMeta(slug: string): GuideMeta | undefined {
  return guides.find((guide) => guide.slug === slug);
}
