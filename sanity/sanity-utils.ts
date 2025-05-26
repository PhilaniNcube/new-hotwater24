import { createClient, defineQuery, groq } from "next-sanity";
import {
  Article,
  Geysers,
  LandingPage,
  GEYSERS_QUERYResult,
  GEYSER_QUERYResult,
  LANDING_PAGES_QUERYResult,
  LANDING_PAGE_QUERYResult,
} from "./types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-12-01",
  useCdn: true,
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
});

export const ARTICLES_QUERY =
  defineQuery(`*[_type == "article"] | order(_createdAt desc){
      _id,
      _createdAt,
      title,
      meta_title,
      meta_description,
      "slug": slug.current,
      "image": image.asset->url,
      link,
      content
    }`);

export const ARTICLE_QUERY = defineQuery(
  `*[_type == "article" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      meta_title,
      meta_description,
      "slug": slug.current,
      "image": image.asset->url,
      link,
      content
    }`
);

export const GEYSERS_QUERY = defineQuery(
  `*[_type == "geysers"] | order(_createdAt asc){
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      subTitle,
      description,
      outlets,
     geyser,
     plumbing,
     price,
     composition,
     certificateOfCompliance,
     installation,
      warranty,
      specifications,
      maxFlowRate,
      minFlowRate,
      minWaterPressure,
      maxWaterPressure,
      dimensions,
      brand,
      "image": image.asset->url,
    }`
);

export const GEYSER_QUERY = defineQuery(
  `*[_type == "geysers" && slug.current == $slug][0]{
     _id,
      _createdAt,
      title,
      "slug": slug.current,
      price,
      subTitle,
      composition,
      description,
      outlets,
      geyser,
     plumbing,
     certificateOfCompliance,
     installation,
      warranty,
      specifications,
      maxFlowRate,
      minFlowRate,
      minWaterPressure,
      maxWaterPressure,
      dimensions,
      brand,
      "image": image.asset->url,
    }`
);

export const LANDING_PAGES_QUERY = defineQuery(
  `*[_type == "landingPage"] | order(_createdAt desc){
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    seoTitle,
    seoDescription,
    pageBuilder[]{
      _type,
      _type == "heroSection" => {
        heading,
        subheading,
        "backgroundImage": backgroundImage.asset->url,
        "overlayImage": overlayImage.asset->url,
        ctaButton,
        secondaryCtaButton
      },
      _type == "textWithImageSection" => {
        heading,
        textContent,
        "image": image.asset->url,
        imagePosition,
        ctaButton
      },
      _type == "featureListSection" => {
        heading,
        subheading,
        features[]{
          "icon": icon.asset->url,
          title,
          description,
          link
        },
        layout
      },
      _type == "stepSection" => {
        heading,
        steps[]{
          numberOrIcon,
          title,
          description
        }
      },
      _type == "testimonialSection" => {
        heading,
        testimonials[]{
          quote,
          authorName,
          authorTitleOrCompany,
          "authorImage": authorImage.asset->url,
          rating
        }
      },
      _type == "videoEmbedSection" => {
        heading,
        videoUrl,
        caption,
        "placeholderImage": placeholderImage.asset->url
      },
      _type == "ctaSection" => {
        heading,
        subheading,
        ctaButton,
        secondaryCtaButton,
        "backgroundImage": backgroundImage.asset->url
      },
      _type == "contactFormSection" => {
        heading,
        subheading,
        formId,
        submitButtonText
      },
      _type == "richTextSection" => {
        heading,
        content
      },
      _type == "imageGallerySection" => {
        heading,
        images[]{
          "url": asset->url,
          caption,
          alt
        },
        layout
      }
    }
  }`
);

export const LANDING_PAGE_QUERY = defineQuery(
  `*[_type == "landingPage" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    seoTitle,
    seoDescription,
    pageBuilder[]{
      _type,
      _type == "heroSection" => {
        heading,
        subheading,
        "backgroundImage": backgroundImage.asset->url,
        "overlayImage": overlayImage.asset->url,
        ctaButton,
        secondaryCtaButton
      },
      _type == "textWithImageSection" => {
        heading,
        textContent,
        "image": image.asset->url,
        imagePosition,
        ctaButton
      },
      _type == "featureListSection" => {
        heading,
        subheading,
        features[]{
          "icon": icon.asset->url,
          title,
          description,
          link
        },
        layout
      },
      _type == "stepSection" => {
        heading,
        steps[]{
          numberOrIcon,
          title,
          description
        }
      },
      _type == "testimonialSection" => {
        heading,
        testimonials[]{
          quote,
          authorName,
          authorTitleOrCompany,
          "authorImage": authorImage.asset->url,
          rating
        }
      },
      _type == "videoEmbedSection" => {
        heading,
        videoUrl,
        caption,
        "placeholderImage": placeholderImage.asset->url
      },
      _type == "ctaSection" => {
        heading,
        subheading,
        ctaButton,
        secondaryCtaButton,
        "backgroundImage": backgroundImage.asset->url
      },
      _type == "contactFormSection" => {
        heading,
        subheading,
        formId,
        submitButtonText
      },
      _type == "richTextSection" => {
        heading,
        content
      },
      _type == "imageGallerySection" => {
        heading,
        images[]{
          "url": asset->url,
          caption,
          alt
        },
        layout
      }
    }
  }`
);
