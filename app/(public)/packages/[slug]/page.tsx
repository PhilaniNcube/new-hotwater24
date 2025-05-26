import PackageDetails from "@/components/Packages/package-details";
import { sanityFetch } from "@/sanity/live";
import { GEYSER_QUERY } from "@/sanity/sanity-utils";
import type { Metadata } from "next";

export const dynamic = "force-static";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  // read route params
  const slug = params.slug;

  const { data: geyser } = await sanityFetch({
    query: GEYSER_QUERY,
    params,
  });

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

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const { data: geyser } = await sanityFetch({
    query: GEYSER_QUERY,
    params,
  });

  return (
    <main className="container py-10 mx-auto max-w-7xl">
      <PackageDetails geyser={geyser} />
    </main>
  );
};
export default page;
