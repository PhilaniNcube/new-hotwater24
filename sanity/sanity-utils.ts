import { createClient, groq } from "next-sanity";
import { Article } from "./types";

  const client = createClient({
    projectId: "anh1uho1",
    dataset: "production",
    apiVersion: "2023-07-31",

  })

export async function getArticles():Promise<Article[]> {

  return await client.fetch(
    groq`*[_type == "article"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      link,
      content
    }`
  )

}

export async function getArticle(slug:string):Promise<Article> {

  return await client.fetch(
    groq`*[_type == "article" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      link,
      content
    }`,
    {slug}
  )
}
