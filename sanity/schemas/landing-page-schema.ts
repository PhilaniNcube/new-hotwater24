import { Rule, SanityDocument } from "@sanity/types";

interface LandingPageDocument extends SanityDocument {
  title: string;
  slug: {
    current: string;
    _type: "slug";
  };
  seoTitle?: string;
  seoDescription?: string;
  navigationText?: string;
  includeInTopNavigation?: boolean;
  includeInFooterNavigation?: boolean;
  pageBuilder?: Array<
    | HeroSectionType
    | TextWithImageSectionType
    | FeatureListSectionType
    | StepSectionType
    | TestimonialSectionType
    | VideoEmbedSectionType
    | CtaSectionType
    | ContactFormSectionType
    | RichTextSectionType
    | ImageGallerySectionType
    | FullWidthImageSectionType
  >;
}

interface HeroSectionType {
  _type: "heroSection";
  heading: string;
  headingTag?: "h1" | "h2" | "h3" | "h4";
  subheading?: string;
  backgroundImage?: any; // Sanity image type
  ctaButton?: CtaType;
  secondaryCtaButton?: CtaType;
  overlayImage?: any; // Sanity image type
}

interface TextWithImageSectionType {
  _type: "textWithImageSection";
  heading?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4";
  textContent?: any[]; // Sanity block content
  image: any; // Sanity image type
  imagePosition: "left" | "right";
  ctaButton?: CtaType;
}

interface FeatureListSectionType {
  _type: "featureListSection";
  heading?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4";
  subheading?: string;
  features?: FeatureItemType[];
  layout: "grid" | "list";
}

interface FeatureItemType {
  _type: "featureItem";
  icon?: any; // Sanity image type
  title: string;
  description: string;
  link?: string;
}

interface StepSectionType {
  _type: "stepSection";
  heading: string;
  headingTag?: "h1" | "h2" | "h3" | "h4";
  steps?: StepItemType[];
}

interface StepItemType {
  _type: "stepItem";
  icon?: string; // URL string from GROQ query: icon.asset->url
  title: string;
  description: string;
}

interface TestimonialSectionType {
  _type: "testimonialSection";
  heading?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4";
  testimonials?: TestimonialItemType[];
}

interface TestimonialItemType {
  _type: "testimonialItem";
  quote: string;
  authorName: string;
  authorTitleOrCompany?: string;
  authorImage?: any; // Sanity image type
  rating?: 1 | 2 | 3 | 4 | 5;
}

interface VideoEmbedSectionType {
  _type: "videoEmbedSection";
  heading?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4";
  videoUrl: string;
  caption?: string;
  placeholderImage?: any; // Sanity image type
}

interface CtaSectionType {
  _type: "ctaSection";
  heading: string;
  headingTag?: "h1" | "h2" | "h3" | "h4";
  subheading?: string;
  ctaButton: CtaType;
  secondaryCtaButton?: CtaType;
  backgroundImage?: any; // Sanity image type
}

interface ContactFormSectionType {
  _type: "contactFormSection";
  heading?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4";
  subheading?: string;
  formId?: string;
  submitButtonText?: string;
}

interface RichTextSectionType {
  _type: "richTextSection";
  heading?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4";
  content: any[]; // Sanity block content
}

interface ImageGallerySectionType {
  _type: "imageGallerySection";
  heading?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4";
  images: Array<{
    _type: "image";
    caption?: string;
    alt?: string;
  }>;
  layout: "grid" | "masonry" | "carousel";
}

interface FullWidthImageSectionType {
  _type: "fullWidthImageSection";
  image: any; // Sanity image type
  alt?: string;
  caption?: string;
  height?: "small" | "medium" | "large" | "viewport";
  overlay?: {
    enabled: boolean;
    opacity?: number;
    color?: string;
  };
}

interface CtaType {
  _type: "cta";
  buttonText: string;
  linkType: "internal" | "external" | "file";
  internalLink?: any; // Sanity reference type
  externalUrl?: string;
  fileLink?: any; // Sanity file type
  buttonStyle: "primary" | "secondary" | "outline";
}

export default {
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title (Internal)",
      description: "This title is for internal reference in Sanity Studio.",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug (URL Path)",
      type: "slug",
      options: {
        source: "title", // Automatically generate from the internal title
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      description:
        "Title that appears in browser tabs and search engine results (max 60 characters recommended).",
      type: "string",
      validation: (Rule: Rule) => Rule.max(60),
    },
    {
      name: "seoDescription",
      title: "SEO Meta Description",
      description:
        "Description for search engine results (max 160 characters recommended).",
      type: "text",
      rows: 3,
      validation: (Rule: Rule) => Rule.max(160),
    },
    {
      name: "navigationText",
      title: "Navigation Text",
      description:
        "Text to display in navigation menus. If not provided, the page title will be used.",
      type: "string",
      validation: (Rule: Rule) => Rule.max(50),
    },
    {
      name: "includeInTopNavigation",
      title: "Include in Top Navigation",
      description:
        "Show this page in the main navigation menu at the top of the site.",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "includeInFooterNavigation",
      title: "Include in Footer Navigation",
      description: "Show this page in the footer navigation links.",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "pageBuilder",
      title: "Page Sections",
      description: "Add, edit, and reorder sections to build the landing page.",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: "textWithImageSection" },
        { type: "featureListSection" }, // For "Services" or "How It Works" with icons
        { type: "stepSection" }, // For numbered/ordered steps like "How It Works"
        { type: "testimonialSection" },
        { type: "videoEmbedSection" },
        { type: "ctaSection" },
        { type: "contactFormSection" },
        { type: "richTextSection" }, // A generic rich text section for flexible content
        { type: "imageGallerySection" }, // For showcasing multiple images
        { type: "fullWidthImageSection" }, // For full-width hero images or visual breaks
        // Add other section types as needed
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
};

// Reusable Object Types (Sections)

export const heroSection = {
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Headline",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "headingTag",
      title: "Heading Tag",
      description:
        "Choose the HTML heading tag for the headline (h1, h2, h3, or h4)",
      type: "string",
      options: {
        list: [
          { title: "H1", value: "h1" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
        ],
        layout: "radio",
      },
      initialValue: "h1",
    },
    {
      name: "subheading",
      title: "Subheadline",
      type: "text",
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true, // Enables image cropping
      },
    },
    {
      name: "ctaButton",
      title: "Call to Action Button",
      type: "cta", // Reusable CTA object
    },
    // {
    //   name: "secondaryCtaButton",
    //   title: "Secondary Call to Action Button (Optional)",
    //   type: "cta",
    // },
    // Example of adding a small image/logo over the hero
    {
      name: "overlayImage",
      title: "Overlay Image (e.g., small logo)",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "backgroundImage",
    },
    prepare({ title, media }: { title?: string; media?: any }) {
      return {
        title: `Hero: ${title || "Untitled"}`,
        media: media,
      };
    },
  },
};

export const textWithImageSection = {
  name: "textWithImageSection",
  title: "Text with Image Section",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "headingTag",
      title: "Heading Tag",
      description: "Choose the HTML heading tag for the section heading",
      type: "string",
      options: {
        list: [
          { title: "H1", value: "h1" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
        ],
        layout: "radio",
      },
      initialValue: "h2",
      hidden: ({ parent }: { parent: any }) => !parent?.heading,
    },
    {
      name: "subheading",
      title: "Subheading (Optional)",
      type: "text",
      description: "Optional subheading for additional context or description.",
      validation: (Rule: Rule) => Rule.max(100),
    },
    {
      name: "textContent",
      title: "Text Content",
      type: "array", // Using array of blocks for rich text capabilities
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "imagePosition",
      title: "Image Position",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "right",
    },
    {
      name: "ctaButton",
      title: "Call to Action Button (Optional)",
      type: "cta",
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "image",
    },
    prepare({ title, media }: { title?: string; media?: any }) {
      return {
        title: `Text w/ Image: ${title || "Untitled"}`,
        media: media,
      };
    },
  },
};

export const featureListSection = {
  name: "featureListSection",
  title: "Feature List Section",
  description:
    'Used for "Services", "Why Choose Us", or simple "How It Works" points.',
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Section Heading",
      type: "string",
    },
    {
      name: "headingTag",
      title: "Heading Tag",
      description: "Choose the HTML heading tag for the section heading",
      type: "string",
      options: {
        list: [
          { title: "H1", value: "h1" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
        ],
        layout: "radio",
      },
      initialValue: "h2",
      hidden: ({ parent }: { parent: any }) => !parent?.heading,
    },
    {
      name: "subheading",
      title: "Section Subheading (Optional)",
      type: "text",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "featureItem" }], // Reusable feature item
    },
    {
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Grid", value: "grid" },
          { title: "List (Vertical)", value: "list" },
        ],
        layout: "radio",
      },
      initialValue: "grid",
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "features.length",
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: number }) {
      return {
        title: `Features: ${title || "Untitled"}`,
        subtitle: `${subtitle || 0} feature(s)`,
      };
    },
  },
};

export const featureItem = {
  name: "featureItem",
  title: "Feature Item",
  type: "object",
  fields: [
    {
      name: "icon",
      title: "Icon (Optional)",
      type: "image", // Or you could use a string for an icon library class e.g., FontAwesome
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link (Optional)",
      type: "url",
      description: "Make the feature item clickable.",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "icon",
    },
  },
};

export const stepSection = {
  name: "stepSection",
  title: "Step Section (How It Works)",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Section Heading",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "headingTag",
      title: "Heading Tag",
      description: "Choose the HTML heading tag for the section heading",
      type: "string",
      options: {
        list: [
          { title: "H1", value: "h1" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
        ],
        layout: "radio",
      },
      initialValue: "h2",
    },
    {
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          name: "stepItem",
          title: "Step",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "image",
              description: "Upload an icon image for this step",
              options: {
                hotspot: true,
              },
            },
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "title",
              media: "icon",
            },
            prepare({ title, media }: { title?: string; media?: any }) {
              return {
                title: title,
                media: media,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "steps.length",
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: number }) {
      return {
        title: `Steps: ${title || "Untitled"}`,
        subtitle: `${subtitle || 0} step(s)`,
      };
    },
  },
};

export const testimonialSection = {
  name: "testimonialSection",
  title: "Testimonial Section",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Section Heading (Optional)",
      type: "string",
    },
    {
      name: "headingTag",
      title: "Heading Tag",
      description: "Choose the HTML heading tag for the section heading",
      type: "string",
      options: {
        list: [
          { title: "H1", value: "h1" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
        ],
        layout: "radio",
      },
      initialValue: "h2",
      hidden: ({ parent }: { parent: any }) => !parent?.heading,
    },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "testimonialItem" }], // Reusable testimonial item
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "testimonials.length",
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: number }) {
      return {
        title: `Testimonials: ${title || "Multiple Testimonials"}`,
        subtitle: `${subtitle || 0} testimonial(s)`,
      };
    },
  },
};

export const testimonialItem = {
  name: "testimonialItem",
  title: "Testimonial Item",
  type: "object",
  fields: [
    {
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "authorName",
      title: "Author Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "authorTitleOrCompany",
      title: "Author Title/Company (Optional)",
      type: "string",
    },
    {
      name: "authorImage",
      title: "Author Image (Optional)",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "rating",
      title: "Rating (Optional)",
      type: "number",
      description: "e.g., 1-5 stars",
      options: {
        list: [1, 2, 3, 4, 5],
      },
    },
  ],
  preview: {
    select: {
      title: "quote",
      subtitle: "authorName",
      media: "authorImage",
    },
  },
};

export const videoEmbedSection = {
  name: "videoEmbedSection",
  title: "Video Embed Section",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Section Heading (Optional)",
      type: "string",
    },
    {
      name: "headingTag",
      title: "Heading Tag",
      description: "Choose the HTML heading tag for the section heading",
      type: "string",
      options: {
        list: [
          { title: "H1", value: "h1" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
        ],
        layout: "radio",
      },
      initialValue: "h2",
      hidden: ({ parent }: { parent: any }) => !parent?.heading,
    },
    {
      name: "videoUrl",
      title: "Video URL",
      description: "Enter the URL of the video (e.g., YouTube, Vimeo).",
      type: "url",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "caption",
      title: "Caption (Optional)",
      type: "string",
    },
    // You might add a placeholder image that is shown before the video loads/plays
    {
      name: "placeholderImage",
      title: "Placeholder Image (Optional)",
      description:
        "Image shown before video plays. Useful if the video embed is heavy.",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "videoUrl",
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: `Video: ${title || subtitle || "Untitled"}`,
      };
    },
  },
};

export const ctaSection = {
  name: "ctaSection",
  title: "Call to Action Section",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Headline",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "headingTag",
      title: "Heading Tag",
      description: "Choose the HTML heading tag for the headline",
      type: "string",
      options: {
        list: [
          { title: "H1", value: "h1" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
        ],
        layout: "radio",
      },
      initialValue: "h2",
    },
    {
      name: "subheading",
      title: "Subheadline (Optional)",
      type: "text",
    },
    {
      name: "ctaButton",
      title: "Primary Button",
      type: "cta",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "secondaryCtaButton",
      title: "Secondary Button (Optional)",
      type: "cta",
    },
    {
      name: "backgroundImage",
      title: "Background Image (Optional)",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }: { title?: string }) {
      return {
        title: `CTA: ${title || "Untitled"}`,
      };
    },
  },
};

export const contactFormSection = {
  name: "contactFormSection",
  title: "Contact Form Section",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "headingTag",
      title: "Heading Tag",
      description: "Choose the HTML heading tag for the section heading",
      type: "string",
      options: {
        list: [
          { title: "H1", value: "h1" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
        ],
        layout: "radio",
      },
      initialValue: "h2",
      hidden: ({ parent }: { parent: any }) => !parent?.heading,
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "text",
    },
    {
      name: "formId", // Or integrate with a form service
      title: "Form Identifier",
      type: "string",
      description:
        "Identifier for a pre-defined form (e.g., Netlify Forms name, Hubspot Form ID) or for backend handling.",
    },
    // Alternatively, define form fields directly if simple:
    // {
    //     name: 'showNameField',
    //     title: 'Show Name Field',
    //     type: 'boolean',
    //     initialValue: true
    // },
    // {
    //     name: 'showEmailField',
    //     title: 'Show Email Field',
    //     type: 'boolean',
    //     initialValue: true
    // },
    // etc. for phone, message
    {
      name: "submitButtonText",
      title: "Submit Button Text",
      type: "string",
      initialValue: "Send Message",
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }: { title?: string }) {
      return {
        title: `Contact Form: ${title || "Form Section"}`,
      };
    },
  },
};

export const richTextSection = {
  name: "richTextSection",
  title: "Rich Text Section",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading (Optional)",
      type: "string",
    },
    {
      name: "headingTag",
      title: "Heading Tag",
      description: "Choose the HTML heading tag for the section heading",
      type: "string",
      options: {
        list: [
          { title: "H1", value: "h1" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
        ],
        layout: "radio",
      },
      initialValue: "h2",
      hidden: ({ parent }: { parent: any }) => !parent?.heading,
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block", // Standard rich text block
          styles: [
            // Customize available styles
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            // Customize available lists
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            // Customize available marks (bold, italic, etc.)
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              // For links or internal references
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean",
                  },
                ],
              },
              //   {  // Example for internal link to other documents
              //     name: 'internalLink',
              //     type: 'object',
              //     title: 'Internal link',
              //     fields: [
              //       {
              //         name: 'reference',
              //         type: 'reference',
              //         title: 'Reference',
              //         to: [
              //           { type: 'post' }, // Example: link to a blog post
              //           { type: 'page' }  // Example: link to another page
              //           // other types of documents you may want to link to
              //         ]
              //       }
              //     ]
              //   }
            ],
          },
        },
        { type: "image", options: { hotspot: true } }, // Allow images within rich text
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }: { title?: string }) {
      return {
        title: `Rich Text: ${title || "Content Block"}`,
      };
    },
  },
};

export const imageGallerySection = {
  name: "imageGallerySection",
  title: "Image Gallery Section",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading (Optional)",
      type: "string",
    },
    {
      name: "headingTag",
      title: "Heading Tag",
      description: "Choose the HTML heading tag for the section heading",
      type: "string",
      options: {
        list: [
          { title: "H1", value: "h1" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
        ],
        layout: "radio",
      },
      initialValue: "h2",
      hidden: ({ parent }: { parent: any }) => !parent?.heading,
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            // Optional: add fields to each image like caption
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
            {
              name: "alt",
              type: "string",
              title: "Alternative text (for SEO & accessibility)",
            },
          ],
        },
      ],
      validation: (Rule: Rule) => Rule.min(1), // Require at least one image
    },
    {
      name: "layout",
      title: "Layout Style",
      type: "string",
      options: {
        list: [
          { title: "Grid", value: "grid" },
          { title: "Masonry", value: "masonry" },
          { title: "Carousel / Slider", value: "carousel" },
        ],
        layout: "radio",
      },
      initialValue: "grid",
    },
  ],
  preview: {
    select: {
      title: "heading",
      images: "images",
    },
    prepare({ title, images }: { title?: string; images?: any[] }) {
      const imageCount = images ? images.length : 0;
      return {
        title: `Gallery: ${title || "Image Gallery"}`,
        subtitle: `${imageCount} image(s)`,
        media: images && images.length > 0 ? images[0] : undefined,
      };
    },
  },
};

export const fullWidthImageSection = {
  name: "fullWidthImageSection",
  title: "Full Width Image Section",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "alt",
      title: "Alternative Text",
      type: "string",
      description: "Describe the image for screen readers and SEO",
    },
    {
      name: "caption",
      title: "Caption (Optional)",
      type: "string",
      description: "Optional caption text to display below the image",
    },
    {
      name: "height",
      title: "Image Height",
      type: "string",
      options: {
        list: [
          { title: "Small (300px)", value: "small" },
          { title: "Medium (500px)", value: "medium" },
          { title: "Large (700px)", value: "large" },
          { title: "Viewport Height", value: "viewport" },
        ],
        layout: "radio",
      },
      initialValue: "medium",
    },
    {
      name: "overlay",
      title: "Overlay Settings (Optional)",
      type: "object",
      fields: [
        {
          name: "enabled",
          title: "Enable Overlay",
          type: "boolean",
          initialValue: false,
        },
        {
          name: "opacity",
          title: "Overlay Opacity",
          type: "number",
          options: {
            range: { min: 0, max: 100, step: 10 },
          },
          initialValue: 50,
          hidden: ({ parent }: { parent: any }) => !parent?.enabled,
        },
        {
          name: "color",
          title: "Overlay Color",
          type: "string",
          options: {
            list: [
              { title: "Black", value: "black" },
              { title: "White", value: "white" },
              { title: "Dark Gray", value: "gray-900" },
              { title: "Brand Color", value: "brand" },
            ],
          },
          initialValue: "black",
          hidden: ({ parent }: { parent: any }) => !parent?.enabled,
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "alt",
      media: "image",
      caption: "caption",
    },
    prepare({
      title,
      media,
      caption,
    }: {
      title?: string;
      media?: any;
      caption?: string;
    }) {
      return {
        title: `Full Width Image: ${title || caption || "Untitled"}`,
        media: media,
      };
    },
  },
};

// Reusable CTA (Call To Action) Object Type
export const cta = {
  name: "cta",
  title: "Call to Action",
  type: "object",
  fields: [
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "linkType",
      title: "Link Type",
      type: "string",
      options: {
        list: [
          { title: "Internal Page", value: "internal" },
          { title: "External URL", value: "external" },
          { title: "File Download", value: "file" },
          // You could add 'Scroll to Section' if you implement IDs on sections
        ],
        layout: "radio",
      },
      initialValue: "internal",
    },
    {
      name: "internalLink",
      title: "Internal Page Link",
      type: "reference",
      to: [
        {
          type: "landingPage",
        } /* add other page types here e.g. {type: 'blogPost'} */,
      ],
      hidden: ({ parent }: { parent: any }) => parent?.linkType !== "internal", // Show only if linkType is 'internal'
    },
    {
      name: "externalUrl",
      title: "External URL",
      type: "url",
      hidden: ({ parent }: { parent: any }) => parent?.linkType !== "external",
      validation: (Rule: Rule) =>
        Rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
    },
    {
      name: "fileLink",
      title: "File Download",
      type: "file",
      hidden: ({ parent }: { parent: any }) => parent?.linkType !== "file",
    },
    // Optional: Style the button
    {
      name: "buttonStyle",
      title: "Button Style",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Outline", value: "outline" },
        ],
        layout: "radio",
      },
      initialValue: "primary",
    },
  ],
  preview: {
    select: {
      title: "buttonText",
      subtitle: "linkType",
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: title || "Untitled CTA",
        subtitle: `Type: ${subtitle || "Not set"}`,
      };
    },
  },
};

// To use these in your Sanity project (e.g., in sanity.config.js or schemas/index.js):
// import landingPage, * as sections from './landingPageSchema'; // Assuming file is landingPageSchema.js
//
// export const schemaTypes = [
//   landingPage,
//   sections.heroSection,
//   sections.textWithImageSection,
//   sections.featureListSection,
//   sections.featureItem,
//   sections.stepSection,
//   sections.testimonialSection,
//   sections.testimonialItem,
//   sections.videoEmbedSection,
//   sections.ctaSection,
//   sections.contactFormSection,
//   sections.richTextSection,
//   sections.imageGallerySection,
//   sections.cta,
//   // ... other schemas
// ];
