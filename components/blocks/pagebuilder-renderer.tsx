import React from "react";
import HeroBlock from "./hero-block";
import CenteredHeroBlock from "./centered-hero-block";
import TextWithImageBlock from "./text-with-image-block";
import FeatureListBlock from "./feature-list-block";
import StepBlock from "./step-block";
import TestimonialBlock from "./testimonial-block";
import VideoEmbedBlock from "./video-embed-block";
import CtaBlock from "./cta-block";
import ContactFormBlock from "./contact-form-block";
import RichTextBlock from "./rich-text-block";
import ImageGalleryBlock from "./image-gallery-block";
import FullWidthImageBlock from "./full-width-image-block";
import FullWidthHeroBlock from "./full-width-hero-block";
import TrustBlock from "./trust-block";
import BrandGridBlock from "./brand-grid-block";
import { LANDING_PAGE_QUERYResult } from "@/sanity/types";

interface PagebuilderRendererProps {
  sections: NonNullable<LANDING_PAGE_QUERYResult>["pageBuilder"];
}

const PagebuilderRenderer: React.FC<PagebuilderRendererProps> = ({
  sections,
}) => {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <div className="pagebuilder">
      {sections.map((section: any, index: number) => {
        const key = `section-${index}`;

        switch (section._type) {
          case "heroSection":
            return <HeroBlock key={key} data={section} />;

          case "centeredHeroSection":
            return <CenteredHeroBlock key={key} data={section} />;

          case "textWithImageSection":
            return <TextWithImageBlock key={key} data={section} />;

          case "featureListSection":
            return <FeatureListBlock key={key} data={section} />;

          case "stepSection":
            return <StepBlock key={key} data={section} />;

          case "testimonialSection":
            return <TestimonialBlock key={key} data={section} />;

          case "videoEmbedSection":
            return <VideoEmbedBlock key={key} data={section} />;

          case "ctaSection":
            return <CtaBlock key={key} data={section} />;

          case "contactFormSection":
            return <ContactFormBlock key={key} data={section} />;

          case "richTextSection":
            return <RichTextBlock key={key} data={section} />;
          case "imageGallerySection":
            return <ImageGalleryBlock key={key} data={section} />;
          case "fullWidthImageSection":
            return <FullWidthImageBlock key={key} data={section} />;

          case "fullWidthHeroSection":
            return <FullWidthHeroBlock key={key} data={section} />;

          case "trustSection":
            return <TrustBlock key={key} data={section} />;

          case "brandGridSection":
            return <BrandGridBlock key={key} data={section} />;

          default:
            // Handle unknown section types gracefully
            return (
              <div key={key} className="px-4 py-8">
                <div className="container mx-auto">
                  <p className="text-gray-500">
                    Unknown section type: {(section as any)._type}
                  </p>
                </div>
              </div>
            );
        }
      })}
    </div>
  );
};

export default PagebuilderRenderer;
