import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionHeading from "../ui/section-heading";

interface CtaButton {
  _type: "cta";
  buttonText: string;
  linkType: "internal" | "external" | "file";
  internalLink?: string;
  externalUrl?: string;
  fileLink?: string;
  buttonStyle: "primary" | "secondary" | "outline";
}

interface FullWidthHeroBlockData {
  _type: "fullWidthHeroSection";
  backgroundImage?: string;
  backgroundColor?: string;
  smallText?: string;
  heading?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4";
  featuredImage?: string;
  featuredImageAlt?: string;
  ctaButton?: CtaButton;
}

interface FullWidthHeroBlockProps {
  data: FullWidthHeroBlockData;
}

const FullWidthHeroBlock: React.FC<FullWidthHeroBlockProps> = ({ data }) => {
  const {
    backgroundImage,
    backgroundColor = "white",
    smallText,
    heading,
    headingTag = "h1",
    featuredImage,
    featuredImageAlt = "",
    ctaButton,
  } = data;

  const HeadingTag = headingTag;

  // Render CTA Button
  const renderCtaButton = () => {
    if (!ctaButton) return null;

    const getButtonStyles = (style: string) => {
      switch (style) {
        case "secondary":
          return "bg-gray-600 hover:bg-gray-700 text-white";
        case "outline":
          return `border-2 ${
            backgroundImage
              ? "border-white text-white hover:bg-white hover:text-gray-900"
              : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
          } bg-transparent`;
        default:
          return "bg-orange-600 hover:bg-orange-700 text-white";
      }
    };

    const buttonContent = (
      <Button
        className={`px-6 py-3 font-semibold transition-colors duration-200 rounded-none ${getButtonStyles(
          ctaButton.buttonStyle
        )}`}
      >
        {ctaButton.buttonText}
      </Button>
    );

    if (ctaButton.linkType === "external" && ctaButton.externalUrl) {
      return (
        <a
          href={ctaButton.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonContent}
        </a>
      );
    }

    if (ctaButton.linkType === "file" && ctaButton.fileLink) {
      return (
        <a
          href={ctaButton.fileLink}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          {buttonContent}
        </a>
      );
    }

    // Default to internal link
    const href = ctaButton.internalLink || "/";
    return <Link href={href}>{buttonContent}</Link>;
  };

  // Define background class based on backgroundColor
  const getBackgroundClass = (color: string) => {
    switch (color) {
      case "gray-100":
        return "bg-gray-100";
      case "gray-900":
        return "bg-gray-900 text-white";
      case "black":
        return "bg-black text-white";
      case "primary":
        return "bg-blue-600 text-white";
      case "secondary":
        return "bg-gray-600 text-white";
      case "orange-500":
        return "bg-orange-500 text-white";
      case "blue-500":
        return "bg-blue-500 text-white";
      default:
        return "bg-white";
    }
  };

  return (
    <section
      className={`relative w-full max-h-[40vh] flex items-center justify-center overflow-hidden ${
        backgroundImage ? "" : getBackgroundClass(backgroundColor)
      }`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
        </div>
      )}

      {/* Content Container */}
      <div className="container relative z-10 px-4 mx-auto lg:px-0 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 ">
          {" "}
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            {smallText && (
              <p
                className={`text-sm uppercase tracking-wide font-medium ${
                  backgroundImage ? "text-gray-50" : "text-gray-600"
                }`}
              >
                ----- {smallText}
              </p>
            )}

            {heading && (
              <SectionHeading
                heading={heading}
                headingTag={headingTag}
                className={`text-3xl lg:text-5xl font-bold ${
                  backgroundImage ? "text-white" : "text-gray-900"
                }`}
              />
            )}

            {/* CTA Button */}
            {ctaButton && <div className="pt-4">{renderCtaButton()}</div>}
          </div>
          {/* Featured Image */}
          {featuredImage && (
            <div className="relative">
              <div className="relative flex items-center max-w-lg mx-auto max-h-[45vh] aspect-square lg:max-w-none">
                <Image
                  src={featuredImage}
                  alt={featuredImageAlt}
                  className="object-cover w-1/3 mx-auto"
                  quality={100}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FullWidthHeroBlock;
