import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const APP_NAME = "Delta Widgets";

export const WEBSITE_URL =
  process.env.NEXT_PUBLIC_WEBSITE_URL || "https://delta-widgets.vercel.app";
export const WEBSITE_CANONICAL_URL =
  process.env.NEXT_PUBLIC_WEBSITE_CANONICAL_URL ||
  "https://delta-widgets.vercel.app";
