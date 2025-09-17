import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Type for centered hero section data coming from GROQ queries
interface CenteredHeroBlockData {
  _type: "centeredHeroSection";
  heading?: string | null;
  headingTag?: "h1" | "h2" | "h3" | "h4" | null;
  subheading?: string | null;
  smallText?: string | null;
  buttonText?: string | null;
  buttonUrl?: string | null;
}

interface CenteredHeroBlockProps {
  data: CenteredHeroBlockData;
}

const CenteredHeroBlock: React.FC<CenteredHeroBlockProps> = ({ data }) => {
  const {
    heading,
    headingTag = "h1",
    subheading,
    smallText,
    buttonText,
    buttonUrl,
  } = data;

  // Determine the heading component based on headingTag
  const HeadingComponent = headingTag || "h1";

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small Text */}
          {smallText && (
            <p className="text-sm font-medium text-orange-600 uppercase tracking-wide mb-4">
              {smallText}
            </p>
          )}

          {/* Main Heading */}
          {heading && (
            <HeadingComponent className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {heading}
            </HeadingComponent>
          )}

          {/* Subheading */}
          {subheading && (
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {subheading}
            </p>
          )}

          {/* Call to Action Button */}
          {buttonText && buttonUrl && (
            <div className="flex justify-center">
              <Link href={buttonUrl}>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
                  <span>{buttonText}</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CenteredHeroBlock;
