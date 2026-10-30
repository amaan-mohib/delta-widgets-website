import type { Metadata } from "next";
import BuiltInWidgetsPage from "./widgets";
// import { // cacheLife } from "next/cache";

export const metadata: Metadata = {
  title: "Built-in Widgets",
  description:
    "Every widget pre-installed with Delta Widgets — clock, media player, audio visualizer, weather, disks, RAM, CPU, and battery — with what each shows and the live data it uses.",
  alternates: { canonical: "/built-in-widgets" },
};

export default async function BuiltInWidgets() {
  // "use cache";
  // cacheLife("max");

  return <BuiltInWidgetsPage />;
}
