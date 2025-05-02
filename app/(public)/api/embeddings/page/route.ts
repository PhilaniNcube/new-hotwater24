import { getArticles, getGeysers } from "@/sanity/sanity-utils";
import { embed, EmbedResult } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { createClient } from "@/utils/supabase/service";
import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

type EmbedingType = Database["public"]["Enums"]["content_type"]

// configure the OpenAI client using AI SDK

const openai = createOpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})


export async function GET(req: Request) {

  // get the text content from the FAQ  page
  const browser = await puppeteer.launch({
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH ||
      (process.platform === 'win32'
        ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
        : (process.platform === 'darwin'
          ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
          : '/usr/bin/google-chrome')),
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // got to a particular page
  const faqPage = await page.goto("https://www.hotwater24.com/faq");

  // Set screen size.
  await page.setViewport({ width: 1920, height: 1080 });


  // get the inner text of the main content div
  const content = await page.evaluate(() => {
    // get the text contents of the main element on the faqPage
    const mainElement = document.querySelector("main");
    if (mainElement) {
      return mainElement.innerText;
    }
    return null;
  });


  // Close the browser after getting content
  await browser.close();

  if (!content) {
    return NextResponse.json({
      message: "Failed to extract content from the page",
      error: "No content found",
    }, { status: 400 });
  }

  const supabase = await createClient();

  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 50,
  });

  const contentChunks = await textSplitter.splitText(content);

  console.log("Content Chunks: ", contentChunks.length);

  const embeddingPromises = contentChunks.map(async (chunk, index) => {
    try {

 

      // Create embedding for the FAQ page content
      const embeddingResult = await embed({
        model: openai.embedding('text-embedding-3-small'),
        value: `Title: FAQ Page Content Content: ${chunk}`,
      });

      // Format the embedding as a JSON string for storage
      const embeddingString = JSON.stringify(embeddingResult.embedding as unknown as string);

      // Create a unique ID for this page content
      const pageId = `faq-page-${index}`;

      // Save the embedding to the database
      const { data, error } = await supabase
        .from("embeddings")
        .insert({
          content: chunk,
          item_id: pageId,
          slug: `faq?id=${pageId}`,
          title: "Frequently Asked Questions",
          type: 'content' as EmbedingType,
          embeddings: embeddingString,
        })
        .select("*");

      if (error) {
        console.error("Error inserting embedding:", error);
        return NextResponse.json({
          message: "Error inserting embedding",
          error: error.message,
        }, { status: 500 });
      }



      return data;
    } catch (error) {
      // console.error("Error creating embedding:", error);
      return NextResponse.json({
        message: "Error creating embedding",
        error: 'Error creating embedding',
      }, { status: 500 });
    }
  });
  // Wait for all embedding promises to resolve
  const embeddingResults = await Promise.all(embeddingPromises);
  console.log("Embedding Results:", );
  // Check for any errors in the embedding results
  const hasError = embeddingResults.some((result) => {
    // console.log("Result:", result);
    return result instanceof NextResponse && result.status !== 200;
  });


  if (hasError) {
    return NextResponse.json({
      message: "Error creating some embeddings",
      error: "Some embeddings failed to create",
    }, { status: 500 });
  }
  // Return the results of the embedding creation
  return NextResponse.json({
    message: "Embeddings created successfully",
    data: embeddingResults,
  }, { status: 200 });



}
