// write a function to get the embedding of a text using OpenAI API and then use that result to perform a semantic search against the embeddings table
'use server'


import { createClient } from "@/utils/supabase/service";
import { createOpenAI } from "@ai-sdk/openai";
import { embed } from 'ai';
import { Redis } from '@upstash/redis'
import { Ratelimit } from "@upstash/ratelimit";

const redis = Redis.fromEnv()
const rateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "1 m"),
  analytics: true,
})






const openai = createOpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

export async function semanticSearch(query: string) {

   

  // Rate limit the request to 10 requests per minute
  // const { success, remaining } = await rateLimit.limit("search")
  // console.log("Rate limit success:", success)
  // console.log("Remaining requests:", remaining)

  // if (!success) {
  //   return []
  // }


  const embeddingResult = await embed({
    model: openai.embedding('text-embedding-3-small'),
    value: query,
  });

  const embedding = embeddingResult.embedding as unknown as string;


  const threshold = 0.3; // Adjust the threshold as needed
  const matchCount = 4; // Number of matches to return



  const supabase = await createClient();

  // Use the `match_documents` function with the <-> operator for cosine distance
  const { data, error } = await supabase.rpc('search_content', {
    query_embedding: JSON.stringify(embedding), 
    similarity_threshold: threshold, // Adjust the threshold as needed
    match_count: matchCount, // Number of matches to return
  }).select('*').limit(4);




  if (error) {
    console.error("Error fetching embeddings:", error);
    return null;
  }

  if (!data) {
    console.error("No data returned from fetch");
    return data;
  }

  if (data.length === 0) {
    console.error("No data returned from fetch");
    return [];
  }



  return data;

}
