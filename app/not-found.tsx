import NotFound from "@/components/not-found";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you were looking for could not be found. Explore Delta Widgets features, built-in widgets, and downloads instead.",
};

export default function Page() {
  return <NotFound />;
}
