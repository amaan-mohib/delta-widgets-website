import ReleasesPage from "@/components/releases";
import { getReleases } from "@/lib/data";
import { APP_NAME } from "@/lib/utils";
import { Metadata } from "next";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export const metadata: Metadata = {
  title: "Releases",
  description: `Browse every ${APP_NAME} release, with version notes and downloadable installers for Windows.`,
  alternates: { canonical: "/releases" },
};

const Releases = async () => {
  const releases = await getReleases();

  return <ReleasesPage releases={releases} />;
};

export default Releases;
