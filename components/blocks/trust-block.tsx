import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

interface TrustFeature {
  text: string;
}

interface TrustBlockData {
  _type: "trustSection";
  heading?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
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
    headingTag = "h2",
    features = [],
    image,
    imagePosition = "right",
    ctaButton,
  } = data;

  console.log("TrustBlock data:", data);

  const HeadingTag = headingTag;

  return (
    <section className="relative py-16 mx-auto overflow-hidden bg-white max-w-7xl">
      <div className="container px-4 mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Content Section */}
          <div
            className={`space-y-6 ${
              imagePosition === "left" ? "lg:order-2" : "lg:order-1"
            }`}
          >
            {heading && (
              <HeadingTag className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
                {heading}
              </HeadingTag>
            )}

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

            {/* Bottom text */}
            <div className="pt-4">
              {ctaButton && (
                <Link
                  href={
                    ctaButton.externalUrl ||
                    ctaButton.internalLink ||
                    ctaButton.file ||
                    "#"
                  }
                  className={`inline-flex items-center px-6 py-3 font-semibold bg-orange-600 rounded-none text-white transition-colors duration-200`}
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
              )}
            </div>
          </div>

          {/* Image Section */}
          {image && (
            <div
              className={`relative ${
                imagePosition === "left" ? "lg:order-1" : "lg:order-2"
              }`}
            >
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
        </div>
      </div>
    </section>
  );
};

export default TrustBlock;
