import article from "./article-schema";
import landingPageSchema, {
  contactFormSection,
  cta,
  ctaSection,
  featureItem,
  featureListSection,
  fullWidthHeroSection,
  fullWidthImageSection,
  heroSection,
  imageGallerySection,
  richTextSection,
  stepSection,
  testimonialItem,
  testimonialSection,
  textWithImageSection,
  trustSection,
  videoEmbedSection,
} from "./landing-page-schema";
import geysers from "./packages-schema";

const schemas = [
  article,
  geysers,
  landingPageSchema,
  heroSection,
  textWithImageSection,
  featureListSection,
  featureItem,
  stepSection,
  testimonialSection,
  testimonialItem,
  videoEmbedSection,
  ctaSection,
  contactFormSection,
  richTextSection,
  imageGallerySection,
  fullWidthImageSection,
  fullWidthHeroSection,
  trustSection,
  cta,
];

export default schemas;
