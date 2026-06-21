import "server-only";

import { cache } from "react";
import { cacheLife, cacheTag } from "next/cache";
import { sanityFetch } from "@/sanity/live";
import {
  ARTICLES_QUERY,
  ARTICLE_QUERY,
} from "@/sanity/sanity-utils";

export const getArticles = cache(async () => {
  "use cache: remote";
  cacheTag("articles");
  cacheLife("hours");

  const { data } = await sanityFetch({ query: ARTICLES_QUERY });
  return data ?? [];
});

export const getArticleBySlug = cache(async (slug: string) => {
  "use cache: remote";
  cacheTag("articles", `articles-${slug}`);
  cacheLife("hours");

  const { data } = await sanityFetch({
    query: ARTICLE_QUERY,
    params: { slug },
  });
  return data;
});
