"use client";

import { ImageGallerySection } from "@/sanity/types";
import Image from "next/image";
import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";

// Custom interface that matches the GROQ query response
interface ImageGalleryBlockData {
  _type: "imageGallerySection";
  heading?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4";
  images?: Array<{
    asset?: {
      _id: string;
      _type: "sanity.imageAsset";
      url: string;
      metadata?: {
        dimensions?: {
          width: number;
          height: number;
          aspectRatio: number;
        };
      };
    };
    caption?: string;
    alt?: string;
  }>;
  layout?: "grid" | "masonry" | "carousel";
}

interface ImageGalleryBlockProps {
  data: ImageGalleryBlockData;
}

export default function ImageGalleryBlock({ data }: ImageGalleryBlockProps) {
  const { heading, images, layout = "grid" } = data;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  console.log("data:", data);

  if (!images || images.length === 0) return null;

  const getGridClass = () => {
    switch (layout) {
      case "masonry":
        return "columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4";
      case "carousel":
        return "flex overflow-x-auto gap-4 pb-4";
      default:
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4";
    }
  };

  // Fixed portrait aspect ratio for all images
  const PORTRAIT_ASPECT_RATIO = "3/4"; // Consistent portrait ratio (width/height)
  const FIXED_HEIGHT = {
    grid: "h-80",    // 320px height
    masonry: "h-auto", // Auto height for masonry
    carousel: "h-80"   // 320px height
  };

  const getCarouselStyles = () => {
    if (layout !== "carousel") {
      return {};
    }

    // Fixed portrait dimensions for carousel items
    const aspectRatio = 3/4; // Portrait ratio
    const fixedHeight = 320;
    const containerWidth = Math.round(fixedHeight * aspectRatio);
    return { width: `${containerWidth}px`, height: `${fixedHeight}px` };
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="w-full py-12 mx-auto max-w-7xl">
      <div className="container px-4 md:px-6">
        {heading && (
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-800">
              {heading}
            </h2>
          </div>
        )}{" "}
        <div className={getGridClass()}>
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                `relative overflow-hidden w-full rounded-lg cursor-pointer group flex items-center justify-center ${
                  layout === "carousel" ? "flex-shrink-0" : ""
                } ${layout === "masonry" ? "break-inside-avoid mb-4" : ""} ${
                  FIXED_HEIGHT[layout as keyof typeof FIXED_HEIGHT]
                }`
              )}
              style={{
                ...getCarouselStyles(),
                aspectRatio: layout !== "masonry" ? PORTRAIT_ASPECT_RATIO : undefined
              }}
              onClick={() =>
                image.asset && handleImageClick(urlFor(image).url())
              }
            >
              {image.asset && (
                <Image
                  src={urlFor(image).url()}
                  alt={
                    image.alt || image.caption || `Gallery image ${index + 1}`
                  }
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )}

              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-100">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              )}
              <div className="absolute inset-0 transition-colors duration-300 bg-black/0 group-hover:bg-black/10" />
            </div>
          ))}
        </div>
        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeLightbox}
          >
            <div className="relative w-full max-w-4xl h-[60vh] flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="Selected image"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
              <button
                onClick={closeLightbox}
                className="absolute z-10 text-2xl text-white top-4 right-4 hover:text-gray-300"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
