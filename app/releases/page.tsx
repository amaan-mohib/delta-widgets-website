import ReleasesPage from "@/components/releases";
import { getReleases } from "@/lib/data";
import { APP_NAME } from "@/lib/utils";
import { Metadata } from "next";
// import { // cacheLife, cacheTag } from "next/cache";

export const metadata: Metadata = {
  title: "Releases",
  description: `Browse every ${APP_NAME} release, with version notes and downloadable installers for Windows.`,
  alternates: { canonical: "/releases" },
};

const Releases = async () => {
  // "use cache";
  // cacheLife("max");
  // cacheTag("releases");

  const releases = await getReleases();

  return <ReleasesPage releases={releases} />;
};

export default Releases;
