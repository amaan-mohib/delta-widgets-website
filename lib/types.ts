export interface IReleaseAsset {
  id: number;
  url: string;
  name: string;
  size: number;
  created_at: string;
  updated_at: string;
}
export interface IRelease {
  id: number;
  url: string;
  tag_name: string;
  name: string;
  published_at: string;
  assets: IReleaseAsset[];
  discussion_url: string;
  body: string;
}

export interface IReleases {
  releases: Record<string, IRelease>;
  latest: { tag_name: string; name: string };
}
