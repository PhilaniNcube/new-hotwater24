import { sanityFetch } from "@/sanity/live";
import { LANDING_PAGE_QUERY } from "@/sanity/sanity-utils";
import PagebuilderRenderer from "@/components/blocks/pagebuilder-renderer";
import type { Metadata } from "next";

export const dynamic = "force-static";

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await props.params;

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
    title: data.seoTitle || data.title || "Hotwater24",
    description:
      data.seoDescription || "Expert gas geyser installations and services",
  };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;

  const { data } = await sanityFetch({
    query: LANDING_PAGE_QUERY,
    params: { slug },
  });

  if (!data) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div>
      <PagebuilderRenderer sections={data.pageBuilder} />
    </div>
  );
}
