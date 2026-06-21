import { Suspense } from "react";
import type { Metadata } from "next";
import { getLandingPageBySlug } from "@/features/landing-pages/landing-pages-queries";
import { WhyUsContent } from "./_components/why-us-content";
import { WhyUsSkeleton } from "./_components/why-us-skeleton";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const landingPage = await getLandingPageBySlug(slug);

  if (!landingPage) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: landingPage.seoTitle || landingPage.title || "Why Choose Us - Hotwater24",
    description:
      landingPage.seoDescription ||
      "Discover why Hotwater24 is the trusted choice for gas geyser installations and services",
  };
}

export default function WhyUsPage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<WhyUsSkeleton />}>
      {params.then(({ slug }) => (
        <WhyUsContent slug={slug} />
      ))}
    </Suspense>
  );
}
