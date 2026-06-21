import { Suspense } from "react";
import type { Metadata } from "next";
import { getGeyserBySlug } from "@/features/geysers/geysers-queries";
import { PackageContent } from "./_components/package-content";
import { PackageSkeleton } from "./_components/package-skeleton";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const geyser = await getGeyserBySlug(slug);

  if (!geyser) {
    return {
      title: "Geyser Not Found",
      description: "The requested geyser could not be found.",
    };
  }

  return {
    metadataBase: new URL("https://www.hotwater24.com"),
    title: `${geyser?.title!} | Hotwater24`,
    description: geyser.description,
    keywords:
      "gas geyser installations, gas geyser installation prices, gas geyser installation near me, how does a gas geyser work, gas geyser installation cost, gas geyser installation cape town, gas geyser installation durbanville, gas geyser installation brackenfell, gas geyser installation bellville, gas geyser installation kraaifontein, gas geyser installation kuilsriver, gas geyser installation parow, gas geyser installation goodwood, gas geyser installation monte vista, gas geyser installation edgemead, gas geyser installation plattekloof, gas geyser installation panorama, gas geyser installation welgemoed, gas geyser installation tygervalley, gas geyser installation durbanville hills, gas geyser installation sonstraal heights, gas geyser installation sonstraal, how does a gas geyser work",
    twitter: {
      card: "summary_large_image",
      title: geyser.title!,
      description: geyser.description!,
      images: [geyser.image!],
    },
    robots: {
      follow: true,
      index: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      images: [geyser.image!],
      title: `${geyser.title} | Hotwater24`,
      description: geyser.description!,
      type: "website",
    },
  };
}

export default function PackagePage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<PackageSkeleton />}>
      {params.then(({ slug }) => (
        <PackageContent slug={slug} />
      ))}
    </Suspense>
  );
}
