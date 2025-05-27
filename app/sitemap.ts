import { sanityFetch } from "@/sanity/live";
import { ARTICLES_QUERY, GEYSERS_QUERY } from "@/sanity/sanity-utils";
import { ARTICLE_QUERYResult, GEYSER_QUERYResult } from "@/sanity/types";
import { MetadataRoute } from "next";

const BASE_URL = "https://hotwater24.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: articles } = await sanityFetch({
    query: ARTICLES_QUERY,
  });

  const { data: packages } = await sanityFetch({
    query: GEYSERS_QUERY,
  });

  // create a sitemap object for each article
  const articleSitemaps = articles.map((article: ARTICLE_QUERYResult) => ({
    url: `${BASE_URL}/news/${article?.slug}`,
    // changeFrequency: 'monthly',
    lastModified: new Date(),
  }));

  // create a sitemap object for each package
  const packageSitemaps = packages.map((item: GEYSER_QUERYResult) => ({
    url: `${BASE_URL}/packages/${item?.slug}`,
    changeFrequency: "monthly",
    lastModified: new Date(),
  }));

  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/savings`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/payment-plan`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/quote`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/quote/start`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/our-approach`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/who-we-are`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/why-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...articleSitemaps,
    ...packageSitemaps,
  ];
}
