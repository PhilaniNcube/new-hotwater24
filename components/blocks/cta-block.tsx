"use client";
import { CtaSection } from "@/sanity/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "lucide-react";
import SectionHeading from "../ui/section-heading";

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
    headingTag,
  } = data;

  const renderCtaButton = (button: any, isPrimary: boolean = true) => {
    if (!button) return null;

    const buttonContent = (
      <Button
        className={`flex items-center justify-center h-12 text-sm text-white rounded-none shadow-lg min-w-[190px] ${
          isPrimary
            ? "bg-orange-600 hover:bg-orange-700"
            : "bg-brand hover:bg-sky-700"
        }`}
      >
        {button.buttonText}
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
    <section className="relative w-full mb-10 rounded-lg min-h-[400px] flex items-center justify-center max-w-7xl mx-auto">
      {backgroundImage && (
        <Image
          src={urlFor(backgroundImage).url()}
          alt="CTA Background"
          fill
          className="object-cover z-[-1]"
        />
      )}
      <div
        className={`absolute rounded-2xl inset-0 ${backgroundImage ? "bg-black/50" : "bg-slate-200"} z-[-1]`}
      />

      <div className="container relative z-10 flex items-end justify-between px-4 md:px-12">
        <div className="flex flex-col space-y-4">
          {heading && (
            <SectionHeading
              heading={heading}
              headingTag={headingTag || "h2"}
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
            />
          )}
          {subheading && (
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {subheading}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4 min-[400px]:flex-row items-center justify-center pt-6">
          {renderCtaButton(ctaButton, true)}
          {renderCtaButton(secondaryCtaButton, false)}
        </div>
      </div>
    </section>
  );
}
