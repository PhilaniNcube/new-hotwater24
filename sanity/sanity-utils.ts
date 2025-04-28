import { createClient, groq } from "next-sanity";
import { Article, Geyser } from "./types";

const client = createClient({
  projectId: "anh1uho1",
  dataset: "production",
  apiVersion: "2023-07-31",
});

export async function getArticles(): Promise<Article[]> {
  return await client.fetch(
    groq`*[_type == "article"] | order(_createdAt desc){
      _id,
      _createdAt,
      title,
      meta_title,
      meta_description,
      "slug": slug.current,
      "image": image.asset->url,
      link,
      content
    }`
  );
}

export async function getArticle(slug: string): Promise<Article> {
  return await client.fetch(
    groq`*[_type == "article" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      meta_title,
      meta_description,
      "slug": slug.current,
      "image": image.asset->url,
      link,
      content
    }`,
    { slug }
  );
}

export async function getGeysers(): Promise<Geyser[]> {
  return await client.fetch(
    groq`*[_type == "geysers"] | order(_createdAt asc){
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      subTitle,
      description,
      outlets,
     geyser,
     plumbing,
     price,
     composition,
     certificateOfCompliance,
     installation,
      warranty,
      specifications,
      maxFlowRate,
      minFlowRate,
      minWaterPressure,
      maxWaterPressure,
      dimensions,
      brand,
      "image": image.asset->url,
    }`
  );
}

export async function getGeyser(slug: string): Promise<Geyser> {
  return await client.fetch(
    groq`*[_type == "geysers" && slug.current == $slug][0]{
     _id,
      _createdAt,
      title,
      "slug": slug.current,
      price,
      subTitle,
      composition,
      description,
      outlets,
      geyser,
     plumbing,
     certificateOfCompliance,
     installation,
      warranty,
      specifications,
      maxFlowRate,
      minFlowRate,
      minWaterPressure,
      maxWaterPressure,
      dimensions,
      brand,
      "image": image.asset->url,
    }`,
    { slug }
  );
}
