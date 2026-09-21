import { getReleases } from "@/lib/data";
import { guides } from "@/lib/guides";
import { CONTENT_UPDATED, WEBSITE_URL } from "@/lib/utils";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { releases, latest } = await getReleases();

  const data: MetadataRoute.Sitemap = [
    {
      url: WEBSITE_URL + "/",
      lastModified: CONTENT_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
      images: [WEBSITE_URL + "/images/design-mode/ss-1.png"],
    },
    {
      url: WEBSITE_URL + "/features",
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: WEBSITE_URL + "/built-in-widgets",
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: WEBSITE_URL + "/guides",
      lastModified: CONTENT_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: WEBSITE_URL + "/download",
      lastModified: new Date(releases[latest.tag_name].published_at),
      changeFrequency: "never",
      priority: 1,
    },
    {
      url: WEBSITE_URL + "/releases",
      lastModified: new Date(releases[latest.tag_name].published_at),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: WEBSITE_URL + "/releases/latest",
      lastModified: new Date(releases[latest.tag_name].published_at),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: WEBSITE_URL + "/terms-of-services",
      lastModified: "2026-08-07",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: WEBSITE_URL + "/privacy-policy",
      lastModified: "2026-08-07",
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  Object.values(releases).forEach((item) => {
    data.push({
      url: WEBSITE_URL + "/releases/" + item.tag_name,
      lastModified: new Date(item.published_at),
      changeFrequency: "never",
      priority: 0.5,
    });
  });

  guides.forEach((guide) => {
    data.push({
      url: WEBSITE_URL + "/guides/" + guide.slug,
      lastModified: guide.updatedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return data;
}
