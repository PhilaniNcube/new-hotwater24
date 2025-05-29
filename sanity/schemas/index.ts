import article from "./article-schema";
import landingPageSchema, {
  contactFormSection,
  cta,
  ctaSection,
  featureItem,
  featureListSection,
  fullWidthImageSection,
  heroSection,
  imageGallerySection,
  richTextSection,
  stepSection,
  testimonialItem,
  testimonialSection,
  textWithImageSection,
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
  cta,
];

export default schemas;
