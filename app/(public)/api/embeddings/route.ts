import { ARTICLES_QUERY, GEYSERS_QUERY } from "@/sanity/sanity-utils";
import { embed, EmbedResult } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { createClient } from "@/utils/supabase/service";
import { NextResponse } from "next/server";
import { sanityFetch } from "@/sanity/live";

type EmbedingType = Database["public"]["Enums"]["content_type"];

// configure the OpenAI client using AI SDK

const openai = createOpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

export async function GET(req: Request) {
  const { data: articles } = await sanityFetch({
    query: ARTICLES_QUERY,
  });

  console.log("Articles:", articles);

  const { data: products } = await sanityFetch({
    query: GEYSERS_QUERY,
  });

  const [articlesRes, productsRes] = await Promise.all([articles, products]);

  const content = [
    ...articlesRes.map((article) => ({
      content: article.meta_description || "",
      created_at: article._createdAt,
      item_id: article._id,
      slug: article.slug,
      title: article.title,
      type: "article" as EmbedingType,
    })),
    ...productsRes.map((product) => ({
      content: `Brand:${product.brand} 
      Model:${product.geyser?.description} 
      Price:${product.price} 
      Flow Rate:${product.maxFlowRate} 
      Warranty:${product.warranty} 
      Suitability:${product.description} 
      Composition:${product.composition} 
      Specifications:${product.specifications}
      Name:${product.title}
      `,
      created_at: product._createdAt,
      item_id: product._id,
      slug: product.slug,
      title: product.title,
      type: "product" as EmbedingType,
    })),
  ];

  // save the embeddings to the database in the embeddings table
  const supabase = await createClient();

  // create embeddings for each item in the content array based on the content & title property of the object
  const embeddings = await Promise.all(
    content.map(async (item) => {
      const embeddingResult = await embed({
        model: openai.embedding("text-embedding-3-small"),
        value: `Title: ${item.title}` + ` Content: ${item.content}`,
      });

      console.log("Article:", item);

      // save the embedding to the database
      const { data, error } = await supabase
        .from("embeddings")
        .insert({
          content: item.content || "",
          item_id: item.item_id,
          slug: item.slug!,
          title: item.title!,
          type: item.type!,
          embeddings: embeddingResult.embedding as unknown as string,
        })
        .select("*");

      if (error) {
        console.error("Error inserting embedding:", error);
        throw new Error("Error inserting embedding");
      }
      if (!data) {
        console.error("No data returned from insert");
        throw new Error("No data returned from insert");
      }
      if (data.length === 0) {
        console.error("No data returned from insert");
        throw new Error("No data returned from insert");
      }

      console.log("Data returned from insert:", data);

      return {
        ...item,
        type: item.type as EmbedingType,
        embeddings: embeddingResult as EmbedResult<string>,
      };
    })
  );

  NextResponse.json({
    message: "Embeddings created successfully",
    data: embeddings,
  });
}
