import ReleasePage from "@/components/release";
import { getReleases } from "@/lib/data";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  return {
    title: `Release ${slug}`,
  };
}

const Release = async ({ params }: Props) => {
  const { slug } = await params;
  const { releases, latest } = await getReleases();
  const release =
    slug === "latest" ? releases[latest.tag_name] : releases[slug];

  if (!release) {
    notFound();
  }

  return <ReleasePage release={release} />;
};

export default Release;
