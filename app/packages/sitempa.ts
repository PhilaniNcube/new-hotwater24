import { getGeysers } from "@/sanity/sanity-utils";
import { MetadataRoute } from "next";

const BASE_URL = "https://htowater24.com";

export async function generateSitemaps() {

  const packages = await getGeysers();
  // Fetch the total number of products and calculate the number of sitemaps needed
  return packages.map((item) => {
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

const packages = await getGeysers();
  return packages.map((product) => ({
    url: `${BASE_URL}/packages/${slug}`,
    changeFrequency: "monthly",
    lastModified: new Date(),
    title: product.title,
    price: product.geyser.price + product.installation.price + product.plumbing.price + product.certificateOfCompliance.price,
  }))
}
