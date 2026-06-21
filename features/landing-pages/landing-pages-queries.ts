import "server-only";

import { cache } from "react";
import { cacheLife, cacheTag } from "next/cache";
import { sanityFetch } from "@/sanity/live";
import {
  LANDING_PAGES_QUERY,
  LANDING_PAGE_QUERY,
  TOP_NAVIGATION_QUERY,
  FOOTER_NAVIGATION_QUERY,
} from "@/sanity/sanity-utils";

export const getLandingPages = cache(async () => {
  "use cache: remote";
  cacheTag("landing-pages");
  cacheLife("hours");

  const { data } = await sanityFetch({ query: LANDING_PAGES_QUERY });
  return data ?? [];
});

export const getLandingPageBySlug = cache(async (slug: string) => {
  "use cache: remote";
  cacheTag("landing-pages", `landing-pages-${slug}`);
  cacheLife("hours");

  const { data } = await sanityFetch({
    query: LANDING_PAGE_QUERY,
    params: { slug },
  });
  return data;
});

export const getTopNavigation = cache(async () => {
  "use cache: remote";
  cacheTag("navigation", "top-navigation");
  cacheLife("hours");

  const { data } = await sanityFetch({ query: TOP_NAVIGATION_QUERY });
  return data ?? [];
});

export const getFooterNavigation = cache(async () => {
  "use cache: remote";
  cacheTag("navigation", "footer-navigation");
  cacheLife("hours");

  const { data } = await sanityFetch({ query: FOOTER_NAVIGATION_QUERY });
  return data ?? [];
});
