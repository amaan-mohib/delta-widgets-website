import fs from "node:fs";
import path from "node:path";
import { APP_NAME, WEBSITE_URL } from "@/lib/utils";
import { getGuideMeta, guides } from "@/lib/guides";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuidePage from "./guide-slug";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

function readGuideBody(slug: string): string | null {
  const file = path.join(process.cwd(), "content", "guides", `${slug}.md`);
  try {
    return fs.readFileSync(file, "utf8");
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = getGuideMeta(slug);

  if (!meta) {
    return { title: "Guide not found" };
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/guides/${slug}` },
    openGraph: {
      type: "article",
      title: `${meta.title} | ${APP_NAME}`,
      description: meta.description,
      url: `${WEBSITE_URL}/guides/${slug}`,
    },
  };
}

export default async function GuideSlug({ params }: Props) {
  const { slug } = await params;
  const meta = getGuideMeta(slug);
  const body = readGuideBody(slug);

  if (!meta || !body) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    author: { "@type": "Person", name: "Amaan Mohib" },
    publisher: { "@type": "Organization", name: APP_NAME },
    mainEntityOfPage: `${WEBSITE_URL}/guides/${slug}`,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <GuidePage meta={meta} body={body} />
    </main>
  );
}
