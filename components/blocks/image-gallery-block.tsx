"use client";

import { ImageGallerySection } from "@/sanity/types";
import Image from "next/image";
import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";

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

  const getCarouselStyles = (image: NonNullable<ImageGalleryBlockData['images']>[number]) => {
    if (layout !== "carousel" || !image?.asset?.metadata?.dimensions) {
      return {};
    }
    
    const { width, height } = image.asset.metadata.dimensions;
    const aspectRatio = width / height;
    
    // Calculate width based on fixed height of 240px (h-60)
    const containerWidth = Math.round(240 * aspectRatio);
    return { width: `${containerWidth}px` };
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
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                layout === "carousel" ? "flex-shrink-0" : ""
              } ${layout === "masonry" ? "break-inside-avoid mb-4" : ""}`}
              style={getCarouselStyles(image)}
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
                  width={image.asset.metadata?.dimensions?.width || 400}
                  height={image.asset.metadata?.dimensions?.height || 300}
                  className={`w-full transition-transform duration-300 group-hover:scale-105 ${
                    layout === "masonry" 
                      ? "h-auto object-cover" 
                      : layout === "carousel"
                      ? "h-60 object-cover"
                      : "h-64 object-cover"
                  }`}
                />
              )}
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-black/70">
                  <p className="text-sm">{image.caption}</p>
                </div>
              )}
              <div className="absolute inset-0 transition-colors duration-300 bg-black/0 group-hover:bg-black/20" />
            </div>
          ))}
        </div>
        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={selectedImage}
                alt="Selected image"
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-full"
              />
              <button
                onClick={closeLightbox}
                className="absolute text-2xl text-white top-4 right-4 hover:text-gray-300"
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
