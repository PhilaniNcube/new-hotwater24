import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Cta } from "@/sanity/types";

// Type for hero section data coming from GROQ queries (with transformed image URLs)
interface HeroBlockData {
  _type: "heroSection";
  heading?: string | null;
  subheading?: string | null;
  backgroundImage?: string | null;
  overlayImage?: string | null;
  ctaButton?: Cta | null;
  secondaryCtaButton?: Cta | null;
}

interface HeroBlockProps {
  data: HeroBlockData;
}

const renderCtaButton = (cta: Cta, isPrimary: boolean = true) => {
  if (!cta?.buttonText) return null;

  const buttonClasses = isPrimary
    ? "bg-white text-slate-900 flex space-x-2 py-2 px-4 shadow-gray-600 shadow-lg hover:shadow-xs hover:text-white items-center mt-4 rounded-full w-fit uppercase"
    : "bg-transparent border border-white text-white flex space-x-2 py-2 px-4 hover:bg-white hover:text-slate-900 items-center mt-4 rounded-full w-fit uppercase";

  const content = (
    <Button className={buttonClasses}>
      {cta.buttonText}
      <span>
        <ArrowRight />
      </span>
    </Button>
  );

  // Handle different link types
  if (cta.linkType === "external" && cta.externalUrl) {
    return (
      <a href={cta.externalUrl} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  if (cta.linkType === "file" && cta.fileLink?.asset) {
    return (
      <a href={cta.fileLink.asset._ref} download>
        {content}
      </a>
    );
  }

  // Default to internal link or fallback
  const href =
    cta.linkType === "internal" && cta.internalLink?._ref
      ? `/${cta.internalLink._ref}`
      : "/";

  return <Link href={href}>{content}</Link>;
};

const HeroBlock: React.FC<HeroBlockProps> = ({ data }) => {
  const {
    heading,
    subheading,
    backgroundImage,
    overlayImage,
    ctaButton,
    secondaryCtaButton,
  } = data;
  return (
    <div className="relative isolate min-h-[70vh]">
      {/* Background Image */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Hero background"
          width={1920}
          height={1280}
          quality={100}
          priority={true}
          className="z-[-1] w-full object-cover object-left md:object-center min-h-[50vh] md:min-h-[60vh]"
        />
      )}

      {/* Content Overlay */}
      <div className="absolute inset-0">
        <div className="container z-20 flex flex-col justify-center px-4 py-12 mx-auto space-y-3 bg-center bg-no-repeat bg-cover aspect-video lg:px-16">
          <div className="max-w-xl">
            {heading && (
              <h1 className="text-2xl lg:text-4xl max-w-[60ch] font-sans font-bold mb-3 text-white">
                {heading}
              </h1>
            )}
          </div>

          {subheading && (
            <p className="mb-4 font-normal text-white text-md lg:text-xl md:w-1/2 md:font-medium">
              {subheading}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            {ctaButton && renderCtaButton(ctaButton, true)}
            {secondaryCtaButton && renderCtaButton(secondaryCtaButton, false)}
          </div>

          {/* Overlay Image (optional decorative image) */}
          {overlayImage && (
            <div className="absolute hidden bottom-8 right-8 lg:block">
              <Image
                src={overlayImage}
                alt="Hero overlay"
                width={200}
                height={200}
                className="opacity-80"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
