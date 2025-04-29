// write a function to get the embedding of a text using OpenAI API and then use that result to perform a semantic search against the embeddings table
'use server'


import { createClient } from "@/utils/supabase/service";
import { createOpenAI } from "@ai-sdk/openai";
import { embed, EmbedResult } from 'ai';


const openai = createOpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

export async function semanticSearch(query: string) {

  const embeddingResult = await embed({
    model: openai.embedding('text-embedding-3-small'),
    value: query,
  });

  const embedding = embeddingResult.embedding as unknown as string;

  console.log("Embedding:", embedding);
  const threshold = 0.3; // Adjust the threshold as needed
  const matchCount = 4; // Number of matches to return

  console.log("Threshold:", threshold);
  console.log("Match Count:", matchCount);

  const supabase = await createClient();

  // Use the `match_documents` function with the <-> operator for cosine distance
  const { data, error } = await supabase.rpc('search_content', {
    query_embedding: JSON.stringify(embedding), 
    similarity_threshold: threshold, // Adjust the threshold as needed
    match_count: matchCount, // Number of matches to return
  }).select('*').limit(4);


   
  console.log({data, error});


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
