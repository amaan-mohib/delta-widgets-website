// import { // cacheLife } from "next/cache";
import { IReleases } from "./types";

export async function getReleases() {
  // "use cache";
  // cacheLife("hours");

  const res = await fetch(process.env.RELEASES_JSON_URL!);
  return (await res.json()) as IReleases;
}
