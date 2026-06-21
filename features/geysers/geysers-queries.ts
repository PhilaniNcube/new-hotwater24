import "server-only";

import { cache } from "react";
import { cacheLife, cacheTag } from "next/cache";
import { sanityFetch } from "@/sanity/live";
import { GEYSERS_QUERY, GEYSER_QUERY } from "@/sanity/sanity-utils";

export const getGeysers = cache(async () => {
  "use cache: remote";
  cacheTag("geysers");
  cacheLife("hours");

  const { data } = await sanityFetch({ query: GEYSERS_QUERY });
  return data ?? [];
});

export const getGeyserBySlug = cache(async (slug: string) => {
  "use cache: remote";
  cacheTag("geysers", `geysers-${slug}`);
  cacheLife("hours");

  const { data } = await sanityFetch({
    query: GEYSER_QUERY,
    params: { slug },
  });
  return data;
});
