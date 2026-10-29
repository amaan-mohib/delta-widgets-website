import ReleasePage from "@/components/release";
import { getReleases } from "@/lib/data";
import { APP_NAME } from "@/lib/utils";
import { Metadata } from "next";
import { cacheLife, cacheTag } from "next/cache";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { releases } = await getReleases();
  return [
    ...Object.values(releases).map((release) => ({ slug: release.tag_name })),
    { slug: "latest" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  return {
    title: `Release ${slug}`,
    description: `Release notes and Windows installer for ${APP_NAME} ${slug}.`,
    alternates: { canonical: `/releases/${slug}` },
  };
}

const Release = async ({ params }: Props) => {
  "use cache";
  cacheLife("max");
  cacheTag("releases");

  const { slug } = await params;
  const { releases, latest } = await getReleases();
  const release =
    slug === "latest" ? releases[latest.tag_name] : releases[slug];
  const isLatest = slug === "latest" || slug === latest.tag_name;

  if (!release) {
    notFound();
  }

  return (
    <Suspense>
      <ReleasePage release={release} isLatest={isLatest} />
    </Suspense>
  );
};

export default Release;
