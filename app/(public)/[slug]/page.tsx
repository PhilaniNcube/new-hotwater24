import { Suspense } from "react";
import type { Metadata } from "next";
import { getLandingPageBySlug } from "@/features/landing-pages/landing-pages-queries";
import { LandingPageContent } from "./_components/landing-page-content";
import { LandingPageSkeleton } from "./_components/landing-page-skeleton";

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
    title: landingPage.seoTitle || landingPage.title || "Hotwater24",
    description:
      landingPage.seoDescription || "Expert gas geyser installations and services",
  };
}

export default function LandingPage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<LandingPageSkeleton />}>
      {params.then(({ slug }) => (
        <LandingPageContent slug={slug} />
      ))}
    </Suspense>
  );
}
