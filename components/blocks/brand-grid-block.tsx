import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

// Type for brand item data coming from GROQ queries
interface BrandItemData {
  _type: "brandItem";
  title?: string | null;
  description?: string | null;
  tags?: string[] | null;
  image?: string | null; // Transformed image URL from GROQ
  imageAlt?: string | null;
  link?: string | null;
}

// Type for brand grid section data coming from GROQ queries
interface BrandGridBlockData {
  _type: "brandGridSection";
  heading?: string | null;
  headingTag?: "h1" | "h2" | "h3" | "h4" | null;
  subheading?: string | null;
  brands?: BrandItemData[] | null;
  gridColumns?: "2" | "3" | "4" | null;
}

interface BrandGridBlockProps {
  data: BrandGridBlockData;
}

const BrandCard: React.FC<{ brand: BrandItemData }> = ({ brand }) => {
  const { title, description, tags, image, imageAlt, link } = brand;

  const cardContent = (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full flex flex-col">
      {/* Brand Image */}
      {image && (
        <div className="mb-4 flex justify-center">
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src={image}
              alt={imageAlt || title || "Brand logo"}
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Brand Title */}
      {title && (
        <h3 className="text-xl font-semibold text-slate-900 mb-2 text-center">
          {title}
        </h3>
      )}

      {/* Brand Description */}
      {description && (
        <p className="text-slate-600 mb-4 flex-grow text-center leading-relaxed">
          {description}
        </p>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mt-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* External Link Indicator */}
      {link && (
        <div className="flex justify-center mt-4">
          <ExternalLink className="w-4 h-4 text-slate-400" />
        </div>
      )}
    </div>
  );

  // Wrap with link if provided
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block transform hover:scale-105 transition-transform duration-200"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

const BrandGridBlock: React.FC<BrandGridBlockProps> = ({ data }) => {
  const {
    heading,
    headingTag = "h2",
    subheading,
    brands,
    gridColumns = "3",
  } = data;

  // Determine the heading component based on headingTag
  const HeadingComponent = headingTag || "h2";

  // Generate grid classes based on column count
  const getGridClasses = (columns: string) => {
    switch (columns) {
      case "2":
        return "grid-cols-1 md:grid-cols-2";
      case "4":
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      default: // "3"
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  if (!brands || brands.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          {heading && (
            <HeadingComponent className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {heading}
            </HeadingComponent>
          )}
          {subheading && (
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {subheading}
            </p>
          )}
        </div>

        {/* Brand Grid */}
        <div
          className={`grid ${getGridClasses(
            gridColumns || "3"
          )} gap-6 lg:gap-8`}
        >
          {brands.map((brand, index) => (
            <BrandCard key={index} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandGridBlock;
