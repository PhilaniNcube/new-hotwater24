import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
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

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 lg:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          {heading && (
            <SectionHeading
              heading={heading}
              headingTag={headingTag || "h1"}
              className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl xl:text-6xl text-slate-900"
            />
          )}

          {/* Subheading */}
          {subheading && (
            <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed md:text-xl text-slate-600">
              {subheading}
            </p>
          )}
          {/* Small Text */}
          {smallText && (
            <p className="mb-4 text-sm font-medium tracking-wide text-orange-600 uppercase">
              {smallText}
            </p>
          )}

          {/* Call to Action Button */}
          {buttonText && buttonUrl && (
            <div className="flex justify-center">
              <Link href={buttonUrl}>
                <Button className="flex items-center px-8 py-3 space-x-2 text-lg font-semibold text-white transition-all duration-300 bg-orange-600 rounded-lg shadow-lg hover:bg-orange-700 hover:shadow-xl">
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
