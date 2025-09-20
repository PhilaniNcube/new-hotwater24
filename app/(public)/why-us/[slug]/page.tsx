import React from "react";
import { client, LANDING_PAGE_QUERY } from "@/sanity/sanity-utils";
import { sanityFetch } from "@/sanity/live";
import PageBuilderRenderer from "@/components/blocks/pagebuilder-renderer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const { data } = await sanityFetch({
    query: LANDING_PAGE_QUERY,
    params: { slug },
  });

  if (!data) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: data.seoTitle || data.title || "Why Choose Us - Hotwater24",
    description:
      data.seoDescription ||
      "Discover why Hotwater24 is the trusted choice for gas geyser installations and services",
  };
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;

  // Fetch landing page content from Sanity
  const { data: landingPage } = await sanityFetch({
    query: LANDING_PAGE_QUERY,
    params: { slug },
  });

  // If no landing page found, return 404
  if (!landingPage) {
    notFound();
  }

  return (
    <div>
      {/* Render the page builder content */}
      {landingPage.pageBuilder && (
        <PageBuilderRenderer sections={landingPage.pageBuilder} />
      )}
    </div>
  );
};

export default page;
