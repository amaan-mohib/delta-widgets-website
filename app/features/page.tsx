import type { Metadata } from "next";
import FeaturesPage from "./features";
import { cacheLife } from "next/cache";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Everything Delta Widgets can do: a drag-and-drop visual editor, custom HTML and URL widgets, dynamic variables, templates, and an optional bring-your-own-key AI assistant.",
  alternates: { canonical: "/features" },
};

export default async function Features() {
  "use cache";
  cacheLife("max");

  return <FeaturesPage />;
}
