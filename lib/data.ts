import { IReleases } from "./types";

export async function getReleases() {
  const res = await fetch(process.env.RELEASES_JSON_URL!);
  return (await res.json()) as IReleases;
}
