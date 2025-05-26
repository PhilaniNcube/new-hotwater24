"use client";
import { CtaSection } from "@/sanity/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface CtaBlockProps {
  data: CtaSection;
}

export default function CtaBlock({ data }: CtaBlockProps) {
  const {
    heading,
    subheading,
    ctaButton,
    secondaryCtaButton,
    backgroundImage,
  } = data;

  const renderCtaButton = (button: any, isPrimary: boolean = true) => {
    if (!button) return null;

    const buttonContent = (
      <Button
        className={`flex items-center justify-center h-12 text-sm text-white rounded-full shadow-lg min-w-[190px] ${
          isPrimary
            ? "bg-red-600 hover:bg-red-700"
            : "bg-brand hover:bg-brand/90"
        }`}
      >
        {button.text}
      </Button>
    );

    if (button.linkType === "internal" && button.internalLink) {
      return <Link href={button.internalLink}>{buttonContent}</Link>;
    }

    if (button.linkType === "external" && button.externalUrl) {
      return (
        <Link
          href={button.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonContent}
        </Link>
      );
    }

    if (button.linkType === "file" && button.file) {
      return (
        <Link href={button.file} target="_blank" rel="noopener noreferrer">
          {buttonContent}
        </Link>
      );
    }

    return buttonContent;
  };

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 min-h-[400px] flex items-center justify-center">
      {backgroundImage && (
        <Image
          src={urlFor(backgroundImage).url()}
          alt="CTA Background"
          fill
          className="object-cover z-[-1]"
        />
      )}
      <div
        className={`absolute inset-0 ${backgroundImage ? "bg-black/50" : "bg-red-600"} z-[-1]`}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {heading && (
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {subheading}
            </p>
          )}
          <div className="flex flex-col gap-4 min-[400px]:flex-row items-center justify-center pt-6">
            {renderCtaButton(ctaButton, true)}
            {renderCtaButton(secondaryCtaButton, false)}
          </div>
        </div>
      </div>
    </section>
  );
}
