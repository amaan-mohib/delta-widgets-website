import { APP_NAME } from "@/lib/utils";
import type { Metadata } from "next";
import GuidesPage from "./guides";

export const metadata: Metadata = {
  title: "Guides",
  description: `Step-by-step guides for ${APP_NAME}: build your first clock widget, create a now-playing media widget, and write custom HTML widgets with Tauri.`,
  alternates: { canonical: "/guides" },
};

export default function Guides() {
  return <GuidesPage />;
}
