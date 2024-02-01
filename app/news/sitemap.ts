import { getArticle, getArticles, getGeysers } from "@/sanity/sanity-utils";
import { MetadataRoute } from "next";

const BASE_URL = "https://htowater24.com";

export async function generateSitemaps() {

  const article = await getArticles();
  // Fetch the total number of products and calculate the number of sitemaps needed
  return article.map((item) => {
    return {
      slug: item.slug,
    }
  })
}

export default async function sitemap({
  slug,
}: {
  slug: string
}): Promise<MetadataRoute.Sitemap> {

const articles = await getArticles();
  return articles.map((article) => ({
    url: `${BASE_URL}/news/${slug}`,
    changeFrequency: "monthly",
    lastModified: new Date(),
    title: article.title,

  }))
}
