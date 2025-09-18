// write a function to get the embedding of a text using OpenAI API and then use that result to perform a semantic search against the embeddings table
"use server";

import { createClient } from "@/utils/supabase/service";
import { createOpenAI } from "@ai-sdk/openai";
import { embed } from "ai";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { Database } from "@/schema";

const redis = Redis.fromEnv();
const rateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "1 m"),
  analytics: true,
});

const openai = createOpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

// Type definition for search results based on the schema
type SearchResult =
  Database["public"]["Functions"]["search_content"]["Returns"][0];

export async function semanticSearch(query: string): Promise<SearchResult[]> {
  try {
    // Rate limit the request to 10 requests per minute
    const { success, remaining } = await rateLimit.limit("search");
    console.log("Rate limit success:", success);
    console.log("Remaining requests:", remaining);

    if (!success) {
      console.log("Rate limit exceeded");
      return [];
    }

    // Get embedding for the search query
    const embeddingResult = await embed({
      model: openai.embedding("text-embedding-3-small"),
      value: query,
    });

    const embedding = embeddingResult.embedding;

    // Search parameters
    const threshold = 0.3; // Adjust the threshold as needed
    const matchCount = 4; // Number of matches to return

    const supabase = await createClient();

    // Use the `search_content` RPC function with vector similarity
    // Type assertion to bypass TypeScript issues until migration is applied
    const { data, error } = (await (supabase as any).rpc("search_content", {
      match_count: matchCount,
      query_embedding: `[${embedding.join(",")}]`, // Convert array to PostgreSQL vector format
      similarity_threshold: threshold,
    })) as { data: SearchResult[] | null; error: any };

    if (error) {
      console.error("Error fetching embeddings:", error);
      return [];
    }

    if (!data || !Array.isArray(data) || data.length === 0) {
      console.log("No data returned from search");
      return [];
    }

    return data as SearchResult[];
  } catch (error) {
    console.error("Error in semantic search:", error);
    return [];
  }
}

// Function to search with custom parameters
export async function customSemanticSearch(
  query: string,
  threshold: number = 0.3,
  matchCount: number = 4
): Promise<SearchResult[]> {
  try {
    // Rate limit check
    const { success } = await rateLimit.limit("search");
    if (!success) {
      console.log("Rate limit exceeded");
      return [];
    }

    // Get embedding for the search query
    const embeddingResult = await embed({
      model: openai.embedding("text-embedding-3-small"),
      value: query,
    });

    const embedding = embeddingResult.embedding;
    const supabase = await createClient();

    // Use the `search_content` RPC function
    const { data, error } = (await (supabase as any).rpc("search_content", {
      match_count: matchCount,
      query_embedding: `[${embedding.join(",")}]`,
      similarity_threshold: threshold,
    })) as { data: SearchResult[] | null; error: any };

    if (error) {
      console.error("Error in custom semantic search:", error);
      return [];
    }

    return (data as SearchResult[]) || [];
  } catch (error) {
    console.error("Error in custom semantic search:", error);
    return [];
  }
}

// Function to search by content type
export async function searchByType(
  query: string,
  contentType: Database["public"]["Enums"]["content_type"],
  threshold: number = 0.3,
  matchCount: number = 4
): Promise<SearchResult[]> {
  try {
    const results = await customSemanticSearch(query, threshold, matchCount);
    return results.filter((result) => result.type === contentType);
  } catch (error) {
    console.error("Error searching by type:", error);
    return [];
  }
}
