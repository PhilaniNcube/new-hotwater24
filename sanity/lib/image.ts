import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-12-01",
  useCdn: process.env.NODE_ENV === "production",
});

// Create image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Helper function to get optimized image URL with default settings
export function getImageUrl(
  source: SanityImageSource,
  width?: number,
  height?: number,
  quality?: number
) {
  let url = urlFor(source);

  if (width) {
    url = url.width(width);
  }

  if (height) {
    url = url.height(height);
  }

  if (quality) {
    url = url.quality(quality);
  }

  return url.url();
}

// Pre-configured image URL generators for common use cases
export const imageUrlGenerators = {
  // Hero images - large, high quality
  hero: (source: SanityImageSource) =>
    urlFor(source).width(1920).height(1080).quality(90).url(),

  // Thumbnails - small, optimized
  thumbnail: (source: SanityImageSource) =>
    urlFor(source).width(400).height(300).quality(80).url(),

  // Gallery images - medium size
  gallery: (source: SanityImageSource) =>
    urlFor(source).width(800).height(600).quality(85).url(),

  // Card images - standard size
  card: (source: SanityImageSource) =>
    urlFor(source).width(600).height(400).quality(80).url(),

  // Avatar images - small, square
  avatar: (source: SanityImageSource) =>
    urlFor(source).width(100).height(100).quality(85).url(),
};
