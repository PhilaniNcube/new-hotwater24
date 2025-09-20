import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";
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
    <div className="flex flex-col h-full p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
      {/* Brand Image */}
      {image && (
        <div className="flex justify-center mb-4">
          <div className="relative flex-shrink-0 w-24 h-24">
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
        <h3 className="mb-2 text-lg font-semibold text-center text-slate-900">
          {title}
        </h3>
      )}

      {/* Brand Description */}
      {description && (
        <p className="flex-grow mb-4 text-sm leading-relaxed text-center text-slate-600">
          {description}
        </p>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium text-orange-800 bg-orange-100 rounded-full"
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
        className="block transition-transform duration-200 transform hover:scale-105"
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

  // Generate grid classes based on column count
  const getGridClasses = (columns: string) => {
    switch (columns) {
      case "2":
        return "grid-cols-1 md:grid-cols-2";
      case "4":
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      case "5":
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-5";
      default: // "3"
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  if (!brands || brands.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          {heading && (
            <SectionHeading
              heading={heading}
              headingTag={headingTag || "h2"}
              className="mb-4 text-3xl font-bold md:text-4xl text-slate-900"
            />
          )}
          {subheading && (
            <p className="max-w-3xl mx-auto text-lg text-slate-600">
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
