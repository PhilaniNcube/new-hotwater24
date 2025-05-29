import { TextWithImageSection } from "@/sanity/types";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import SectionHeading from "@/components/ui/section-heading";

interface TextWithImageBlockProps {
  data: TextWithImageSection;
}

export default function TextWithImageBlock({ data }: TextWithImageBlockProps) {
  const {
    heading,
    headingTag,
    textContent,
    subheading,
    image,
    imagePosition = "right",
    ctaButton,
  } = data;

  const renderCtaButton = () => {
    if (!ctaButton) return null;

    const buttonContent = (
      <Button className="flex items-center justify-center h-12 text-sm text-white bg-orange-600 shadow-lg hover:bg-red-700 min-w-[190px]">
        {ctaButton.buttonText}
      </Button>
    );

    if (ctaButton.linkType === "internal" && ctaButton.internalLink) {
      return (
        <Link href={`/${ctaButton.internalLink._ref}`}>{buttonContent}</Link>
      );
    }

    if (ctaButton.linkType === "external" && ctaButton.externalUrl) {
      return (
        <Link
          href={ctaButton.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonContent}
        </Link>
      );
    }

    if (ctaButton.linkType === "file" && ctaButton.fileLink) {
      return (
        <Link
          href={`${ctaButton.fileLink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonContent}
        </Link>
      );
    }

    return buttonContent;
  };
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 mx-auto max-w-7xl md:px-0">
        <div
          className={`flex flex-col items-center gap-6 lg:flex-row lg:gap-12`}
        >
          {image && (
            <div className="flex justify-end flex-1 bg-blue-300">
              <Image
                alt={heading || "Content image"}
                className="object-cover object-top w-full mx-auto overflow-hidden rounded-lg aspect-square"
                src={urlFor(image).url()}
                width="500"
                height="844"
              />
            </div>
          )}{" "}
          <div className="flex flex-col justify-center flex-1 space-y-4">
            <div className="relative inline-block w-fit">
              <p className="relative z-10 py-2 text-xl font-medium text-orange-600">
                {subheading || "Discover our features"}
              </p>{" "}
            </div>
            <SectionHeading
              heading={heading}
              headingTag={headingTag}
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
            />
            {textContent && (
              <div className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed prose prose-slate">
                <PortableText value={textContent} />
              </div>
            )}
            {ctaButton && (
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {renderCtaButton()}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
