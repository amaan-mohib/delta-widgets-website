import ReleasePage from "@/components/release";
import { getReleases } from "@/lib/data";
import { APP_NAME } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  return {
    title: `Release ${slug}`,
    description: `Release notes and Windows installer for ${APP_NAME} ${slug}.`,
    alternates: { canonical: `/releases/${slug}` },
  };
}

const Release = async ({ params }: Props) => {
  const { slug } = await params;
  const { releases, latest } = await getReleases();
  const release =
    slug === "latest" ? releases[latest.tag_name] : releases[slug];
  const isLatest = slug === "latest" || slug === latest.tag_name;

  if (!release) {
    notFound();
  }

  return <ReleasePage release={release} isLatest={isLatest} />;
};

export default Release;
