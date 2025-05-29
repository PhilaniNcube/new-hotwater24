import { createClient, defineQuery, groq } from "next-sanity";

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
    navigationText,
    includeInTopNavigation,
    includeInFooterNavigation,
    pageBuilder[]{
      _type,
      _type == "heroSection" => {
        heading,
        headingTag,
        subheading,
        "backgroundImage": backgroundImage.asset->url,
        "overlayImage": overlayImage.asset->url,
        ctaButton,
      },
      _type == "textWithImageSection" => {
        heading,
        headingTag,
        textContent,
        subheading,
        "image": image.asset->url,
        imagePosition,
        ctaButton
      },
      _type == "featureListSection" => {
        heading,
        headingTag,
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
        headingTag,
        steps[]{
          "icon": icon.asset->url,
          title,
          description
        }
      },
      _type == "testimonialSection" => {
        heading,
        headingTag,
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
        headingTag,
        videoUrl,
        caption,
        "placeholderImage": placeholderImage.asset->url
      },
      _type == "ctaSection" => {
        heading,
        headingTag,
        subheading,
        ctaButton,
        secondaryCtaButton,
        "backgroundImage": backgroundImage.asset->url
      },
      _type == "contactFormSection" => {
        heading,
        headingTag,
        subheading,
        formId,
        submitButtonText
      },
      _type == "richTextSection" => {
        heading,
        headingTag,
        content
      },      _type == "imageGallerySection" => {
        heading,
        headingTag,
        images[]{
          "url": asset->url,
          caption,
          alt
        },
        layout
      },
      _type == "fullWidthImageSection" => {
        "image": image.asset->url,
        alt,
        caption,
        height,
        overlay
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
    navigationText,
    includeInTopNavigation,
    includeInFooterNavigation,
    pageBuilder[]{
      _type,
      _type == "heroSection" => {
        heading,
        headingTag,
        subheading,
        "backgroundImage": backgroundImage.asset->url,
        "overlayImage": overlayImage.asset->url,
        ctaButton
      },
      _type == "textWithImageSection" => {
        heading,
        headingTag,
        textContent,
        "image": image.asset->url,
        imagePosition,
        ctaButton
      },
      _type == "featureListSection" => {
        heading,
        headingTag,
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
        headingTag,        steps[]{
          "icon": icon.asset->url,
          title,
          description
        }
      },
      _type == "testimonialSection" => {
        heading,
        headingTag,
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
        headingTag,
        videoUrl,
        caption,
        "placeholderImage": placeholderImage.asset->url
      },
      _type == "ctaSection" => {
        heading,
        headingTag,
        subheading,
        ctaButton,
        secondaryCtaButton,
        "backgroundImage": backgroundImage.asset->url
      },
      _type == "contactFormSection" => {
        heading,
        headingTag,
        subheading,
        formId,
        submitButtonText
      },
      _type == "richTextSection" => {
        heading,
        headingTag,
        content
      },      _type == "imageGallerySection" => {
        heading,
        headingTag,
        images[]{
          "url": asset->url,
          caption,
          alt
        },
        layout
      },
      _type == "fullWidthImageSection" => {
        "image": image.asset->url,
        alt,
        caption,
        height,
        overlay
      }
    }
  }`
);

export const TOP_NAVIGATION_QUERY = defineQuery(
  `*[_type == "landingPage" && includeInTopNavigation == true] {
    title,
    slug,
    navigationText
  }`
);

export const FOOTER_NAVIGATION_QUERY = defineQuery(
  `*[_type == "landingPage" && includeInFooterNavigation == true] {
    title,
    slug,
    navigationText
  }`
);
