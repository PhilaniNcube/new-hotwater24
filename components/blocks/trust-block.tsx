import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import SectionHeading from "../ui/section-heading";

interface TrustFeature {
  text: string;
}

interface TrustBlockData {
  _type: "trustSection";
  heading?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4";
  subheading?: string;
  features?: TrustFeature[];
  image?: string;
  imagePosition?: "left" | "right";
  ctaButton?: {
    _type?: string;
    buttonText: string;
    linkType: "internal" | "external" | "file";
    internalLink?: string;
    externalUrl?: string;
    file?: string;
    buttonStyle?: "primary" | "secondary";
  };
}

interface TrustBlockProps {
  data: TrustBlockData;
}

const TrustBlock: React.FC<TrustBlockProps> = ({ data }) => {
  const {
    heading,
    headingTag,
    subheading,
    features = [],
    image,
    imagePosition = "right",
    ctaButton,
  } = data;

  console.log("TrustBlock data:", data);

  return (
    <section className="relative py-16 mx-auto overflow-hidden bg-white max-w-7xl">
      <div className="container px-4 mx-auto">
        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2">
          {imagePosition === "left" ? (
            <>
              {/* Left Column: Image, Heading, Subheading, CTA */}
              <div className="space-y-6">
                {/* Image */}
                {image && (
                  <div className="relative">
                    <div className="relative h-64 overflow-hidden rounded-lg shadow-lg md:h-80 lg:h-96">
                      <Image
                        src={image}
                        alt={"Trust HotWater24"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      />
                    </div>
                  </div>
                )}

                {/* Heading */}
                {heading && (
                  <SectionHeading
                    heading={heading}
                    headingTag={headingTag}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  />
                )}

                {/* Subheading */}
                {subheading && (
                  <p className="text-lg leading-relaxed text-gray-600">
                    {subheading}
                  </p>
                )}

                {/* CTA Button */}
                {ctaButton && (
                  <div className="pt-2">
                    <Link
                      href={
                        ctaButton.externalUrl ||
                        ctaButton.internalLink ||
                        ctaButton.file ||
                        "#"
                      }
                      className="inline-flex items-center px-6 py-3 font-semibold text-white transition-colors duration-200 bg-orange-600 rounded-none hover:bg-orange-700"
                    >
                      {ctaButton.buttonText}
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>

              {/* Right Column: Features List */}
              <div className="space-y-6">
                {features.length > 0 && (
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-lg leading-relaxed text-gray-700">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Left Column: Heading, Features, Subheading, CTA */}
              <div className="space-y-6">
                {/* Heading */}
                {heading && (
                  <SectionHeading
                    heading={heading}
                    headingTag={headingTag}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  />
                )}

                {/* Features List */}
                {features.length > 0 && (
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-lg leading-relaxed text-gray-700">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Subheading */}
                {subheading && (
                  <p className="text-lg italic text-gray-600">{subheading}</p>
                )}

                {/* CTA Button */}
                {ctaButton && (
                  <div className="pt-2">
                    <Link
                      href={
                        ctaButton.externalUrl ||
                        ctaButton.internalLink ||
                        ctaButton.file ||
                        "#"
                      }
                      className="inline-flex items-center px-6 py-3 font-semibold text-white transition-colors duration-200 bg-orange-600 rounded-none hover:bg-orange-700"
                    >
                      {ctaButton.buttonText}
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>

              {/* Right Column: Image */}
              {image && (
                <div className="relative">
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg md:h-80 lg:h-96">
                    <Image
                      src={image}
                      alt={"Trust HotWater24"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrustBlock;
